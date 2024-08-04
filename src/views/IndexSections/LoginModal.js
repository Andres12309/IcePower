import React from "react";
import classnames from "classnames";
import googleLogo from "assets/img/google.svg";
import facebookLogo from "assets/img/facebook.svg";

// reactstrap components
import {
  Button,
  FormGroup,
  Container,
  Modal,
  Form,
  Input,
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  Label,
} from "reactstrap";

export default function LoginModal({ isOpen, onClose }) {
  const [emailFocus, setEmailFocus] = React.useState(false);
  const [passwordFocus, setPasswordFocus] = React.useState(false);

  if (!isOpen) return null;

  return (
    <Modal
      backdrop="static"
      modalClassName="modal-black"
      isOpen={isOpen}
      toggle={onClose}
    >
      <div className="modal-header justify-content-center align-items-center">
        <div className="text-center mr-2">
          <img
            alt="..."
            src={require("assets/img/logoIcePowerF.png")}
            width={100}
          />
        </div>
        <button className="close" onClick={onClose}>
          <i className="tim-icons icon-simple-remove text-white" />
        </button>
        <h3 className="mb-0">Conéctate</h3>
      </div>

      <div className="modal-body">
        <div className="btn-wrapper text-center">
          <Button
            className="btn-neutral btn-icon"
            color="default"
            href="#pablo"
            onClick={(e) => e.preventDefault()}
          >
            <img alt="..." src={facebookLogo} />
          </Button>
          <Button
            className="btn-neutral btn-icon"
            color="default"
            href="#pablo"
            onClick={(e) => e.preventDefault()}
          >
            <img alt="..." src={googleLogo} />
          </Button>
        </div>
        <div className="text-center text-muted mb-4 mt-3">
          <small>Accede con tus credenciales.</small>
        </div>
        <Form role="form">
          <FormGroup className="mb-3">
            <InputGroup
              className={classnames("input-group-alternative", {
                "input-group-focus": emailFocus,
              })}
            >
              <InputGroupAddon addonType="prepend">
                <InputGroupText>
                  <i className="tim-icons icon-email-85" />
                </InputGroupText>
              </InputGroupAddon>
              <Input
                placeholder="Email"
                type="email"
                onFocus={(e) => setEmailFocus(true)}
                onBlur={(e) => setEmailFocus(false)}
              />
            </InputGroup>
          </FormGroup>
          <FormGroup>
            <InputGroup
              className={classnames("input-group-alternative", {
                "input-group-focus": passwordFocus,
              })}
            >
              <InputGroupAddon addonType="prepend">
                <InputGroupText>
                  <i className="tim-icons icon-key-25" />
                </InputGroupText>
              </InputGroupAddon>
              <Input
                placeholder="Password"
                type="password"
                onFocus={(e) => setPasswordFocus(true)}
                onBlur={(e) => setPasswordFocus(false)}
              />
            </InputGroup>
          </FormGroup>
          <div className="text-center">
            <Button className="my-4" color="primary" type="button">
              Conectar
            </Button>
          </div>
        </Form>
      </div>
    </Modal>
  );
}
