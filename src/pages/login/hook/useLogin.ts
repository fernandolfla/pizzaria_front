import { useState, useContext } from "react";
import AppContext from "../../../contexts/AppContext";
import LoginType from "../../../types/LoginType";
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
  const service = new loginService();

  function redirect(to: string) {
    window.open(to, "_blank");
  }

  function handleKeyPress(e: any) {
    if (e.keyCode === 13) {
      login();
      e.preventDefault();
    }
  }

  function selectRememberPassword(e: any) {
    if (e.keyCode === 13) setChecked(!checked);
  }

  async function login() {
    const login: LoginType = {
      email: email,
      senha: password,
    };
    const data = await service.login(login);
    if (data.error) {
      setMessageAlert(data.error);
      setColorAlert("red");
      setOpenAlert(true);
      setError("login");
      // eslint-disable-next-line @typescript-eslint/no-unused-expressions
      timeAlert;
    } else {
      setEmail("");
      setPassword("");
      if (checked) localStorage.setItem("remember", "true");
      localStorage.setItem("token", data.token as string);
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
    selectRememberPassword,
  };
}

export default useLogin;
