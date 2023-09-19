import React from 'react';
import Navbar from '../components/navbar';
import Footer from '../components/footer';

const Landing = () => {
  return (
    <div>
      <Navbar/>
      <section className="pt-7">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6 text-md-start text-center py-6">
              <h1 className="mb-4 fs-9 fw-bold">The Design Thinking Superpowers</h1>
              <p className="mb-6 lead text-secondary">Tools tutorials, design and innovation experts, all<br className="d-none d-xl-block" />in one place! The most intuitive way to imagine<br className="d-none d-xl-block" />your next user experience.</p>
              <div className="text-center text-md-start">
                <a className="btn btn-warning me-3 btn-lg" href="" role="button">Get started</a>
                <a className="btn btn-link text-warning fw-medium" href="" role="button" data-bs-toggle="modal" data-bs-target="#popupVideo">
                  <span className="fas fa-play me-2"></span>Watch the video
                </a>
              </div>
            </div>
            <div className="col-md-6 text-end">
              <img className="pt-7 pt-md-0 img-fluid" src="assets/img/hero/hero-img.png" alt="halo" />
            </div>
          </div>
        </div>
      </section>

      <section className="pt-5 pt-md-9 mb-6" id="feature">
        <div className="bg-holder z-index--1 bottom-0 d-none d-lg-block" style={{ backgroundImage: 'url(assets/img/category/shape.png)', opacity: '.5' }}>
        </div>
        <div className="container">
          <h1 className="fs-9 fw-bold mb-4 text-center">We design tools to unveil <br className="d-none d-xl-block" />your superpowers</h1>
          <div className="row">
            <div className="col-lg-3 col-sm-6 mb-2"> <img className="mb-3 ms-n3" src="assets/img/category/icon1.png" width={75} alt="Feature" />
            <h4 className="mb-3">First click tests</h4>
            <p className="mb-0 fw-medium text-secondary">While most people enjoy casino gambling,</p>
            </div>
            <div className="col-lg-3 col-sm-6 mb-2"> <img className="mb-3 ms-n3" src="assets/img/category/icon2.png" width={75} alt="Feature" />
            <h4 className="mb-3">Design surveys</h4>
            <p className="mb-0 fw-medium text-secondary">Sports betting,lottery and bingo playing for the fun</p>
            </div>
            <div className="col-lg-3 col-sm-6 mb-2"> <img className="mb-3 ms-n3" src="assets/img/category/icon3.png" width={75} alt="Feature" />
            <h4 className="mb-3">Preference tests</h4>
            <p className="mb-0 fw-medium text-secondary">The Myspace page defines the individual.</p>
            </div>
            <div className="col-lg-3 col-sm-6 mb-2"> <img className="mb-3 ms-n3" src="assets/img/category/icon4.png" width={75} alt="Feature" />
            <h4 className="mb-3">Five second tests</h4>
            <p className="mb-0 fw-medium text-secondary">Personal choices and the overall personality of the person.</p>
            </div>
          </div>
          <div className="text-center">
            <a className="btn btn-warning" href="" role="button">SIGN UP NOW</a>
          </div>
        </div>
      </section>

      <section className="pt-5" id="validation">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <h5 className="text-secondary">Effortless Validation for</h5>
              <h2 className="mb-2 fs-7 fw-bold">Design Professionals</h2>
              {/* Validation content */}
            </div>
            <div className="col-lg-6">
              <img className="img-fluid" src="assets/img/validation/validation.png" alt="hai" />
            </div>
          </div>
        </div>
      </section>
      <section className="pt-5" id="manager">
        <div className="container">
        <div className="row">
            <div className="col-lg-6"><img className="img-fluid" src="assets/img/manager/manager.png" alt="helo" /></div>
            <div className="col-lg-6">
            <h5 className="text-secondary">Easier decision making for</h5>
            <p className="fs-7 fw-bold mb-2">Product Managers</p>
            <p className="mb-4 fw-medium text-secondary">
                The Myspace page defines the individual,his or her
                characteristics, traits, personal choices and the overall<br />personality of the person.
            </p>
            <div className="d-flex align-items-center mb-3"> <img className="me-sm-4 me-2" src="assets/img/manager/tick.png" width={35} alt="tick" />
                <p className="fw-medium mb-0 text-secondary">Never worry about overpaying for your<br />energy again.</p>
            </div>
            <div className="d-flex align-items-center mb-3"> <img className="me-sm-4 me-2" src="assets/img/manager/tick.png" width={35} alt="tick" />
                <p className="fw-medium mb-0 text-secondary">We will only switch you to energy companies<br />that we trust and will treat you right</p>
            </div>
            <div className="d-flex align-items-center mb-3"><img className="me-sm-4 me-2" src="assets/img/manager/tick.png" width={35} alt="tick" />
                <p className="fw-medium mb-0 text-secondary"> We track the markets daily and know where the<br />savings are.</p>
            </div>
            </div>
        </div>
        </div>{/* end of .container*/}
    </section>
    <section className="pt-5" id="marketer">
        <div className="container">
        <div className="row">
            <div className="col-lg-6">
            <h5 className="text-secondary">Optimisation for</h5>
            <p className="mb-2 fs-8 fw-bold">Marketers</p>
            <p className="mb-4 fw-medium text-secondary">Few would argue that, despite the advancements of<br />feminism over the past three decades, women still face a<br />double standard when it comes to their behavior.</p>
            <h4 className="fw-bold fs-1">Accessory makers</h4>
            <p className="mb-4 fw-medium text-secondary">While most people enjoy casino gambling, sports betting,<br />lottery and bingo playing for the fun</p>
            <h4 className="fw-bold fs-1">Alterationists</h4>
            <p className="mb-4 fw-medium text-secondary">If you are looking for a new way to promote your business<br />that won't cost you money,</p>
            <h4 className="fw-bold fs-1">Custom Design designers</h4>
            <p className="mb-4 fw-medium text-secondary">If you are looking for a new way to promote your business<br />that won't cost you more money,</p>
            </div>
            <div className="col-lg-6"><img className="img-fluid" src="assets/img/marketer/marketer.png" alt="Tes" /></div>
        </div>
        </div>{/* end of .container*/}
    </section>
    <section className="py-md-11 py-8" id="superhero">
        <div className="bg-holder z-index--1 bottom-0 d-none d-lg-block background-position-top" style={{backgroundImage: 'url(assets/img/superhero/oval.png)', opacity: '.5', backgroundPosition: 'top !important'}}>
        </div>
        {/*/.bg-holder*/}
        <div className="container">
        <div className="row justify-content-center">
            <div className="col-lg-6 text-center">
            <h1 className="fw-bold mb-4 fs-7">Need a super hero?</h1>
            <p className="mb-5 text-info fw-medium">Do you require some help for your project: Conception workshop,<br />prototyping, marketing strategy, landing page, Ux/UI?</p>
            <button className="btn btn-warning btn-md">Contact our expert</button>
            </div>
        </div>
        </div>{/* end of .container*/}
    </section>
    <section className="pt-5" id="marketing">
        <div className="container">
        <h1 className="fw-bold fs-6 mb-3">Marketing Strategies</h1>
        <p className="mb-6 text-secondary">Join 40,000+ other marketers and get proven strategies on email marketing</p>
        <div className="row">
            <div className="col-md-4 mb-4">
            <div className="card"><img className="card-img-top" src="assets/img/marketing/marketing01.png" alt="tes2"/>
                <div className="card-body ps-0">
                <p className="text-secondary">By <a className="fw-bold text-decoration-none me-1" href="">Abdullah</a>|<span className="ms-1">03 March 2019</span></p>
                <h3 className="fw-bold">Increasing Prosperity With Positive Thinking</h3>
                </div>
            </div>
            </div>
            <div className="col-md-4 mb-4">
            <div className="card"><img className="card-img-top" src="assets/img/marketing/marketing02.png" alt="tes3" />
                <div className="card-body ps-0">
                <p className="text-secondary">By <a className="fw-bold text-decoration-none me-1" href="">Abdullah</a>|<span className="ms-1">03 March 2019</span></p>
                <h3 className="fw-bold">Motivation Is The First Step To Success</h3>
                </div>
            </div>
            </div>
            <div className="col-md-4 mb-4">
            <div className="card"><img className="card-img-top" src="assets/img/marketing/marketing03.png" alt="tes4" />
                <div className="card-body ps-0">
                <p className="text-secondary">By <a className="fw-bold text-decoration-none me-1" href="">Abdullah</a>|<span className="ms-1">03 March 2019</span></p>
                <h3 className="fw-bold">Success Steps For Your Personal Or Business Life</h3>
                </div>
            </div>
            </div>
        </div>
        </div>{/* end of .container*/}
    </section>
    <Footer/>
    </div>
  );
};

export default Landing;