import Alert from "./components/alert";
import AppContext from "./contexts/AppContext";
import useApp from "./hook/useApp";
import Routes from "./routes/Routes";

function App() {
  const {
    openAlert,
    setOpenAlert,
    messageAlert,
    setMessageAlert,
    colorAlert,
    setColorAlert,
    timeAlert,
    error,
    setError
  } = useApp();
  
  return (
    <AppContext.Provider 
      value={{
        openAlert: openAlert,
        setOpenAlert: setOpenAlert,
        messageAlert: messageAlert,
        setMessageAlert: setMessageAlert,
        colorAlert: colorAlert,
        setColorAlert: setColorAlert,
        timeAlert: timeAlert,
        error: error,
        setError: setError
      }}>
        <Routes />
        <Alert />
    </AppContext.Provider>
  )
}

export default App;