import { createContext } from "react";
import IAppContext from "../interfaces/IAppContext";

const AppContext = createContext<IAppContext>({
  openAlert: false,
  setOpenAlert: function (value: boolean): void {
    throw new Error("Function not implemented.");
  },
  messageAlert: "",
  setMessageAlert: function (value: string): void {
    throw new Error("Function not implemented.");
  },
  colorAlert: "",
  setColorAlert: function (value: string): void {
    throw new Error("Function not implemented.");
  },
  timeAlert: null,
  error: "",
  setError: function (value: string): void {
    throw new Error("Function not implemented.");
  },
});

export default AppContext;
