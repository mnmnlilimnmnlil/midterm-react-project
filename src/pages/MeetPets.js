import { useEffect, useRef } from 'react';
import PetCard from '../components/PetCard';
import './Style/MeetPets.css';

function MeetPets({ pets, setPets }) {
  const scrollRef = useRef();

  useEffect(() => {
    const handleWheel = (e) => {
      
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

  return (
    <div className="meet-pets">
      <h2 className="meet-title">입양을 기다리는 친구들을 만나보세요</h2>
      <div className="pet-list" ref={scrollRef}>
        {pets.map((pet) => (
          <PetCard key={pet.id} pet={pet} setPets={setPets} />
        ))}
      </div>
    </div>
  );
}

export default MeetPets;
