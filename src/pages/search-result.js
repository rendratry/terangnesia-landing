import Navbar from "../components/navbar";
import { Link, useLocation } from "react-router-dom";
import Badge from "react-bootstrap/Badge";
import React, { useEffect, useState } from "react";
import Footer from "../components/footer";
import { searchProduct } from "../api";
import ShimmerCard from "../components/shimmer";

const SearchResult = () => {
    const cdnLink = "https://terangnesia.sgp1.cdn.digitaloceanspaces.com/";
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const productParam = queryParams.get('product');
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [notFoundProduct, setNotFoundProduct] = useState(false);

    const [productName, setProductName] = useState(productParam);

    const handleInputChange = (e) => {
        setProductName(e.target.value);
    };

    const setIsLoading = () => {
        setLoading(true);
    };

    useEffect(() => {
        const fetchDataFromAPI = async () => {
            try {
                await new Promise(resolve => setTimeout(resolve, 1000));
                const responseData = await searchProduct(productParam);
                setProducts(responseData.data);
                setLoading(false);
                setNotFoundProduct(responseData.data.length === 0); // Set notFoundProduct berdasarkan hasil pencarian
            } catch (error) {
                setLoading(false);
                setNotFoundProduct(true);
                console.error('Terjadi kesalahan Bro:', error);
            }
        };

        fetchDataFromAPI();
    }, [productParam]);


    return (
        <div>
            <Navbar />
            <section className="pt-5 pb-0">
                <div className="container">
                    <p className="mb-2 text-secondary">Cari Produk UMKM</p>
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
                                    onClick={setIsLoading}
                                >
                                    Cari
                                </Link>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
            <section className="p-0" id="product">
                <div className="container">
                    <h1 className="fw-bold fs-6 mb-2">Hasil Pencarian</h1>
                    <p className="mb-6 text-secondary">
                        menampilkan hasil pencarian kamu '{productParam}'
                    </p>
                    <div className="row">
                        {loading ? (
                            <>
                                <ShimmerCard />
                                <ShimmerCard />
                                <ShimmerCard />
                            </>
                        ) : !notFoundProduct ? (
                            // Tampilkan produk sebenarnya setelah loading selesai
                            products.map((product) => (
                                <div key={product.id_product} className="col-md-4 mb-4">
                                    <div className="card">
                                        <Link to={`/product-detail?product=${product.id_product}`} className="card-link">
                                            <img className="card-img-top" src={cdnLink + product.thumbnail} alt={product.name} />
                                            <div className="card-body ps-0">
                                                <Badge bg="warning">{product.label}</Badge>
                                                <h4 className="fw-bold text-decoration-none me-1" style={{ textDecoration: 'none' }}>{product.name}</h4>
                                                <p className="text-secondary">
                                                    <span style={{ textDecoration: 'none' }} className="fw-bold text-decoration-none me-1" href="">{product.owner}</span>|
                                                    <span style={{ textDecoration: 'none' }} className="ms-1">{product.location}</span>
                                                </p>
                                                <h5 style={{ textDecoration: 'none' }} className="fw-bold">Rp. {product.price.toLocaleString()}</h5>
                                            </div>
                                        </Link>
                                    </div>
                                </div>
                            ))
                        ) : (
                            <div className="container" style={{justifyContent:"center", display:"flex", alignItems:"center", flexDirection:"column"}}>
                                <h5>Produk Tidak ditemukan</h5>
                                <img
                                    src={process.env.PUBLIC_URL + '/assets/img/empty-box.png'}
                                    alt="Not Found"
                                    width="300"
                                    height="300"
                                />
                            </div>
                        )}
                    </div>
                </div>
            </section>
            <Footer />
        </div>
    );
};

export default SearchResult;
