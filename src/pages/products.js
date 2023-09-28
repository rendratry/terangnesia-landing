import React, { useEffect, useState } from "react";
import { getProductsByLabel } from "../api";
import { Link, useLocation } from "react-router-dom";
import Navbar from "../components/navbar";
import Badge from "react-bootstrap/Badge";
import Footer from "../components/footer";
import ShimmerCard from "../components/shimmer";

// Buat komponen Shimmer untuk efek loading

const Products = () => {
    const cdnLink = "https://terangnesia.sgp1.cdn.digitaloceanspaces.com/";
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const label = queryParams.get('label');
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchDataFromAPI = async () => {
            try {
                await new Promise(resolve => setTimeout(resolve, 1000));
                const responseData = await getProductsByLabel(label);
                setProducts(responseData.data);
                setLoading(false); // Set loading menjadi false setelah data dimuat
            } catch (error) {
                console.error('Terjadi kesalahan:', error);
            }
        };

        fetchDataFromAPI();
    }, [label]);

    return (
        <div>
            <Navbar />
            <section className="p-0" id="product">
                <div className="container">
                    <h1 className="fw-bold fs-6 mb-2">Hasil Pencarian</h1>
                    <p className="mb-6 text-secondary">menampilkan hasil pencarian kamu '{label}'</p>
                    <div className="row">
                        {loading ? ( // Tampilkan efek shimmer saat loading
                            <>
                                <ShimmerCard />
                                <ShimmerCard />
                                <ShimmerCard />
                            </>
                        ) : (
                            // Tampilkan produk sebenarnya setelah loading selesai
                            products.map((product) => (
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
                            ))
                        )}
                    </div>
                </div>
            </section>
            <Footer />
        </div>
    );
}

export default Products;
