import React from 'react';

const ShimmerDetailProduct = () => {
    const shimmerStyle = {
        backgroundColor: '#f0f0f0', // Warna latar belakang
        borderRadius: '4px', // Bentuk sudut
        margin: '0 0 10px 0', // Margin bawah
    };

    return (
        <div>
            {/* Shimmer untuk foto besar */}
            <div style={{ ...shimmerStyle, height: '500px' }}></div>

            {/* Shimmer untuk judul produk */}
            <div style={{ ...shimmerStyle, height: '16px', width: '80%' }}></div>

            {/* Shimmer untuk deskripsi produk */}
            <div style={{ ...shimmerStyle, height: '16px', width: '90%' }}></div>

            {/* Shimmer untuk label produk */}
            <div style={{ ...shimmerStyle, height: '16px', width: '30%' }}></div>

            {/* Shimmer untuk harga produk */}
            <div style={{ ...shimmerStyle, height: '16px', width: '40%' }}></div>

            {/* Shimmer untuk pemilik produk */}
            <div style={{ ...shimmerStyle, height: '16px', width: '70%' }}></div>

            {/* Shimmer untuk lokasi produk */}
            <div style={{ ...shimmerStyle, height: '16px', width: '60%' }}></div>

            {/* Shimmer untuk kontak penjual */}
            <div style={{ ...shimmerStyle, height: '36px', width: '40%' }}></div>
        </div>
    );
};

export default ShimmerDetailProduct;
