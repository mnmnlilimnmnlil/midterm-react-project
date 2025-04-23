import { useParams } from 'react-router-dom';
import './DetailStyle/ProductDetail.css';

function ProductDetail({ products }) {
  const { id } = useParams();
  const product = products.find((p) => p.id === parseInt(id));

  if (!product) return <div>존재하지 않는 상품입니다.</div>;

  return (
    <div className="product-detail-page">
      <div className="left">
        <img src={product.image} alt={product.name} />
      </div>

      <div className="right">
        {/* 메타정보 영역 */}
        <div className="product-meta">
          <span className="badge-category">{product.category}</span>
          <span className="badge-best"># 인기상품</span>
        </div>

        <h2>{product.name}</h2>
        <p className="product-price-range">{product.price.toLocaleString()} 원</p>
        <p className="product-rating">⭐ {product.rating}</p>

        {/* 간단한 상품 설명 */}
        <p className="product-desc">
          {product.name}는 사랑스러운 반려동물을 위한 따뜻한 {product.category}입니다. <br />
          보호소 친구들에게도 같은 따뜻함을 전할 수 있어요.
        </p>

        {/* 배송 및 기부 안내 */}
        <div className="shipping">
          <p><strong>📦 배송안내:</strong> 평일 기준 1~3일 이내 도착 / 무료배송</p>
          <p><strong>💝 기부혜택:</strong> 구매 시 보호소 아이들에게 {product.donation}</p>
        </div>

        {/* 옵션 선택 */}
        <div className="options">
          <div>
            <span>동물 종류</span>
            <button>강아지</button>
            <button>고양이</button>
          </div>
          <div>
            <span>맛 선택</span>
            <button>매콤 맛</button>
            <button>칠리 맛</button>
            <button>달콤 맛</button>
          </div>
          <div>
            <span>용량</span>
            <select>
              <option>142g (기본)</option>
              <option>200g</option>
              <option>300g</option>
            </select>
          </div>
        </div>

        {/* 구매 액션 */}
        <div className="actions">
          <button className="buy-now">구매 하러 가기</button>
          <button className="add-to-cart">장바구니 담기</button>
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;
