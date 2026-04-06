import { useEffect } from "react"
import * as bootstrap from "bootstrap"
import "./hero.css"

function Hero() {

  useEffect(() => {
    const el = document.querySelector('#heroCarousel')

    if (el) {
      new bootstrap.Carousel(el, {
        interval: 5000,
        ride: 'carousel',
        pause: false,
        wrap: true
      })
    }
  }, [])

  return (
    <section className="hero-section">

      <div className="container-fluid sec">
        <div className="row g-0">

          {/* LEFT SLIDER */}
          <div className="col-sm-8 hero-left">

            <div
              id="heroCarousel"
              className="carousel slide carousel-fade"
            >

              <div className="carousel-inner">

                <div className="carousel-item active slide1">
                  <div className="hero-overlay">
                    <h1 className="hero-title">
                      ओळख पुण्याची, शान महाराष्ट्राची !
                    </h1>
                    <p className="hero-subtitle">
                      देश विदेशातील पाहुण्यांचे हार्दिक स्वागत
                    </p>
                    <div className="hero-buttons">
                      <a href="#" target="blank"><button className="btn btn-warning me-3">
                        महत्त्वाच्या योजना
                      </button></a>
                      <a href="#" target="blank"><button className="btn btn-light">
                        संपूर्ण सूचना
                      </button></a>
                    </div>
                  </div>
                </div>

                <div className="carousel-item slide2">
                  <div className="hero-overlay">
                    <h1 className="hero-title">
                      ओळख पुण्याची, शान महाराष्ट्राची !
                    </h1>
                    <p className="hero-subtitle">
                      देश विदेशातील पाहुण्यांचे हार्दिक स्वागत
                    </p>
                    <div className="hero-buttons">
                      <a href="#" target="blank"><button className="btn btn-warning me-3">
                        महत्त्वाच्या योजना
                      </button></a>
                      <a href="#" target="blank"><button className="btn btn-light">
                        संपूर्ण सूचना
                      </button></a>
                    </div>
                  </div>
                </div>

                <div className="carousel-item slide3">
                  <div className="hero-overlay">
                    <h1 className="hero-title">
                      ओळख पुण्याची, शान महाराष्ट्राची !
                    </h1>
                    <p className="hero-subtitle">
                      देश विदेशातील पाहुण्यांचे हार्दिक स्वागत
                    </p>
                    <div className="hero-buttons">
                      <a href="#" target="blank"><button className="btn btn-warning me-3">
                        महत्त्वाच्या योजना
                      </button></a>
                      <a href="#" target="blank"><button className="btn btn-light">
                        संपूर्ण सूचना
                      </button></a>
                    </div>
                  </div>
                </div>

                <div className="carousel-item slide4">
                  <div className="hero-overlay">
                    <h1 className="hero-title">
                      ओळख पुण्याची, शान महाराष्ट्राची !
                    </h1>
                    <p className="hero-subtitle">
                      देश विदेशातील पाहुण्यांचे हार्दिक स्वागत
                    </p>
                    <div className="hero-buttons">
                      <a href="#" target="blank"><button className="btn btn-warning me-3">
                        महत्त्वाच्या योजना
                      </button></a>
                      <a href="#" target="blank"><button className="btn btn-light">
                        संपूर्ण सूचना
                      </button></a>
                    </div>
                  </div>
                </div>

              </div>

              {/* CONTROLS */}
              <button
                className="carousel-control-prev"
                type="button"
                data-bs-target="#heroCarousel"
                data-bs-slide="prev"
              >
                <span className="carousel-control-prev-icon"></span>
              </button>

              <button
                className="carousel-control-next"
                type="button"
                data-bs-target="#heroCarousel"
                data-bs-slide="next"
              >
                <span className="carousel-control-next-icon"></span>
              </button>

            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="col-sm-4 hero-right">
            <div className="info-card">
              <img
                src="/images/election.png"
                className="img-fluid"
                alt="Election"
              />
            </div>
          </div>

        </div>
      </div>

    </section>
  )
}

export default Hero