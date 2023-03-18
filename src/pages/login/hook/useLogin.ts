import { useState, useContext } from "react";
import AppContext from "../../../contexts/AppContext";
import loginService from "../service/loginService";

function useLogin() {
  const {
    setOpenAlert,
    setMessageAlert,
    setColorAlert,
    timeAlert,
    error,
    setError,
  } = useContext(AppContext);
  const [checked, setChecked] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [visible, setVisible] = useState(false);

  function redirect(to: string) {
    window.open(to, "_blank");
  }

  function handleKeyPress(e: any) {
    if (e.keyCode === 13) {
      login();
      e.preventDefault();
    }
  }

  function login() {
    const result = loginService.login(email, password);
    if (!result) {
      setMessageAlert("email ou senha inválidos");
      setColorAlert("red");
      setOpenAlert(true);
      setError("login");
      // eslint-disable-next-line @typescript-eslint/no-unused-expressions
      timeAlert;
    } else {
      setPassword("");
      setEmail("");
    }
  }

  return {
    checked,
    setChecked,
    redirect,
    email,
    setEmail,
    password,
    setPassword,
    handleKeyPress,
    login,
    error,
    visible,
    setVisible,
  };
}

export default useLogin;
