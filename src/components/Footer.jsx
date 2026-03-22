import "./footer.css"

function Footer() {
  return (
    <footer>

      {/* Top Links */}
      <div className="footer-top">
        <div className="container text-center">

          <a href="#">अभिप्राय</a>
          <span>|</span>
          <a href="#">वेबसाइट धोरण</a>
          <span>|</span>
          <a href="#">आमच्याशी संपर्क साधा</a>
          <span>|</span>
          <a href="#">मदत</a>
          <span>|</span>
          <a href="#">वेब माहिती व्यवस्थापन</a>
          <span>|</span>
          <a href="#">FAQs</a>

        </div>
      </div>


      {/* Main Footer */}
      <div className="footer-main">

        <div className="container">

          <div className="row">

            {/* Left Section */}
            <div className="col-12 col-sm-6 col-lg-3">

              <div className="footer-logo d-flex align-items-center gap-3">

                <img src="/images/emblem.png" alt="logo" />

                <div>
                  <a className="sitetitle" href="/"><strong>पंचायत समिती पुणे</strong></a>
                  <a className="sitetitle" href="/"><h5>Panchayat Samiti Pune</h5></a>
                </div>

              </div>

              <p className="mt-3 small">
                मालकीची सामग्री जिल्हा परिषद पुणे<br/>
                राष्ट्रीय माहिती विज्ञान केंद्र द्वारे विकसित आणि होस्ट केलेले,<br/><br/>
                शेवटचे अद्यावत: March 11, 2026
              </p>

            </div>


            {/* Important Links */}
            <div className="col-12 col-sm-6 col-lg-3">

              <h6>महत्वाच्या लिंक</h6>

              <ul>
                <li>भारत सरकार</li>
                <li>महाराष्ट्र शासन</li>
                <li>ग्रामविकास व पंचायतराज विभाग</li>
                <li>विभागीय कार्यालय, पुणे</li>
                <li>जिल्हाधिकारी कार्यालय, पुण</li>
                <li>इंटीग्रेटेड जिल्हा परिषद पुणे डॅशबोर् (ID)</li>
                <li>इंटेलिजंट वर्क्स मॅनेजमेंट सिस्टम (IWMS)</li>
                <li>सु.बे.अ आणि मजूर सहकारी संस्था कामवाटप सिस्टम</li>
                <li>१५० दिवसांच्या सेवा कामगार कार्यक्रमाचे मूल्यांकन</li>
                <li>राष्ट्रीय आयुष अभियानांतर्गत डाटा एन्ट्री ऑपरेटर पदाची पात्र व अपात्र यादी.</li>
                <li>बांधकाम उपविभाग इंदापूर साठी वाहन भाड्याने पुरवठा करणेसाठी दरपत्रके मागवणेबाबत</li>
                <li>बी पी एच यु अंतर्गत विविध तीन संवर्गाची अंतरीम गुणवत्ता यादी</li>
              </ul>

            </div>


            {/* Helpline */}
            <div className="col-12 col-sm-6 col-lg-3">

              <h6>हेल्पलाईन</h6>

              <ul>
                <li>आपत्कालीन पोलीस: 100</li>
                <li>आपत्कालीन हेल्पलाइन: 122</li>
                <li>गुन्हेगारी थांबवणारा: 1090</li>
                <li>महिला हेल्पलाइन: 1091</li>
                <li>बाल हेल्पलाइन: 1098</li>
                <li>नागरिकांचे कॉल सेंटर: 155300</li>
                <li>सायबर गुन्हे: 1930</li>
              </ul>

            </div>


            {/* Contact */}
            <div className="col-12 col-sm-6 col-lg-3">

            <h6>संपर्क करा</h6>

            <p>
                <i className="bi bi-geo-alt-fill me-2"></i>
                पुणे जिल्हा परिषद भवन,<br/>
                जिल्हाधिकारी कार्यालयाजवळ,<br/>
                पुणे - 411001
            </p>

            <p>
                <i className="bi bi-telephone-fill me-2"></i>
                020-26114141
            </p>

            <p>
                <i className="bi bi-envelope-fill me-2"></i>
                ceozp.pune@maharashtra.gov.in
            </p>

            <div>
              <i className="bi bi-instagram me-2"></i>
              <i className="bi bi-facebook me-2"></i>
              <i className="bi bi-youtube me-2"></i>
            </div>

            </div>

          </div>

        </div>

      </div>

    </footer>
  )
}

export default Footer