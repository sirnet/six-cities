import {Switch, Route, BrowserRouter} from 'react-router-dom'
import { AppRoute } from '../../const';
import MainScreen from "../../pages/main-page/main";
import { Offer } from "../../types/offer-date/offer-date";
import LoginPage from "../../pages/login-page/login-page"
import FavoritePage from "../../pages/favorite-page/favorite-page"

type AppOfferDate = {
  offerDate: Offer[];
}

const App = ({offerDate}:AppOfferDate): JSX.Element => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path={AppRoute.Root} >
          <MainScreen offerDate = {offerDate}/>
        </Route>
      </Switch>
      <Switch>
        <Route path={AppRoute.Login}>
          <LoginPage/>
        </Route>
      </Switch>
      <Switch>
        <Route path={AppRoute.Favorites}>
          <FavoritePage offerDate = {offerDate}/>
        </Route>
      </Switch>
      <Switch>
        <Route path={AppRoute.Room}>
          
        </Route>
      </Switch>
    </BrowserRouter>

  )
}

export default App;

