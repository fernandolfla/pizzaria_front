import { Dispatch } from "react";

interface IAppContext {
  openAlert: boolean;
  setOpenAlert: Dispatch<boolean>;
  messageAlert: string;
  setMessageAlert: Dispatch<string>;
  colorAlert: string;
  setColorAlert: Dispatch<string>;
  timeAlert: NodeJS.Timer | null;
  error: string;
  setError: Dispatch<string>;
}

export default IAppContext;
