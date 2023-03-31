import "./login.scss"
import Logo from "../../assets/home/logo.jpeg";
import { FaFacebookF, FaInstagram, FaWhatsapp } from 'react-icons/fa';
import { VscCheck, VscEye, VscEyeClosed } from 'react-icons/vsc'
import useLogin from './hook/useLogin';
import FooterAuth from "../../components/footer/auth";

function Login() {

  const {
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
    selectRememberPassword} = useLogin();

  return (
    <>
      <div className="login">
        <form className="login__form" onSubmit={(e) => {
          login()
          e.preventDefault();
        }}>
          <img src={Logo} alt="Logo" className="login__form__logo" />
          <fieldset 
            className={error === "login"? 
            "login__form__content__invalid" :
            "login__form__content"}>
            <legend 
              className={error === "login"?
              "login__form__content__text__invalid":
              "login__form__content__text"}>login</legend>
            <input 
              type="Informe o Login" 
              className="login__form__content__input" 
              placeholder="Login"
              onKeyDown={(e) => {handleKeyPress(e)}}
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              tabIndex={1}/>
          </fieldset>
          <fieldset 
          className={error === "login"? 
            "login__form__content__invalid" :
            "login__form__content"}>
            <legend 
            className={error === "login"?
              "login__form__content__text__invalid":
              "login__form__content__text"}>senha</legend>
            <input 
              type={!visible ? "password" : "text"} 
              className="login__form__content__input__password"
              placeholder="Informe a Senha"
              onKeyDown={(e) => handleKeyPress(e)}
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              tabIndex={2}/>
            <div 
            className="login__form__content__input__password__icon 
                      login__form__content__invalid__input__password__icon">
              <div hidden={!visible}>
                <VscEye 
                  className="login__form__content__input__password__icon__content
                              login__form__content__invalid__input__password__icon__content"
                  onClick={() => setVisible(!visible)}/>
              </div>
              <div  hidden={visible}>
                <VscEyeClosed 
                  className="login__form__content__input__password__icon__content
                              login__form__content__invalid__input__password__icon__content"
                  onClick={() => setVisible(!visible)}/>
              </div>
            </div>
          </fieldset>
          <div className="login__form__options">
            <div className="login__form__options__remember">
              <div 
                className="login__form__options__remember__checkbox" 
                tabIndex={3}
                onKeyDown={(e) => selectRememberPassword(e)}>
                <div 
                  className="login__form__options__remember__checkbox__content" 
                  onClick={() => setChecked(!checked)}>
                  <div hidden={!checked}>
                    <VscCheck className="login__form__options__remember__checkbox__content__icon"/>
                  </div>
                </div>
                <label className="login__form__options__remember__checkbox__label">Lembrar Senha</label>
              </div>
            </div>
            <a href="#section" className="login__form__options__forgot" tabIndex={4}>esqueci minha senha</a>
          </div>
          <div className="login__form__button">
            <button className="login__form__button__submit" tabIndex={5}>Entrar</button>
          </div>
        </form>
        <div className="login__help">
          <div className="login__help__content">
            <p className="login__help__content__text">PRECISA DE AJUDA ?</p><br />
            <p className="login__help__content__number">+55 (41) 3621-6288</p>
            <div className="login__help__content__social">
              <p className="login__help__content__social__text">Siga-nos nas redes sociais</p>
              <div className="login__help__content__social__icons">
                <div 
                  className="login__help__content__social__icons__content"
                  onClick={() => redirect("https://www.facebook.com/pages/Don-Roberto-Pizzaria-E-Chopperia/1578189905770892")}>
                  <FaFacebookF className="login__help__content__social__icons__content__icon" />
                </div>
                <div 
                  className="login__help__content__social__icons__content"
                  onClick={() => redirect("https://www.instagram.com/don_roberto_pizzaria/")}>
                  <FaInstagram className="login__help__content__social__icons__content__icon"/>
                </div>
                <div 
                    className="login__help__content__social__icons__content" 
                    onClick={() => redirect("https://web.whatsapp.com/send?phone=5541991549910&text=")}>
                  <FaWhatsapp className="login__help__content__social__icons__content__icon"/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <FooterAuth/>
    </>
  )
}

export default Login;