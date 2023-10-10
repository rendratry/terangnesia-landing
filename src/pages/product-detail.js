import React, { useState, useEffect } from 'react';
import {Link, useLocation} from 'react-router-dom';
import { Container, Row, Col, Card, Image, ListGroup, Button } from 'react-bootstrap';
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import { getProductsById } from "../api";
import ShimmerProductDetail from "../components/shimmer-product-detail";
import Badge from "react-bootstrap/Badge";

const ProductDetail = () => {
    // Dapatkan parameter id produk dari URL
    const cdnLink = "https://terangnesia.sgp1.cdn.digitaloceanspaces.com/";
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const id_product = queryParams.get('product');

    const [currentPhoto, setCurrentPhoto] = useState(null);
    const [smallPhotos, setSmallPhotos] = useState([]);
    const [product, setProduct] = useState({});
    const [productPhotos, setProductPhotos] = useState([]);
    const [contacts, setContacts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [productName, setProductName] = useState('');

    const handleInputChange = (e) => {
        setProductName(e.target.value);
    };

    useEffect(() => {
        const fetchDataFromAPI = async () => {
            try {
                const responseData = await getProductsById(id_product);
                setProduct(responseData.data.product);
                setProductPhotos(responseData.data.product_photos);
                setContacts(responseData.data.contacts);

                // Mengatur foto besar awal dari product.thumbnail
                setCurrentPhoto(cdnLink + responseData.data.product.thumbnail);

                // Mengatur daftar foto kecil dari productPhotos
                const smallPhotoUrls = responseData.data.product_photos.map((photo) => cdnLink + photo.photo);
                setSmallPhotos(smallPhotoUrls);
                setLoading(false); // Menandakan bahwa data telah dimuat
            } catch (error) {
                console.error('Terjadi kesalahan:', error);
            }
        };
        fetchDataFromAPI();
    }, [id_product]);

    const handlePhotoClick = (photoUrl) => {
        // Set foto besar yang sedang ditampilkan
        setCurrentPhoto(photoUrl);
    };

    return (
        <div>
            <Navbar />
            <Container>
                <section className="pt-5 pb-0">
                    <div className="container">
                        <p className="mb-2 text-secondary">Cari Produk Lain</p>
                        <div className="row align-items-center">
                            <div className="col-12 col-md-6">
                                <form className="mb-4 d-flex">
                                    <input
                                        className="form-control flex-grow-1 me-3"
                                        type="text"
                                        placeholder="Masukkan Nama Produk"
                                        aria-label="product"
                                        value={productName}
                                        onChange={handleInputChange}
                                    />
                                    <Link
                                        to={`/search-product?product=${productName}`}
                                        className="btn btn-warning btn-lg"
                                        role="button"
                                    >
                                        Cari
                                    </Link>
                                </form>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="pt-0" id="products">
                    <div className="container">
                        <h2 className="fw-bold mb-2">Detail Produk</h2>
                        <br></br>
                        {/* Render konten detail produk */}
                        {loading ? (
                            <ShimmerProductDetail />
                        ) : (
                            // Detail Product
                            <Row>
                                {/* Header Produk (Foto Besar) */}
                                <Col md={4} style={{ maxWidth: '600px' }}>
                                    <Card className="rounded-3 mb-3">
                                        <Image
                                            src={currentPhoto}
                                            alt={product.name}
                                            fluid
                                            style={{ maxWidth: '500px', marginBottom: '10px' }} // Sesuaikan jarak bawah di sini
                                        />
                                    </Card>
                                    <Row>
                                        {/* Galeri Foto Kecil (Thumbnail) */}
                                        <ListGroup horizontal>
                                            {smallPhotos.map((photoUrl, index) => (
                                                <ListGroup.Item key={index} style={{ border: "none" }}>
                                                    <Image
                                                        style={{ maxWidth: '100px', border: "none" }}
                                                        src={photoUrl}
                                                        alt={product.name}
                                                        thumbnail
                                                        onClick={() => handlePhotoClick(photoUrl)}
                                                    />
                                                </ListGroup.Item>
                                            ))}
                                        </ListGroup>
                                    </Row>
                                </Col>
                                <Col md={4}>
                                    {/* Informasi Produk */}
                                    <Badge bg="warning" className="m-3 mb-0">{product.label}</Badge>
                                    <Card className="rounded-3"> {/* Sesuaikan jarak kiri di sini */}
                                        <Card.Body style={{ border: "none" }}>
                                            <Card.Title>{product.name}</Card.Title>
                                            <p className="text-secondary mb-0">Harga :</p>
                                            <h2><strong>Rp {product.price.toLocaleString()}</strong></h2>
                                            <p className="text-secondary mb-0">Deskripsi :</p>
                                            <Card.Text>{product.description}</Card.Text>
                                        </Card.Body>
                                        <Card>
                                            <Card.Body className="d-flex align-items-center">
                                                <img
                                                    src="https://terangnesia.sgp1.cdn.digitaloceanspaces.com/app-assets/shopping-cart.png"
                                                    alt={product.owner}
                                                    width="32"
                                                    height="32"
                                                />
                                                <Col className="m-4">
                                                    <h5 className="mb-0">{product.owner}</h5>
                                                    <p className="text-secondary mb-0">Lokasi : <strong>{product.location}</strong></p>
                                                </Col>
                                            </Card.Body>
                                        </Card>
                                    </Card>
                                </Col>
                                {/* Kontak Penjual */}
                                <Col md={4}>
                                    <Card>
                                        <Card.Body>
                                            <Card.Title>Kontak Penjual</Card.Title>
                                        </Card.Body>
                                        <ListGroup variant="flush">
                                            {contacts.map((contact) => (
                                                <ListGroup.Item key={contact.id_contact} style={{ borderBottom: "none" }}>
                                                    <a href={contact.action} target="_blank">
                                                        <Button variant="success" className="rounded-pill">
                                                            {contact.label}
                                                        </Button>
                                                    </a>
                                                </ListGroup.Item>
                                            ))}
                                        </ListGroup>
                                    </Card>
                                </Col>
                            </Row>
                            // End Detail Product
                        )}
                    </div>
                </section>

            </Container>
            <Footer />
        </div>
    );
};

export default ProductDetail;
