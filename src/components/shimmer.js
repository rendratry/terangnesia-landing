import React from "react";

const ShimmerCard = () => {
    return (
        <div className="col-md-4 mb-4">
            <div className="card shimmer-card">
                <div className="shimmer-image"></div>
                <div className="card-body ps-0">
                    <div className="shimmer-badge"></div>
                    <div className="shimmer-heading"></div>
                    <div className="shimmer-text"></div>
                    <div className="shimmer-text"></div>
                </div>
            </div>
            <style>
                {`
          /* Gaya untuk shimmer card */
          .shimmer-card {
            background-color: #fff;
            border: 1px solid #e0e0e0;
            border-radius: 8px;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
            padding: 16px;
            height: 100%;
          }

          /* Gaya untuk shimmer image */
.shimmer-image {
  width: 100%;
  height: 200px; /* Sesuaikan dengan ukuran gambar */
  background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%);
  background-size: 1000px 100%;
  animation: shimmer 1.5s infinite linear;
}

/* Gaya untuk shimmer badge */
.shimmer-badge {
  width: 80px;
  height: 20px;
  background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%);
  background-size: 1000px 100%;
  animation: shimmer 1.5s infinite linear;
}

/* Gaya untuk shimmer heading */
.shimmer-heading {
  width: 60%;
  height: 20px;
  margin-top: 8px;
  background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%);
  background-size: 1000px 100%;
  animation: shimmer 1.5s infinite linear;
}

/* Gaya untuk shimmer text */
.shimmer-text {
  width: 100%;
  height: 12px;
  margin-top: 4px;
  background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%);
  background-size: 1000px 100%;
  animation: shimmer 1.5s infinite linear;
}

          /* Animasi shimmer */
          @keyframes shimmer {
            0% {
              background-position: -1000px 0;
            }
            100% {
              background-position: 1000px 0;
            }
          }
        `}
            </style>
        </div>
    );
};

export default ShimmerCard;
