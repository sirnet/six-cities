import HeaderComponent from "../../components/header-screen/header-screen";
import CardScreen from "../../components/card-screen/card-screen";
import {Offer} from "../../types/offer-date/offer-date"

type FavoriteOfferDate = {
  offerDate: Offer[];
}

const FavoritePage = ({offerDate}:FavoriteOfferDate) : JSX.Element => {
  return (
    <div className="page">
      <HeaderComponent/>
      <main className="page__main page__main--favorites">
        <div className="page__favorites-container container">
          <section className="favorites">
            <h1 className="favorites__title">Saved listing</h1>
            <ul className="favorites__list">
              <li className="favorites__locations-items">
                <div className="favorites__locations locations locations--current">
                  <div className="locations__item">
                    <a className="locations__item-link" href="#">
                      <span>Amsterdam</span>
                    </a>
                  </div>
                </div>
                <div className="favorites__places">
                  <CardScreen offerDate = {offerDate}/>
                </div>
              </li>
            </ul>
          </section>
        </div>
      </main>
      <footer className="footer container">
        <a className="footer__logo-link" href="main.html">
          <img className="footer__logo" src="img/logo.svg" alt="6 cities logo" width="64" height="33"/>
        </a>
      </footer>
    </div>
  )
}

export default FavoritePage;
