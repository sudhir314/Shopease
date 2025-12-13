import React from "react";
import "./productCard.css";
import { Link } from "react-router-dom";

const ProductCard = ({ watches }) => {
  return (
    <div className="watches-container">
      {watches.length > 0 &&
        watches.map((el) => {
          return (
            <div className="product-card" key={el.id}>
              {/* Added textDecoration: none to remove blue link lines */}
              <Link to={`/product/${el.id}`} style={{ textDecoration: 'none' }}>
                <div className="card-img-box">
                  <img src={el.image} alt={el.title} />
                </div>
                
                <div className="card-details">
                  <p className="card-title">{el.title}</p>
                  
                  <div className="price-box">
                    <span className="current-price">Rs. {el.discountPrice}</span>
                    <span className="old-price">{el.salePrice}</span>
                  </div>

                  <h5 className="offer-text">BUY ANY 3 @ 2499 ONLY</h5>
                </div>
              </Link>
            </div>
          );
        })}
    </div>
  );
};

export default ProductCard;