import "./login.scss"
import Logo from "../../assets/home/logo.jpeg";
import { FaFacebookF, FaTwitter, FaWhatsapp } from 'react-icons/fa';
import { VscCheck } from 'react-icons/vsc'
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
    setVisible,} = useLogin();

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
              type="email" 
              className="login__form__content__input" 
              placeholder="Login"
              onKeyDown={(e) => {handleKeyPress(e)}}
              onChange={(e) => setEmail(e.target.value)}
              value={email}/>
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
              type={visible ? "password" : "text"} 
              className="login__form__content__input__password"
              placeholder="Senha"
              onKeyDown={(e) => handleKeyPress(e)}
              onChange={(e) => setPassword(e.target.value)}
              onMouseDown={() => setVisible(!visible)}
              value={password}/>
          </fieldset>
          <div className="login__form__options">
            <div className="login__form__options__remember">
              <div className="login__form__options__remember__checkbox">
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
            <a href="#" className="login__form__options__forgot">esqueci minha senha</a>
          </div>
          <div className="login__form__button">
            <button className="login__form__button__submit" >Entrar</button>
          </div>
        </form>
        <div className="login__help">
          <div className="login__help__content">
            <p className="login__help__content__text">PRECISA DE AJUDA ?</p><br />
            <p className="login__help__content__number">+55 (41) 3030.3030</p>
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
                  onClick={() => redirect("https://www.facebook.com/pages/Don-Roberto-Pizzaria-E-Chopperia/1578189905770892")}>
                  <FaTwitter className="login__help__content__social__icons__content__icon"/>
                </div>
                <div 
                    className="login__help__content__social__icons__content" 
                    onClick={() => redirect("https://www.facebook.com/pages/Don-Roberto-Pizzaria-E-Chopperia/1578189905770892")}>
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