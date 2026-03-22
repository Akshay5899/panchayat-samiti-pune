import "./hero.css"

function Hero() {
  return (
    <section className="hero-section">

      <div className="container-fluid sec">
        <div className="row g-0">

<div className="col-sm-8 hero-left">

  <div id="heroCarousel" className="carousel slide" data-bs-ride="carousel" data-bs-interval="3000" data-bs-pause="false">

    <div className="carousel-inner">

      {/* SLIDE 1 */}
      <div className="carousel-item active">
        <div className="hero-overlay">
          <h1 className="hero-title">
            ओळख पुण्याची, शान महाराष्ट्राची !
          </h1>
          <p className="hero-subtitle">
            देश विदेशातील पाहुण्यांचे हार्दिक स्वागत
          </p>
          <div className="hero-buttons">
            <button className="btn all-org btn-warning me-3">
              महत्त्वाच्या योजना
            </button>
            <button className="btn btn-light">
              संपूर्ण सूचना
            </button>
          </div>
        </div>
      </div>

      {/* SLIDE 2 */}
      <div className="carousel-item">
        <div className="hero-overlay">
          <h1 className="hero-title">
            ओळख पुण्याची, शान महाराष्ट्राची !
          </h1>
          <p className="hero-subtitle">
            देश विदेशातील पाहुण्यांचे हार्दिक स्वागत
          </p>
          <div className="hero-buttons">
            <button className="btn all-org btn-warning me-3">
              महत्त्वाच्या योजना
            </button>
            <button className="btn btn-light">
              संपूर्ण सूचना
            </button>
          </div>
        </div>
      </div>

      {/* SLIDE 3 */}
      <div className="carousel-item">
        <div className="hero-overlay">
          <h1 className="hero-title">
            ओळख पुण्याची, शान महाराष्ट्राची !
          </h1>
          <p className="hero-subtitle">
            देश विदेशातील पाहुण्यांचे हार्दिक स्वागत
          </p>
          <div className="hero-buttons">
            <button className="btn all-org btn-warning me-3">
              महत्त्वाच्या योजना
            </button>
            <button className="btn btn-light">
              संपूर्ण सूचना
            </button>
          </div>
        </div>

      </div>

      {/* SLIDE 4 */}
      <div className="carousel-item">
        <div className="hero-overlay">
          <h1 className="hero-title">
            ओळख पुण्याची, शान महाराष्ट्राची !
          </h1>
          <p className="hero-subtitle">
            देश विदेशातील पाहुण्यांचे हार्दिक स्वागत
          </p>
          <div className="hero-buttons">
            <button className="btn all-org btn-warning me-3">
              महत्त्वाच्या योजना
            </button>
            <button className="btn btn-light">
              संपूर्ण सूचना
            </button>
          </div>
        </div>
      </div>

    </div>

    {/* CONTROLS */}
    <button className="carousel-control-prev" type="button" data-bs-target="#heroCarousel" data-bs-slide="prev">
      <span className="carousel-control-prev-icon"></span>
    </button>

    <button className="carousel-control-next" type="button" data-bs-target="#heroCarousel" data-bs-slide="next">
      <span className="carousel-control-next-icon"></span>
    </button>

  </div>

</div>


          {/* RIGHT SIDE CARD */}
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