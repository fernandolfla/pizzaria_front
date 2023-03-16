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
        <a href="#" className="btn btn--buy btn--green btn--iconed">
          <IoLogoWhatsapp/>
          pedir
        </a>
      </div>
    </section>
  )
}
export default Promo;