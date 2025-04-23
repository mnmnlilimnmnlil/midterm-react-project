import './PetCard.css';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function PetCard({ pet, setPets }) {
  const [liked, setLiked] = useState(pet.liked);
  const navigate = useNavigate();

  const goToDetail = () => {
    navigate(`/pets/${pet.id}`);
  };

  const toggleLike = (e) => {
    e.stopPropagation(); // 카드 클릭 이벤트 막기
    const newLiked = !liked;
    setLiked(newLiked);
    setPets((prevPets) =>
      prevPets.map((p) =>
        p.id === pet.id ? { ...p, liked: newLiked } : p
      )
    );
  };

  return (
    <div className="pet-card" onClick={goToDetail}>
      <div className="image-wrapper">
        <img src={pet.image} alt={pet.name} />

        {/* 하트 아이콘 */}
        <div
          className={`heart-icon ${liked ? 'active' : ''}`}
          onClick={toggleLike}
        >
          {liked ? '❤️' : '🤍'}
        </div>

        {/* 정보 더보기 버튼 */}
        <div className="overlay-button">
          <button
            onClick={(e) => {
              e.stopPropagation();
              goToDetail();
            }}
          >
            정보 더보기
          </button>
        </div>
      </div>

      <div className="pet-info">
        <p>{pet.name}</p>
        <p>{pet.age}</p>
      </div>
    </div>
  );
}

export default PetCard;
