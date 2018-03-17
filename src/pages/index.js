import React from 'react'
import Helmet from 'react-helmet'
import './index.scss'


class MainPage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      activeScreen: 'middle',
    }
  }

  showHideLeftScreen = e => {
    this.state.activeScreen == "middle" ? this.setState({ activeScreen: 'left' }) : this.setState({ activeScreen: 'middle' })
    e.preventDefault()
  }
  showHideRightScreen = e => {
    this.state.activeScreen == "middle" ? this.setState({ activeScreen: 'right' }) : this.setState({ activeScreen: 'middle' })
    e.preventDefault()
  }
  showMiddleScreen = e => {
    this.setState({ activeScreen: 'middle' })
    e.preventDefault()
  }
  render() {
    return (
      <div className="slide__wrapper">
        <div className={`slide__inner slide__inner--${this.state.activeScreen}`} >
          <Helmet>
            <meta charSet="utf-8" />
            <link rel="canonical" href="https://sharekey.com" />
            <title>
              
            </title>
            <meta name="robots" content="noindex" />
            <meta name="title" content="" />
            <meta name="description" content="" />

            <link rel="image_src" href="logo.png" />

            <meta property="og:image" content="logo.png" />
            <meta property="og:image:width" content="400" />
            <meta property="og:image:height" content="400" />
            <meta property="og:site_name" content="" />
            <meta property="og:url" content="https://sharekey.com" />
            <meta property="og:title" content="Sharekey" />
            <meta property="og:description" content="" />
            <meta property="og:type" content="page" />
            <meta property="og:locale" content="fr" />

            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:image" content="logo.png" />
            <meta name="twitter:image:src" content="logo.png" />
            <meta name="twitter:title" content="" />
            <meta name="twitter:description" content="" />

            <html lang="ru" />
          </Helmet>
          <section className="screen screen--half half-screen--green-dark">
            <span>tralalz</span>
          </section>
          <section className="screen screen--middle">
            <div className="half-screen half-screen--left half-screen--green">
              <div className="header">
                <h2 className="header__header">Помошнице</h2>
                <p className="header__lead">
                  Мы поможем вам стать лучшей помошницей в мире
                </p>
                <a href="#" onClick={this.showHideLeftScreen} className="header__more-info header__more-info--right">
                  <svg className="icon icon--arrow icon--left"xmlns="http://www.w3.org/2000/svg" viewBox="0 0 8 12" class="hide-on-active"><g fill="#FFF" fill-rule="nonzero"><path d="M.586 10.243L2 11.657l5.623-5.623L6.21 4.619z"></path><path d="M6.209 7.38l1.414-1.414L2 .343.586 1.757z"></path></g></svg>
                  <svg className="icon icon--close icon--hidden-on-middle" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 12 12" class="show-on-active"><g stroke="#FFF" stroke-width="2" fill="none" fill-rule="evenodd" stroke-linecap="square"><path d="M10.64 2.221L6.431 6.43M10.62 10.639l-4.21-4.21"></path><g><path d="M2.379 1.879L6.62 6.12M1.879 10.621L6.12 6.38"></path></g></g></svg>
                  {this.state.activeScreen == "middle" ? 'узнать подробнее про пошниц' : 'закрыть'}
                </a>
              </div>
              <a href="https://goo.gl/forms/85QhyTeiOfAz7svm2" target="_blank" className="button button--main button--left">Стать пошницей</a>
            </div>  
            <div className="half-screen half-screen--ritgh half-screen--pink">
              <div className="header">
                <h2 className="header__header">Семье</h2>
                <p className="header__lead">
                  Мы поможем найти пошмницу которую вы ищите
                </p>
                <a onClick={this.showHideRightScreen} className="header__more-info header__more-info--right">
                  <svg className="icon icon--close icon--hidden-on-middle" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 12 12" class="show-on-active"><g stroke="#FFF" stroke-width="2" fill="none" fill-rule="evenodd" stroke-linecap="square"><path d="M10.64 2.221L6.431 6.43M10.62 10.639l-4.21-4.21"></path><g><path d="M2.379 1.879L6.62 6.12M1.879 10.621L6.12 6.38"></path></g></g></svg>
                  {this.state.activeScreen == "middle" ? 'почему наши пошницы лучшие' : 'закрыть'}
                  <svg className="icon icon--arrow icon--right" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 8 12" class="hide-on-active"><g fill="#FFF" fill-rule="nonzero"><path d="M.586 10.243L2 11.657l5.623-5.623L6.21 4.619z"></path><path d="M6.209 7.38l1.414-1.414L2 .343.586 1.757z"></path></g></svg>
                </a>
              </div>
              <a href="#" className="button button--main button--right">Найти пошницу</a>
            </div>  
            <a onClick={this.showMiddleScreen} className="plus">
              <svg className="plus__icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 46 45"><path d="M27.365 41.816c-.39.196-.869.41-1.435.645-.567.234-1.162.459-1.787.674-.625.215-1.24.41-1.846.586-.606.175-1.123.302-1.553.38l-1.875-1.757V26.23H2.697L.822 24.414c.117-.43.283-.937.498-1.523a32.17 32.17 0 0 1 .733-1.817c.273-.625.537-1.22.79-1.787.255-.566.48-1.045.675-1.435h15.351V2.148l1.406-.468c.586-.196 1.192-.4 1.817-.616.625-.214 1.24-.42 1.846-.615A36.273 36.273 0 0 1 25.49-.02l1.875 1.817v16.055h15.88l1.933 1.816c-.117.43-.293.947-.528 1.553a63.52 63.52 0 0 1-.761 1.875c-.274.644-.537 1.25-.791 1.816a36.643 36.643 0 0 1-.616 1.318H27.365v15.586z" fill="#FFF" fill-rule="evenodd"></path></svg>
            </a>
          </section>
          <section className="screen screen--half half-screen--pink-dark">
            <span>tralalz</span>
          </section>
        </div>
      </div>
    )
  }
}

export default MainPage