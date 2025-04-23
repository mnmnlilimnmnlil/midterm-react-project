import { useParams } from 'react-router-dom';
import './DetailStyle/PetDetail.css'; 

function PetDetail({ pets, setPets }) {
  const { id } = useParams();
  const pet = pets.find((p) => p.id === Number(id));

  if (!pet) return <div className="pet-detail">해당 강아지를 찾을 수 없어요!</div>;

  const toggleLike = () => {
    const updated = pets.map((p) =>
      p.id === pet.id ? { ...p, liked: !p.liked } : p
    );
    setPets(updated);
  };

  return (
    <div className="pet-detail">
      <div className="pet-container">
        <div className="pet-img-box">
          <img src={`${process.env.PUBLIC_URL}/${pet.image}`} alt={pet.name} />
          <div className="like-icon" onClick={toggleLike}>
            {pet.liked ? '❤️' : '🤍'}
          </div>
        </div>

        <div className="pet-info-box">
          <h2 className="pet-name">{pet.name}</h2>
          <p className="pet-age">{pet.age} | {pet.sex}</p>
          <p className="pet-desc">{pet.desc}</p>

          <div className="pet-meta">
            <p><b>몸무게</b> {pet.weight}</p>
            <p><b>상태</b> {pet.status}</p>
            <p><b>공고번호</b> {pet.postNum}</p>
            <p><b>공고기간</b> {pet.period}</p>
            <p><b>발견장소</b> {pet.center}</p>
            <p><b>보호소</b> {pet.shelter} / {pet.contact}</p>
            <p><b>보호주소</b> {pet.address}</p>
          </div>

          <div className="pet-buttons">
            <button className="btn dark">입양 하러 가기</button>
            <button className="btn coral">입양 절차 안내</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PetDetail;