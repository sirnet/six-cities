import MainScreen from "../../pages/main/main";
import { Offer } from "../../types/offer-date/offer-date";

type AppOfferDate = {
  offerDate: Offer[];
}

const App = ({offerDate}:AppOfferDate): JSX.Element => {
  return <MainScreen offerDate = {offerDate}/>
}

export default App;
