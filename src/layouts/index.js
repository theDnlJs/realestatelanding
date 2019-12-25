import React from 'react'
import '../assets/scss/main.scss'
import Helmet from 'react-helmet'
import YouTube from 'react-youtube'

import Header from '../components/Header'
import Main from '../components/Main'
import Footer from '../components/Footer'
import 'bootstrap/dist/css/bootstrap.min.css'

import { Carousel } from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css'

class Template extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isArticleVisible: false,
      timeout: false,
      articleTimeout: false,
      article: '',
      loading: 'is-loading',
    }
    this.handleOpenArticle = this.handleOpenArticle.bind(this)
    this.handleCloseArticle = this.handleCloseArticle.bind(this)
  }

  componentDidMount() {
    this.timeoutId = setTimeout(() => {
      this.setState({ loading: '' })
    }, 100)
  }

  componentWillUnmount() {
    if (this.timeoutId) {
      clearTimeout(this.timeoutId)
    }
  }

  handleOpenArticle(article) {
    this.setState({
      isArticleVisible: !this.state.isArticleVisible,
      article,
    })

    setTimeout(() => {
      this.setState({
        timeout: !this.state.timeout,
      })
    }, 325)

    setTimeout(() => {
      this.setState({
        articleTimeout: !this.state.articleTimeout,
      })
    }, 350)
  }

  handleCloseArticle() {
    this.setState({
      articleTimeout: !this.state.articleTimeout,
    })

    setTimeout(() => {
      this.setState({
        timeout: !this.state.timeout,
      })
    }, 325)

    setTimeout(() => {
      this.setState({
        isArticleVisible: !this.state.isArticleVisible,
        article: '',
      })
    }, 350)
  }

  _onReady(event) {
    // access to player in all event handlers via event.target
    // event.target.mute();
  }

  _onEnd(event) {
    event.target.playVideo()
  }

  render() {
    const siteTitle = this.props.data.site.siteMetadata.title
    const siteDescription = this.props.data.site.siteMetadata.description

    const videoOptions = {
      playerVars: {
        // https://developers.google.com/youtube/player_parameters
        autoplay: 1,
        controls: 0,
        rel: 0,
        showinfo: 0,
      },
    }

    return (
      <div
        className={`body ${this.state.loading} ${
          this.state.isArticleVisible ? 'is-article-visible' : ''
        }`}
      >
        <Helmet>
          <title>{siteTitle}</title>
          <meta name="description" content={siteDescription} />
        </Helmet>

        <div
          style={{ direction: 'rtl', textAlign: 'center' }}
          className="container-fluid px-3"
        >
          <h1 className="mt-4" style={{ color: 'gold', letterSpacing: '15px' }}>
            LionseTie
            <br />
            <small style={{ color: 'white', fontSize: '0.8rem' }}>
              real estate <span>Solutions</span>
            </small>
          </h1>

          <div className="row mt-5">
            <div className="col-xl-6 col-sm-12">
              <h1 style={{ color: 'gold' }}>עדיין חולמים על בית מול הים?</h1>
              <div className="col-12 "></div>
              <div className="col-12 mt-5">
                <h4 style={{ lineHeight: '10vh' }}>
                  דירה 35 מ"ר בבעלות פרטית
                  <br />
                  בטאבו בבית מלון
                  <br />
                  החל מ₪40.000 והדירה שלך
                </h4>
                <p className="mb-5" style={{ color: 'silver' }}>
                  --מלאי הדירות בבתי מלון מוגבל ולכן מומלץ להזדרז--
                </p>
              </div>
            </div>
            <div
              style={{ backgroundColor: '#bbc11e4a' }}
              className="col-xl-6 col-sm-12 jumbotron"
            >
              <form>
                <h4>השאירו פרטים</h4>
                <h5>ונחזור אליכם בהקדם</h5>
                <div className="form-group">
                  <label for="exampleInputEmail1">שם מלא</label>
                  <input
                    style={{ color: 'white' }}
                    type="text"
                    className="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                  />
                </div>
                <div className="form-group">
                  <label for="exampleInputPassword1">מספר טלפון</label>
                  <input
                    style={{ color: 'white' }}
                    type="text"
                    className="form-control"
                    id="exampleInputPassword1"
                  />
                </div>
                <small id="emailHelp" className="form-text text-muted">
                  אנו לא נשתף מידע זה עם אף אחד אחר
                </small>
                <button
                  style={{ width: '100%' }}
                  type="submit"
                  className="btn btn-success mt-2"
                >
                  שלח/י
                </button>
              </form>
            </div>
          </div>
        </div>
        <div
          style={{ direction: 'rtl', textAlign: 'center' }}
          className="container"
        >
          <div className="row mt-4">
            <div className="d-md-flex flex-md-equal w-100 my-md-3 pl-md-3">
              <div className="bg-danger mr-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center text-white overflow-hidden">
                <div className="my-3 py-3">
                  <h2 className="display-5">דירת סטודיו בבולגריה</h2>
                  <p className="lead"> Anna Marina Sveti Vlas, Bulgaria</p>
                  <ul style={{ listStyle: 'none' }}>
                    <li> מחיר: 27000 €</li>
                    <li> גודל: 32 מ"ר</li>
                    <li>כולל: מטבחון, שירותים, אמבטיה, ומפרסת שמש</li>
                    <li>השכרה לילה לפי בוקינג : 15 € </li>
                  </ul>
                </div>
                <div
                  className="shadow-sm mx-auto"
                  style={{
                    width: '80%',

                    borderRadius: '21px 21px 0 0',
                  }}
                >
                  <Carousel
                    showThumbs={false}
                    showIndicators={false}
                    autoPlay
                    showArrows={false}
                    showStatus={false}
                  >
                    <div>
                      <img src="http://lorempixel.com/output/cats-q-c-640-480-1.jpg" />
                      <p className="legend">Legend 1</p>
                    </div>
                  </Carousel>
                </div>
              </div>
              <div className="bg-danger mr-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center text-white overflow-hidden">
                <div className="my-3 py-3">
                  <h2 className="display-5">דירת סטודיו בבולגריה</h2>
                  <p className="lead"> Anna Marina Sveti Vlas, Bulgaria</p>
                  <ul style={{ listStyle: 'none' }}>
                    <li> מחיר: 27000 €</li>
                    <li> גודל: 32 מ"ר</li>
                    <li>כולל: מטבחון, שירותים, אמבטיה, ומפרסת שמש</li>
                    <li>השכרה לילה לפי בוקינג : 15 € </li>
                  </ul>
                </div>
                <div
                  className="shadow-sm mx-auto"
                  style={{
                    width: '80%',
                    borderRadius: '21px 21px 0 0',
                  }}
                >
                  <Carousel
                    showThumbs={false}
                    showIndicators={false}
                    autoPlay
                    showArrows={false}
                  >
                    <div>
                      <img src="http://lorempixel.com/output/cats-q-c-640-480-1.jpg" />
                      <p className="legend">Legend 1</p>
                    </div>
                  </Carousel>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="video-background">
          <div className="video-foreground">
            <YouTube
              videoId="jEnd8JIMii4"
              opts={videoOptions}
              className="video-iframe"
            />
          </div>
        </div>
      </div>
    )
  }
}

Template.propTypes = {
  route: React.PropTypes.object,
}

export default Template

export const pageQuery = graphql`
  query PageQuery {
    site {
      siteMetadata {
        title
        description
      }
    }
  }
`
