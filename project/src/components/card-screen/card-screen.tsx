import {Offer} from "../../types/offer-date/offer-date"

type CardScreenOfferDate = {
  offerDate: Offer[];
}

const CardScreen = ({offerDate}:CardScreenOfferDate) : JSX.Element => {
  return (
  <>
    {offerDate.map((date:Offer) =>
      (
        <article key={date.id} className="cities__place-card place-card">
        {date.marker &&
          <div className="place-card__mark">
          <span>{date.marker}</span>
          </div>
        }
        <div className="cities__image-wrapper place-card__image-wrapper">
          <a href="#">
            <img className="place-card__image" src={date.imgSrc} width="260" height="200" alt="Place image"/>
          </a>
        </div>
        <div className="place-card__info">
          <div className="place-card__price-wrapper">
            <div className="place-card__price">
              <b className="place-card__price-value">&euro;{date.price}</b>
              <span className="place-card__price-text">&#47;&nbsp;{date.day}</span>
            </div>
            {date.bookmark ? <button className="place-card__bookmark-button place-card__bookmark-button--active button" type="button">
              <svg className="place-card__bookmark-icon" width="18" height="19">
                <use xlinkHref="#icon-bookmark"></use>
              </svg>
              <span className="visually-hidden">To bookmarks</span>
              </button> :
              <button className="place-card__bookmark-button button" type="button">
              <svg className="place-card__bookmark-icon" width="18" height="19">
                <use xlinkHref="#icon-bookmark"></use>
              </svg>
              <span className="visually-hidden">To bookmarks</span>
              </button>
            }

          </div>
          <div className="place-card__rating rating">
            <div className="place-card__stars rating__stars">
              <span style={{width: date.starts*15}}/>
              <span className="visually-hidden">Rating</span>
            </div>
          </div>
          <h2 className="place-card__name">
            <a href="#">{date.description}</a>
          </h2>
          <p className="place-card__type">{date.type}</p>
        </div>
      </article>
      )
    )}
  </>
  )
}

export default CardScreen;
