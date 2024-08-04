import React, { useEffect } from 'react';
import API from '../data';
import Cookies from 'js-cookie';
import Routes from '../constants/routes';
import history from '../utils/history';

/**
 * Context está diseñado para compartir datos que pueden
 * considerarse “globales” para un árbol de componentes en React
 * Este contexto sirve para pasar la información de la sesión del usuario
 *
 * https://es.reactjs.org/docs/context.html
 *
 * @type {React.Context<{setAuthenticated: setAuthenticated, isAuthenticated: boolean}>}
 */
const AuthContext = React.createContext({
    isAuthenticated: false,
    setAuthenticated: () => {}
});

/**
 * El provider del contexto expone las siguientes variables que pueden ser usadas
 * por los componentes que consumen este contexto
 *
 *  - isAuthenticated,
 *  - isCheckingAuth,
 *  - setAuthenticated,
 *  - currentUser,
 *  - setCurrentUser
 *
 * @param children
 * @returns {JSX.Element}
 * @constructor
 */
export const AuthProvider = ({ children }) => {
    const [isAuthenticated, setAuthenticated] = React.useState(false);
    const [isCheckingAuth, setIsCheckingAuth] = React.useState(true);
    const [currentUser, setCurrentUser] = React.useState(null);

    /**
     * Este efecto se lanza cuando se monta el contexto y
     * determina si existe una sesión activa en el navegador
     * También añade el evento storage para mantener sincronizadas
     * las sesiones en las diferentes ventanas que tengan abierta la sesión
     */
    useEffect(() => {
        const initializeAuth = async () => {
            window.addEventListener('storage', syncLogout);
            // console.log('added storage event');

            const token = !!Cookies.get('token');
            if (token) {
                try {
                    // TODO change to useSWR and revalidate
                    const currentUserResponse = await API.get('/session/validate');
                    // console.log('currentUserResponse', currentUserResponse);
                    if (currentUserResponse.status === 200) {
                        try {
                            const responseRefresh = await API.get('/session/refresh');
                            setCurrentUser(responseRefresh && responseRefresh.data);
                            Cookies.set('token', responseRefresh.data?.token, { expires: 1 });
                            API.headers['Authorization'] = responseRefresh.data?.token;
                            localStorage.setItem('login', JSON.stringify(true));
                            // console.log('refreshToken', responseRefresh);
                            setAuthenticated(true);
                            // const decodedToken = jwtDecode(responseRefresh.data?.token);
                            // const expirationDate = new Date(decodedToken.exp * 1000); // Convert seconds to milliseconds
                            // console.log(expirationDate);
                        } catch (e) {
                            // console.log('e', e);
                            history.push(Routes.LOGOUT);
                            window.localStorage.removeItem('login');
                            Cookies.remove('token');
                            delete API.headers['Authorization'];
                            setAuthenticated(false);
                            setCurrentUser(null);
                            window.location.reload();
                        }
                    }
                } catch (e) {
                    // console.log('e', e);
                    history.push(Routes.LOGOUT);
                    setAuthenticated(false);
                    window.localStorage.removeItem('login');
                    Cookies.remove('token');
                    delete API.headers['Authorization'];
                    setCurrentUser(null);
                    window.location.reload();
                }
            }
            setIsCheckingAuth(false);

            return () => {
                setAuthenticated(false);
                history.push(Routes.LOGOUT);
                window.localStorage.removeItem('login');
                window.removeEventListener('storage', syncLogout);
                window.localStorage.removeItem('login');
                Cookies.remove('token');
                setCurrentUser(null);
                delete API.headers['Authorization'];
            };
        };

        initializeAuth();

        const refreshTokenInterval = setInterval(initializeAuth, 10 * 60 * 1000);
        // Limpieza del intervalo cuando el componente se desmonta
        return () => clearInterval(refreshTokenInterval);
    }, []);

    /**
     * Esta es la función que se lanza en otras ventanas
     * que tienen abierto el sistema para mantener
     * sincronizada la sesión del usuario.
     *
     * @param event
     */
    const syncLogout = (event) => {
        // console.log('event', event);

        if (event.key === 'login') {
            //     if (event.newValue === 'true') {
            // console.log('login from storage!');
            //         const token = Cookies.get('token'); // check if the token exists
            //         setAuthenticated(true);
            window.location.reload();
            //     } else {
            //         console.log('logged out from storage!');
            //         Cookies.remove('token');
            //         setCurrentUser(null);
            //         setAuthenticated(false);
            //     }
        }
    };

    return (
        <AuthContext.Provider
            value={{
                isAuthenticated,
                isCheckingAuth,
                setAuthenticated,
                currentUser,
                setCurrentUser
            }}
        >
            {children}
        </AuthContext.Provider>
    );
};

/**
 * Este es un hook personalizado que nos permite acceder a la información
 * de la autenticación en cualquier componente del sistema.
 *
 * @returns {{setAuthenticated: setAuthenticated, isAuthenticated: boolean}}
 */
export function useAuth() {
    const context = React.useContext(AuthContext);
    if (context === undefined) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
}

// export function useIsAuthenticated() {
//   const context = useAuth();
//   return context.isAuthenticated;
// }
