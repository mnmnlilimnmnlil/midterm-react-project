import { useNavigate } from 'react-router-dom';
import './Style/Share.css';

function Share({ products }) {
  const navigate = useNavigate();

  return (
    <div className="share-page">
      <h2 className="share-title">
        구매 금액의 <strong>33.3%</strong>는 보호소 아이들에게 기부됩니다
      </h2>
      <div className="product-grid">
        {products.map((item) => (
          <div
            className="product-card"
            key={item.id}
            onClick={() => navigate(`/product/${item.id}`)}
          >
            <div className="product-img">
              <img src={`${process.env.PUBLIC_URL}/${item.image}`} alt={item.name} />
            </div>
            <div className="product-info">
              <span className="product-category">{item.category}</span>
              <p className="product-name">{item.name}</p>
              <p className="product-price">{item.price.toLocaleString()} 원</p>
              <p className="product-donation">{item.donation}</p>
              <p className="product-rating">⭐ 별점 ({item.rating})</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Share;