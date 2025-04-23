import { useEffect, useRef } from 'react';
import PetCard from '../components/PetCard';
import './Style/MeetPets.css'; // 스타일 공유

function Adopted({ pets, setPets }) {
  const scrollRef = useRef();

  useEffect(() => {
    const handleWheel = (e) => {
      if (!scrollRef.current) return;
      if (e.deltaY === 0) return;
      e.preventDefault();
      scrollRef.current.scrollLeft += e.deltaY;
    };

    const current = scrollRef.current;
    if (current) {
      current.addEventListener('wheel', handleWheel, { passive: false });
    }

    return () => {
      if (current) {
        current.removeEventListener('wheel', handleWheel);
      }
    };
  }, []);

  const likedPets = pets.filter((pet) => pet.liked);

  return (
    <div className="meet-pets">
      <h2 className="meet-title">입양을 하고싶은 아이가 있으신가요?</h2>
      {likedPets.length === 0 ? (
        <p style={{ textAlign: 'center', fontSize: '1.2rem', marginTop: '60px' }}>
          아직 담아둔 친구가 없어요 😢
        </p>
      ) : (
        <div className="pet-list" ref={scrollRef}>
          {likedPets.map((pet) => (
            <PetCard key={pet.id} pet={pet} setPets={setPets} />
          ))}
        </div>
      )}
    </div>
  );
}

export default Adopted;
