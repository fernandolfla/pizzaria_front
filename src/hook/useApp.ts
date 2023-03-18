import { useState } from "react";

function useApp() {
  const [openAlert, setOpenAlert] = useState(false);
  const [messageAlert, setMessageAlert] = useState("");
  const [colorAlert, setColorAlert] = useState("red");
  const [error, setError] = useState("");

  const timeAlert = setInterval(() => {
    setOpenAlert(false);
    setError("");
    clearInterval(timeAlert);
  }, 4000);

  return {
    openAlert,
    setOpenAlert,
    messageAlert,
    setMessageAlert,
    colorAlert,
    setColorAlert,
    timeAlert,
    error,
    setError,
  };
}

export default useApp;
