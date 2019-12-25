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

import icon1 from '../images/payment.png'
import icon2 from '../images/sun-umbrella.png'
import icon3 from '../images/opportunity.png'
import icon4 from '../images/marketing.png'
import icon5 from '../images/18-.png'
import icon6 from '../images/house.png'

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
          style={{
            direction: 'rtl',
            textAlign: 'center',
            background: 'black',
          }}
          className="container-fluid  "
        >
          <h1 className="py-5" style={{ color: 'gold', letterSpacing: '15px' }}>
            LionseTie
            <br />
            <strong style={{ color: 'white', fontSize: '0.8rem' }}>
              real-estate <strong style={{ color: 'gold' }}>Solutions</strong>
            </strong>
          </h1>
          <div
            className="my-1"
            style={{ background: 'gold', height: '5px', width: '100%' }}
          ></div>

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
                <h5 style={{ color: 'red', fontWeight: '700' }}>
                  אירופה מתחממת
                </h5>
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

        <div style={{ margin: '0 auto' }}>
          <section className="features px-5">
            <div className="feature">
              <img src={icon4} className="feature__icon" />
              <h4 className="heading-4 heading-4--dark">
                ליווי מקצועי ואמין בישראל ובחו"ל{' '}
              </h4>
            </div>

            <div className="feature">
              <img src={icon3} className="feature__icon" />

              <h4 className="heading-4 heading-4--dark">
                הזדמנויות בכל רחבי אירופה
              </h4>
            </div>
            <div className="feature">
              <img src={icon2} className="feature__icon" />

              <h4 className="heading-4 heading-4--dark">
                ייעדי נופש נבחרים באירופה
              </h4>
            </div>

            <div className="feature">
              <img src={icon6} className="feature__icon" />

              <h4 className="heading-4 heading-4--dark">מלאי הדירות מוגבל </h4>
            </div>

            <div className="feature">
              <img src={icon1} className="feature__icon" />

              <h4 className="heading-4 heading-4--dark">תנאי תשלום נוחים</h4>
            </div>

            <div className="feature">
              <img src={icon5} className="feature__icon" />

              <h4 className="heading-4 heading-4--dark">מעל גיל 18</h4>
            </div>
          </section>
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
