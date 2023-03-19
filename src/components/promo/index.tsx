import { IoLogoWhatsapp } from 'react-icons/io';
import Demo from "../../assets/home/demo-promo.jpg";

interface PromoProps {
  name: string;
  qty: string;
  description: string;
}

function Promo({ name, qty, description }:PromoProps){
  return (
    <section className="promo">
      <figure>
        <img src={Demo} alt="" loading="lazy" />
      </figure>
      <div className="promo__content">
        <div>
          <h4>{name} <small>({qty})</small></h4>
          <div>
            <p>{description}</p>
          </div>
        </div>
        <a href="https://web.whatsapp.com/send?phone=5541991549910&text=" className="btn btn--buy btn--green btn--iconed" target="_blank"> 
          <IoLogoWhatsapp/>
          pedir
        </a>
      </div>
    </section>
  )
}
export default Promo;