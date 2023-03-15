import './home.scss';
import Hero from "../../assets/home/hero.png";

function App() {
  return (
    <>
      <header className="header">
        <section className="header-topbar">
          <div className="container">
            <div className="header-topbar__wrapper">
              <div className="header-topbar__content">
                <div className="header-topbar__content__phone">
                  <i className="icon-phone"></i>
                  <p>peça agora</p>
                  <a href="tel:+5541303030">(41) 3030.3030</a>
                </div>
                <p className="header-topbar__content__hour">horário de atendimento: 19:00 - 02:00</p>
              </div>
              <ul className="header-topbar__social">
                <li>
                  <a href="#" target="_blank">
                    <i className="icon-facebook"></i>
                  </a>
                </li>
                <li>
                  <a href="#" target="_blank"><i className="icon-facebook"></i></a>
                </li>
                <li>
                  <a href="#" target="_blank"><i className="icon-facebook"></i></a>
                </li>
              </ul>
            </div>
          </div>
        </section>
        <div className="container">
          <a href="#">
            <img src="" alt="" className="logo" />
          </a>
          <div className="btn btn--primary">Login</div>
        </div>
      </header>
      <main className="home">
        <section className="hero">
          <div className="container">
            <div className="hero__wrapper">
              <div className="hero__content">
                <h1>A melhor <span>pizza</span> da cidade, entregue na sua porta</h1>
                <p>Sabor, qualidade e rapidez: nossa pizzaria tem tudo o que você precisa para uma noite perfeita!</p>
                <a href="#" className="btn btn--green btn--iconed">
                  <i className="icon-whatsapp"></i>
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
                <section className="promo">
                  <figure>
                    <img src="" alt="" />
                  </figure>
                  <div className="promo__content">
                    <div>
                      <h4>PIZZA GIGANTE <small>(16 fatias)</small></h4>
                      <ul>
                        <li>borda transada e recheada com catupiry e cheddar</li>
                        <li>refrigerante 2L</li>
                      </ul>
                    </div>
                    <a href="#" className="btn btn--buy btn--iconed">
                      <i className="icon-whatsapp"></i>
                      pedir
                    </a>
                  </div>
                </section>
              </div>
            </div>
          </div>
        </section>
        <section className="home-map">
          <div className="home-map__wrapper">
            {/* <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3605.410959451274!2d-49.157066748942256!3d-25.35753978374243!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94dce924802945a9%3A0x66c703e755fd53d5!2sR.%20Atal%C3%A1ia%2C%201505%20-%20Guaraituba%2C%20Colombo%20-%20PR%2C%2083410-100!5e0!3m2!1spt-BR!2sbr!4v1678902591242!5m2!1spt-BR!2sbr" width="600" height="450" style="border:0;" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe> */}
            <div className="home-map__content">
              <h3>ONDE ESTAMOS</h3>
              <h2>Sabor que chega até você!</h2>
              <p>R. Ataláia, 1505 - Guaraituba, Colombo - PR, 83410-100</p>
              <a href="#" className="btn btn--red">(41) 3621-6288</a>
            </div>
          </div>
        </section>
        
        <section className="instagram">
          <div className="container">
            <div className="instagram-content">
              <h3>instagram</h3>
              <h2>Fique por dentro das novidades e promoções exclusivas</h2>
              <div className="instagram__link">
                <i className="icon-instagram"></i>
                <a href="http://" target="_blank" rel="noopener noreferrer">@don_roberto_pizzaria</a>
              </div>
              <div className="instagram__grid">
                <figure><img src="" alt="" /></figure>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="footer">
        LOGO
      </footer>
    </>
  );
}

export default App;
