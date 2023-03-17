import { FaFacebookSquare, FaPhoneAlt } from 'react-icons/fa';
import { IoLogoWhatsapp } from 'react-icons/io';
import { AiFillInstagram } from 'react-icons/ai';
import { Link } from 'react-router-dom';

function Header(){
  return (
    <header className="header">
      <section className="header-topbar">
        <div className="container">
          <div className="header-topbar__wrapper">
            <div className="header-topbar__content">
              <div className="header-topbar__content__phone">
                <FaPhoneAlt />
                <p>peça agora</p>
                <a href="tel:+554136216288">(41) 3621-6288</a>
              </div>
              <p className="header-topbar__content__hour">horário de atendimento: 19:00 - 02:00</p>
            </div>
            <ul className="header-topbar__social">
              <li>
                <a href="https://www.facebook.com/pages/Don-Roberto-Pizzaria-E-Chopperia/1578189905770892" target="_blank" rel="noreferrer">
                  <FaFacebookSquare />
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com/don_roberto_pizzaria/" target="_blank" rel="noreferrer">
                  <AiFillInstagram />
                </a>
              </li>
              <li>
                <a href="#" target="_blank">
                  <IoLogoWhatsapp />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </section>
      <div className="container">
        <div className="header__wrapper">
          <a href="#">
            <img src="" alt="" className="logo" />
          </a>
          <Link to="/login" className="btn btn--primary">Login</Link>
        </div>
      </div>
    </header>
  )
} 

export default Header;