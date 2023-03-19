import './home.scss';
import { IoLogoWhatsapp, IoLogoInstagram } from 'react-icons/io';
import Hero from "../../assets/home/hero.png";
import Like from "../../assets/icons/like.svg";
import Promo from "../../components/promo";

const promos = [
  {
    name: 'PIZZA GIGANTE',
    qty: '16 fatias',
    description: 'borda transada e recheada com catupiry e cheddar + refrigerante 2L'
  },
  {
    name: 'PIZZA GIGANTE 2',
    qty: '16 fatias',
    description: 'borda transada e recheada com catupiry e cheddar + refrigerante 2L'
  },
  {
    name: 'PIZZA GIGANTE 3',
    qty: '16 fatias',
    description: 'borda transada e recheada com catupiry e cheddar + refrigerante 2L'
  }
]
const renderPromos = () => {
  return promos.map(promo => {
    return <Promo {...promo} />;
  });
}

const renderMap = () =>{
    return <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3605.410959451274!2d-49.157066748942256!3d-25.35753978374243!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94dce924802945a9%3A0x66c703e755fd53d5!2sR.%20Atal%C3%A1ia%2C%201505%20-%20Guaraituba%2C%20Colombo%20-%20PR%2C%2083410-100!5e0!3m2!1spt-BR!2sbr!4v1678902591242!5m2!1spt-BR!2sbr" title="Mapa" loading="lazy"></iframe>
    
 }

function App() {
  return (
    <main className="home">
      <section className="hero">
        <div className="container">
          <div className="hero__wrapper">
            <div className="hero__content">
              <h1>A melhor <span>pizza</span> da cidade, entregue na sua porta</h1>
              <p>Sabor, qualidade e rapidez: nossa pizzaria tem tudo o que você precisa para uma noite perfeita!</p>
              <a href="https://web.whatsapp.com/send?phone=5541991549910&text=" className="btn btn--green btn--iconed" target='_blank' rel="noreferrer">
                <IoLogoWhatsapp />
                pedir pelo whatsapp
              </a>
            </div>
            <figure>
              <img src={Hero} alt="" />
            </figure>
          </div>
        </div>
      </section>
      <section className="home-grid">
        <div className="container">
          <div className="home-grid__wrapper">
            <div className="home-grid__title">
              <h3>pediu, chegou</h3>
              <h2>Entrega rápida, Pizza quentinha!</h2>
              <p>confira algumas de nossas promoções, feitas para você:</p>
            </div>
            <div className="home-grid__content">
              {renderPromos()}
            </div>
          </div>
        </div>
      </section>
      <section className="home-map">
        <div className="home-map__wrapper">
          {renderMap()}
          <div className="home-map__content">
            <h3>ONDE ESTAMOS</h3>
            <h2>Sabor que chega até você!</h2>
            <p>R. Ataláia, 1505 - Guaraituba, Colombo - PR, 83410-100</p>
            <a href="#" className="btn btn--red">(41) 3621-6288</a> {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
          </div>
        </div>
      </section>
      
      <section className="instagram">
        <div className="container container--small">
          <div className="instagram-content">
            <div className="instagram-content__wrapper">
              <div>
                <h3>instagram</h3>
                <h2>Fique por dentro das novidades e promoções exclusivas</h2>
              </div>
              <figure>
                <img src={Like} alt="Ilustração de coração: simbolizando gostei" />
              </figure>
            </div>
            <div className="instagram__link">
              <span><IoLogoInstagram/></span>
                <a href="https://www.instagram.com/don_roberto_pizzaria/" target="_blank" rel="noreferrer">@don_roberto_pizzaria</a>
            </div>
            <div className="instagram__grid">
              <figure><img src="" alt="" /></figure>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default App;
