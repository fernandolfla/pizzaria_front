import { useContext } from "react";
import { VscChromeClose } from "react-icons/vsc";
import AppContext from "../../contexts/AppContext";
import "./alert.scss"

function Alert() {
  const{colorAlert, openAlert, messageAlert, setOpenAlert} = useContext(AppContext)
  return (
    <div className="alert" hidden={!openAlert}>
      <div className={`alert__${colorAlert}`}>
        <p className={`alert__${colorAlert}__text`}>{messageAlert}</p>
        <VscChromeClose 
          className={`alert__${colorAlert}__icon`}
          onClick={() => setOpenAlert(!openAlert)}/>
      </div>
    </div>
  )
}

export default Alert;