import HeaderComponent from "../../components/header-screen/header-screen"

const PropertyPage = ():JSX.Element => {
  return (
    <div className="page">
      <HeaderComponent />
      <main className="page__main page__main--property">

        <div className="container">
          <section className="near-places places">
            <h2 className="near-places__title">Other places in the neighbourhood</h2>
            <div className="near-places__list places__list">

            </div>
          </section>
        </div>
      </main>
    </div>
  )
}

export default PropertyPage;
