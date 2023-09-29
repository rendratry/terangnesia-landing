import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Container, Row, Col, Card, Image, ListGroup, Button } from 'react-bootstrap';
import Navbar from "../components/navbar";
import Footer from "../components/footer";

function ProductDetail() {
    // Dapatkan parameter id produk dari URL
    const cdnLink = "https://terangnesia.sgp1.cdn.digitaloceanspaces.com/";
    const { productId } = useParams();

    const [currentPhoto, setCurrentPhoto] = useState(null);
    const [smallPhotos, setSmallPhotos] = useState([]);

    useEffect(() => {
        // Mengatur foto besar awal dari product.thumbnail
        setCurrentPhoto(cdnLink + product.thumbnail);

        // Mengatur daftar foto kecil dari productPhotos
        const smallPhotoUrls = productPhotos.map((photo) => cdnLink + photo.photo);
        setSmallPhotos(smallPhotoUrls);
    }, []);

    const handlePhotoClick = (photoUrl) => {
        // Set foto besar yang sedang ditampilkan
        setCurrentPhoto(photoUrl);
    };

    // Data produk (contoh data)
    const product = {
        id_product: 'a2f4f04c-ce53-4fd7-a47e-691a2d385d38',
        name: 'Coklat Asli Madiun',
        label: 'makanan',
        description: 'Merupakan coklat produksi asli madiun',
        owner: 'Omah Coklat',
        price: 50000,
        location: 'Madiun',
        thumbnail: 'product-assets/a2f4f04c-ce53-4fd7-a47e-691a2d385d38thumbnail.jpeg',
        // ... (data lainnya)
    };

    // Data foto produk (contoh data)
    const productPhotos = [
        {
            id_photo: '812d87b9-f9b8-4213-8631-50af417a25fa',
            id_product: 'a2f4f04c-ce53-4fd7-a47e-691a2d385d38',
            photo: 'product-assets/812d87b9-f9b8-4213-8631-50af417a25fa.jpeg',
            label: 'Foto Produk',
            description: 'Foto Coklat',
        },
        {
            id_photo: '87c06b04-be43-4755-9bdf-d2b4fb5c504b',
            id_product: 'a2f4f04c-ce53-4fd7-a47e-691a2d385d38',
            photo: 'product-assets/67eae598-02b3-4809-b4ec-d49cb902d883thumbnail.jpeg',
            label: 'Foto Produk',
            description: 'Foto Coklat',
        },
    ];

    // Data kontak penjual (contoh data)
    const contacts = [
        {
            id_contact: '040cf170-149b-4a1e-a985-3e724f826ec7',
            id_product: 'a2f4f04c-ce53-4fd7-a47e-691a2d385d38',
            label: 'Whatsapp',
            action: 'wa.me/6281554595532',
        },
        {
            id_contact: 'e5b9bab3-ab18-4ee1-b0cf-d36e7003bf1a',
            id_product: 'a2f4f04c-ce53-4fd7-a47e-691a2d385d38',
            label: 'Telegram',
            action: 'telegram.me/link',
        },
    ];

    return (
        <div>
            <Navbar/>
            <Container>
                <h1 className="fw-bold fs-6 mb-2">Detail Product</h1>
                <Row>
                    {/* Header Produk (Foto Besar) */}
                    <Col md={4} style={{maxWidth: '500px'}}>
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
                                        <ListGroup.Item key={index}>
                                            <Image
                                                style={{ maxWidth: '100px' }}
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
                            <Card.Body>
                                <Card.Title>{product.name}</Card.Title>
                                <Card.Text>{product.description}</Card.Text>
                            </Card.Body>
                        </Card>
                        <ListGroup variant="flush">
                            <ListGroup.Item>
                                <strong>Label:</strong> {product.label}
                            </ListGroup.Item>
                            <ListGroup.Item>
                                <strong>Harga:</strong> Rp. {product.price}
                            </ListGroup.Item>
                            <ListGroup.Item>
                                <strong>Pemilik:</strong> {product.owner}
                            </ListGroup.Item>
                            <ListGroup.Item>
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
                                    <ListGroup.Item key={contact.id_contact}>
                                        <Button variant="primary" className="rounded-pill" href={contact.action} target="_blank">
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
}

export default ProductDetail;
