import React from 'react'
import '../assets/scss/main.scss'
import Helmet from 'react-helmet'
import Flash from 'react-reveal/Flash'
import 'bootstrap/dist/css/bootstrap.min.css'

import icon1 from '../images/payment.png'
import icon2 from '../images/sun-umbrella.png'
import icon3 from '../images/opportunity.png'
import icon4 from '../images/marketing.png'
import icon5 from '../images/18-.png'
import icon6 from '../images/house.png'

import lion from '../images/lion.png'
import baby from '../images/baby.png'

import bg1 from '../images/bg1.png'

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
          className="container-fluid  p-5"
        >
          <h1 style={{ color: 'gold', fontWeight: '700' }}>
            <img style={{ width: '4rem' }} src={lion} alt="lion" />
            LionsTie
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
              <img
                style={{
                  width: '300px',
                  position: 'absolute',
                  opacity: '19%',
                  top: '-20px',
                }}
                src={baby}
                alt="baby"
              />
              <div className="col-xl-12 col-md-12 mt-5">
                <h4>
                  דירה 35 מ"ר בבעלות פרטית בטאבו בבית מלון החל{' '}
                  <strong style={{ color: 'gold' }}>מ₪40.000</strong> והדירה שלך
                </h4>
                <h5
                  style={{ color: 'red', fontWeight: '700', marginTop: '4rem' }}
                >
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
        <div
          className="container-fluid d-flex justify-content-center p-5"
          style={{
            margin: '0 auto',
            background: 'gold',
            color: 'black',
            textAlign: 'center',
          }}
        >
          <div className="row">
            <div
              className="card col-lg-4 col-md-6 py-5 px-1  mt-3"
              style={{
                background: 'rgba(19, 19, 18, 0)',
                width: '80%',
                margin: '0 auto',
                border: 'none',
              }}
            >
              <img
                style={{ width: '45px', margin: '0 auto' }}
                className="card-img-top"
                src={icon4}
                alt="Card image cap"
              />
              <div className="card-body">
                <h4 style={{ color: 'black' }} className="card-text">
                  ליווי מקצועי ואמין בישראל ובחו"ל
                </h4>
              </div>
            </div>
            <div
              className="card col-lg-4 col-md-6 py-5  mt-3"
              style={{
                background: 'rgba(19, 19, 18, 0)',
                width: '18rem',
                margin: '0 auto',
                border: 'none',
              }}
            >
              <img
                style={{ width: '45px', margin: '0 auto' }}
                className="card-img-top"
                src={icon1}
                alt="Card image cap"
              />
              <div className="card-body">
                <h4 style={{ color: 'black' }} className="card-text">
                  הזדמנויות בכל רחבי אירופה{' '}
                </h4>
              </div>
            </div>{' '}
            <div
              className="card col-lg-4 col-md-6 py-5  mt-3"
              style={{
                background: 'rgba(19, 19, 18, 0)',
                width: '18rem',
                margin: '0 auto',
                border: 'none',
              }}
            >
              <img
                style={{ width: '45px', margin: '0 auto' }}
                className="card-img-top"
                src={icon1}
                alt="Card image cap"
              />
              <div className="card-body">
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
              </div>
            </div>{' '}
            <div
              className="card col-lg-4 col-md-6 py-5  mt-3"
              style={{
                background: 'rgba(19, 19, 18, 0)',
                width: '18rem',
                margin: '0 auto',
                border: 'none',
              }}
            >
              <img
                style={{ width: '45px', margin: '0 auto' }}
                className="card-img-top"
                src={icon1}
                alt="Card image cap"
              />
              <div className="card-body">
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
              </div>
            </div>{' '}
            <div
              className="card col-lg-4 col-md-6 py-5  mt-3"
              style={{
                background: 'rgba(19, 19, 18, 0)',
                width: '18rem',
                margin: '0 auto',
                border: 'none',
              }}
            >
              <img
                style={{ width: '45px', margin: '0 auto' }}
                className="card-img-top"
                src={icon1}
                alt="Card image cap"
              />
              <div className="card-body">
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
              </div>
            </div>{' '}
            <div
              className="card col-lg-4 col-md-6 py-5  mt-3"
              style={{
                background: 'rgba(19, 19, 18, 0)',
                width: '18rem',
                margin: '0 auto',
                border: 'none',
              }}
            >
              <img
                style={{ width: '45px', margin: '0 auto' }}
                className="card-img-top"
                src={icon1}
                alt="Card image cap"
              />
              <div className="card-body">
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* <div className="bg-dark" style={{ margin: '0 auto' }}>
          <div className="d-flex">
            <img style={{ width: '45px', margin: '0 auto' }} src={icon4} />
            <h4 className="heading-4 heading-4--dark ">
              ליווי מקצועי ואמין בישראל ובחו"ל{' '}
            </h4>
          </div>

          <img src={icon3} className="feature__icon" />

          <h4 className="heading-4 heading-4--dark">
            הזדמנויות בכל רחבי אירופה
          </h4>

          <img src={icon2} className="feature__icon" />

          <h4 className="heading-4 heading-4--dark">
            ייעדי נופש נבחרים באירופה
          </h4>

          <img src={icon6} className="feature__icon" />

          <h4 className="heading-4 heading-4--dark">מלאי הדירות מוגבל </h4>

          <img src={icon1} className="feature__icon" />

          <h4 className="heading-4 heading-4--dark">תנאי תשלום נוחים</h4>

          <img src={icon5} className="feature__icon" />

          <h4 className="heading-4 heading-4--dark">מעל גיל 18</h4>
        </div> */}
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
