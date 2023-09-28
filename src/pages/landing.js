import React, { useState, useEffect } from 'react';
import Navbar from '../components/navbar';
import Footer from '../components/footer';
import Badge from 'react-bootstrap/Badge';
import {Card, Carousel} from "react-bootstrap";
import { fetchProducts } from '../api';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUtensils } from '@fortawesome/free-solid-svg-icons';

const Landing = () => {

    const [productName, setProductName] = useState('');

    const handleInputChange = (e) => {
        setProductName(e.target.value);
    };

    const cdnLink = "https://terangnesia.sgp1.cdn.digitaloceanspaces.com/";
    const [products, setProducts] = useState([]);
    const [limit] = useState(10);
    const [offset] = useState(0);
    useEffect(() => {
        const fetchDataFromAPI = async () => {
            try {
                const responseData = await fetchProducts(limit, offset);
                setProducts(responseData.data);
            } catch (error) {
                console.error('Terjadi kesalahan:', error);
            }
        };

        fetchDataFromAPI();
    }, [limit, offset]);
  return (
    <div>
      <Navbar/>
      <section className="pt-7">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6 text-md-start text-center py-6">
              <h1 className="mb-4 fs-9 fw-bold">Terangnesia</h1>
              <p className="mb-6 lead text-secondary">Tempat kamu dapat menemukan produk - produk UMKM<br className="d-none d-xl-block" />dari seluruh indonesia<br className="d-none d-xl-block" /></p>
               <div className="text-center text-md-start">
                   <form className="mb-3">
                       <input
                           className="form-control"
                           type="text" placeholder="Masukkan Nama Produk"
                           aria-label="product"
                           value={productName}
                           onChange={handleInputChange}
                       />
                       <br></br>
                       <div className="text-center text-md-start">
                           <Link to={`/search-product?product=${productName}`} className="btn btn-warning me-3 btn-lg" href="" role="button">Cari</Link>
                       </div>
                   </form>
               </div>
            </div>
            <div className="col-md-6 text-end">
              <img className="pt-7 pt-md-0 img-fluid" src="assets/img/hero/hero-img.png" alt="halo" />
            </div>
          </div>
        </div>
      </section>

        <section className="pt-4" id="banner">
            <Carousel nextLabel={null}>
                <Carousel.Item>
                    <img
                        className="d-block w-100 rounded"
                        src="https://via.placeholder.com/1600x400" // Ganti URL gambar dengan URL gambar Anda
                        alt="First slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100 rounded"
                        src="https://via.placeholder.com/1600x400" // Ganti URL gambar dengan URL gambar Anda
                        alt="Second slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100 rounded"
                        src="https://via.placeholder.com/1600x400" // Ganti URL gambar dengan URL gambar Anda
                        alt="Third slide"
                    />
                </Carousel.Item>
            </Carousel>
        </section>

        <section className="pt-5 pb-0" id="products">
            <div className="container">
                <h1 className="fw-bold fs-6 mb-3">Produk Pilihan</h1>
                <p className="mb-6 text-secondary">Produk pilihan terangnesia yang mungkin cocok buatmu</p>
                <div className="row">
                    {products.map((product) => (
                        <div key={product.id_product} className="col-md-4 mb-4">
                            <div className="card">
                                <Link to={`/product/${product.id_product}`} className="card-link">
                                <img className="card-img-top" src={cdnLink + product.thumbnail} alt={product.name} />
                                <div className="card-body ps-0">
                                    <Badge bg="warning">{product.label}</Badge>
                                    <h4 className="fw-bold text-decoration-none me-1" style={{ textDecoration: 'none' }}>{product.name}</h4>
                                    <p className="text-secondary">
                                        By <a style={{ textDecoration: 'none' }} className="fw-bold text-decoration-none me-1" href="">{product.owner}</a>|
                                        <span style={{ textDecoration: 'none' }} className="ms-1">{product.location}</span>
                                    </p>
                                    <h5 style={{ textDecoration: 'none' }} className="fw-bold">Rp. {product.price}</h5>
                                </div>
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>{/* end of .container*/}
        </section>

        <section className="pt-0 pt-md-9 mb-6" id="feature">
            <div className="bg-holder z-index--1 bottom-0 d-none d-lg-block">
            </div>
            <div className="container">
                <h1 className="fs-9 fw-bold mb-4 text-center">Cari Berdasarkan Kategori Produk UMKM</h1>
                <p className="mb-4 text-center text-secondary pt-0">Pilih kategori produk UMKM yang kamu butuhkan</p>
                <div className="d-flex flex-wrap justify-content-center">
                    <div className="col-md-4 mb-4 mx-2">
                        <Card style={{ border: '1px solid #999' }}>
                            <Card.Body className="d-flex align-items-center justify-content-center">
                                <FontAwesomeIcon icon={faUtensils} size="2x" className="me-3 text-warning" />
                                <h4>Makanan</h4>
                            </Card.Body>
                        </Card>
                    </div>
                    <div className="col-md-4 mb-4 mx-2">
                        <Card style={{ border: '1px solid #999' }}>
                            <Card.Body className="d-flex align-items-center justify-content-center">
                                <FontAwesomeIcon icon={["fas", "utensils"]} size="2x" className="me-3 text-warning" />
                                <h5>Makanan</h5>
                            </Card.Body>
                        </Card>
                    </div>
                </div>
            </div>
        </section>


      {/*<section className="pt-5" id="validation">*/}
      {/*  <div className="container">*/}
      {/*    <div className="row">*/}
      {/*      <div className="col-lg-6">*/}
      {/*        <h5 className="text-secondary">Effortless Validation for</h5>*/}
      {/*        <h2 className="mb-2 fs-7 fw-bold">Design Professionals</h2>*/}
      {/*        /!* Validation content *!/*/}
      {/*      </div>*/}
      {/*      <div className="col-lg-6">*/}
      {/*        <img className="img-fluid" src="assets/img/validation/validation.png" alt="hai" />*/}
      {/*      </div>*/}
      {/*    </div>*/}
      {/*  </div>*/}
      {/*</section>*/}
    {/*  <section className="pt-5" id="manager">*/}
    {/*    <div className="container">*/}
    {/*    <div className="row">*/}
    {/*        <div className="col-lg-6"><img className="img-fluid" src="assets/img/manager/manager.png" alt="helo" /></div>*/}
    {/*        <div className="col-lg-6">*/}
    {/*        <h5 className="text-secondary">Easier decision making for</h5>*/}
    {/*        <p className="fs-7 fw-bold mb-2">Product Managers</p>*/}
    {/*        <p className="mb-4 fw-medium text-secondary">*/}
    {/*            The Myspace page defines the individual,his or her*/}
    {/*            characteristics, traits, personal choices and the overall<br />personality of the person.*/}
    {/*        </p>*/}
    {/*        <div className="d-flex align-items-center mb-3"> <img className="me-sm-4 me-2" src="assets/img/manager/tick.png" width={35} alt="tick" />*/}
    {/*            <p className="fw-medium mb-0 text-secondary">Never worry about overpaying for your<br />energy again.</p>*/}
    {/*        </div>*/}
    {/*        <div className="d-flex align-items-center mb-3"> <img className="me-sm-4 me-2" src="assets/img/manager/tick.png" width={35} alt="tick" />*/}
    {/*            <p className="fw-medium mb-0 text-secondary">We will only switch you to energy companies<br />that we trust and will treat you right</p>*/}
    {/*        </div>*/}
    {/*        <div className="d-flex align-items-center mb-3"><img className="me-sm-4 me-2" src="assets/img/manager/tick.png" width={35} alt="tick" />*/}
    {/*            <p className="fw-medium mb-0 text-secondary"> We track the markets daily and know where the<br />savings are.</p>*/}
    {/*        </div>*/}
    {/*        </div>*/}
    {/*    </div>*/}
    {/*    </div>/!* end of .container*!/*/}
    {/*</section>*/}
    {/*<section className="pt-5" id="marketer">*/}
    {/*    <div className="container">*/}
    {/*    <div className="row">*/}
    {/*        <div className="col-lg-6">*/}
    {/*        <h5 className="text-secondary">Optimisation for</h5>*/}
    {/*        <p className="mb-2 fs-8 fw-bold">Marketers</p>*/}
    {/*        <p className="mb-4 fw-medium text-secondary">Few would argue that, despite the advancements of<br />feminism over the past three decades, women still face a<br />double standard when it comes to their behavior.</p>*/}
    {/*        <h4 className="fw-bold fs-1">Accessory makers</h4>*/}
    {/*        <p className="mb-4 fw-medium text-secondary">While most people enjoy casino gambling, sports betting,<br />lottery and bingo playing for the fun</p>*/}
    {/*        <h4 className="fw-bold fs-1">Alterationists</h4>*/}
    {/*        <p className="mb-4 fw-medium text-secondary">If you are looking for a new way to promote your business<br />that won't cost you money,</p>*/}
    {/*        <h4 className="fw-bold fs-1">Custom Design designers</h4>*/}
    {/*        <p className="mb-4 fw-medium text-secondary">If you are looking for a new way to promote your business<br />that won't cost you more money,</p>*/}
    {/*        </div>*/}
    {/*        <div className="col-lg-6"><img className="img-fluid" src="assets/img/marketer/marketer.png" alt="Tes" /></div>*/}
    {/*    </div>*/}
    {/*    </div>/!* end of .container*!/*/}
    {/*</section>*/}
    <section className="py-md-11 py-8" id="join-us">
        <div className="bg-holder z-index--1 bottom-0 d-none d-lg-block background-position-top" style={{backgroundImage: 'url(assets/img/superhero/oval.png)', opacity: '.5', backgroundPosition: 'top !important'}}>
        </div>
        {/*/.bg-holder*/}
        <div className="container">
        <div className="row justify-content-center">
            <div className="col-lg-6 text-center">
            <h1 className="fw-bold mb-4 fs-7">Ingin Produkmu Tampil di Terangnesia?</h1>
            <p className="mb-5 text-info fw-medium">Hubungi kita agar produkmu bisa tampil dan<br />menggapai market seluruh indonesia</p>
            <button className="btn btn-warning btn-md">Hubungi Kami</button>
            </div>
        </div>
        </div>{/* end of .container*/}
    </section>
    {/*<section className="pt-5" id="marketing">*/}
    {/*    <div className="container">*/}
    {/*    <h1 className="fw-bold fs-6 mb-3">Marketing Strategies</h1>*/}
    {/*    <p className="mb-6 text-secondary">Join 40,000+ other marketers and get proven strategies on email marketing</p>*/}
    {/*    <div className="row">*/}
    {/*        <div className="col-md-4 mb-4">*/}
    {/*        <div className="card"><img className="card-img-top" src="assets/img/marketing/marketing01.png" alt="tes2"/>*/}
    {/*            <div className="card-body ps-0">*/}
    {/*            <p className="text-secondary">By <a className="fw-bold text-decoration-none me-1" href="">Abdullah</a>|<span className="ms-1">03 March 2019</span></p>*/}
    {/*            <h3 className="fw-bold">Increasing Prosperity With Positive Thinking</h3>*/}
    {/*            </div>*/}
    {/*        </div>*/}
    {/*        </div>*/}
    {/*        <div className="col-md-4 mb-4">*/}
    {/*        <div className="card"><img className="card-img-top" src="assets/img/marketing/marketing02.png" alt="tes3" />*/}
    {/*            <div className="card-body ps-0">*/}
    {/*            <p className="text-secondary">By <a className="fw-bold text-decoration-none me-1" href="">Abdullah</a>|<span className="ms-1">03 March 2019</span></p>*/}
    {/*            <h3 className="fw-bold">Motivation Is The First Step To Success</h3>*/}
    {/*            </div>*/}
    {/*        </div>*/}
    {/*        </div>*/}
    {/*        <div className="col-md-4 mb-4">*/}
    {/*        <div className="card"><img className="card-img-top" src="assets/img/marketing/marketing03.png" alt="tes4" />*/}
    {/*            <div className="card-body ps-0">*/}
    {/*            <p className="text-secondary">By <a className="fw-bold text-decoration-none me-1" href="">Abdullah</a>|<span className="ms-1">03 March 2019</span></p>*/}
    {/*            <h3 className="fw-bold">Success Steps For Your Personal Or Business Life</h3>*/}
    {/*            </div>*/}
    {/*        </div>*/}
    {/*        </div>*/}
    {/*    </div>*/}
    {/*    </div>/!* end of .container*!/*/}
    {/*</section>*/}
    <Footer/>
    </div>
  );
};

export default Landing;