import "./login.scss"
import Logo from "../../assets/home/logo.jpeg";
import { FaFacebookF, FaTwitter, FaWhatsapp } from 'react-icons/fa';

function Login() {

  function redirect(to: string) {
    window.open(to, '_blank')
  }

  return (
    <div className="login">
      <form className="login__form">
        <img src={Logo} alt="Logo" className="login__form__logo" />
        <fieldset className="login__form__email">
          <legend className="login__form__email__text">login</legend>
          <input name="" id="" className="login__form__email__input" placeholder="Login"/>
        </fieldset>
        <fieldset className="login__form__password">
          <legend className="login__form__password__text">senha</legend>
          <input type="text" className="login__form__password__input" placeholder="Senha"/>
        </fieldset>
        <div className="login__form__options">
          <div className="login__form__options__remember">
            <input type="checkbox" className="login__form__options__remember__checkbox" />
            <label className="login__form__options__remember__label">Lembrar Senha</label>
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
  )
}

export default Login;