import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Container, Row, Col, Card, Image, ListGroup, Button } from 'react-bootstrap';
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import { getProductsById } from "../api";

const ProductDetail = () => {
    // Dapatkan parameter id produk dari URL
    const cdnLink = "https://terangnesia.sgp1.cdn.digitaloceanspaces.com/";
    const { id_product } = useParams();

    const [currentPhoto, setCurrentPhoto] = useState(null);
    const [smallPhotos, setSmallPhotos] = useState([]);
    const [product, setProduct] = useState({});
    const [productPhotos, setProductPhotos] = useState([]);
    const [contacts, setContacts] = useState([]);

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
            <Navbar/>
            <Container>
                <h2 className="fw-bold mb-2">Detail Produk</h2>
                <br></br>
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
                        <Card className="rounded-3 mb-3"> {/* Sesuaikan jarak kiri di sini */}
                            <Card.Body style={{ border: "none" }}>
                                <Card.Title>{product.name}</Card.Title>
                                <Card.Text>{product.description}</Card.Text>
                            </Card.Body>
                        </Card>
                        <ListGroup variant="flush">
                            <ListGroup.Item style={{ borderBottom: "none" }}>
                                <strong>Label:</strong> {product.label}
                            </ListGroup.Item>
                            <ListGroup.Item style={{ borderBottom: "none" }}>
                                <strong>Harga:</strong> Rp. {product.price}
                            </ListGroup.Item>
                            <ListGroup.Item style={{ borderBottom: "none" }}>
                                <strong>Pemilik:</strong> {product.owner}
                            </ListGroup.Item>
                            <ListGroup.Item style={{ borderBottom: "none" }}>
                                <strong>Lokasi:</strong> {product.location}
                            </ListGroup.Item>
                        </ListGroup>
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
                                        <Button variant="success" className="rounded-pill" href={contact.action} target="_blank">
                                            {contact.label}
                                        </Button>
                                    </ListGroup.Item>
                                ))}
                            </ListGroup>
                        </Card>
                    </Col>
                </Row>
            </Container>
            <Footer/>
        </div>
    );
};

export default ProductDetail;
