import { useState } from 'react';
import { reels } from '../data/reels';
import ReelsModal from '../components/ReelsModal';
import './Style/Stories.css';

function Stories() {
  const [selected, setSelected] = useState(null);

  return (
    <div className="stories-page">
      {reels.map((reel) => (
        <div
          className="reel-card"
          key={reel.id}
          onClick={() => setSelected(reel)}
        >
          <img
            src={`https://img.youtube.com/vi/${reel.videoId}/maxresdefault.jpg`}
            onError={(e) =>
              (e.target.src = `https://img.youtube.com/vi/${reel.videoId}/hqdefault.jpg`)
            }
            alt={reel.title}
          />

          <div className="reel-info">
            <p className="tag">{reel.tag}</p>
            <p className="title">{reel.title}</p>
            <div className="user">
              <img src={`${process.env.PUBLIC_URL}/${reel.profileImage}`} alt="user" />
              <span>{reel.nickname}</span>
            </div>
          </div>
        </div>
      ))}

      {selected && (
        <ReelsModal reel={selected} onClose={() => setSelected(null)} />
      )}
    </div>
  );
}

export default Stories;