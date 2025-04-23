import { useState } from 'react';
import { reels } from '../data/reels';
import ReelsModal from '../components/ReelsModal';
import './Style/Stories.css'; // 너가 사용하는 스타일 경로에 맞게 수정

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
          {/* ✅ 고화질 썸네일 + 오류시 fallback 처리 */}
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
              <img src={reel.profileImage} alt="user" />
              <span>{reel.nickname}</span>
            </div>
          </div>
        </div>
      ))}

      {/* ✅ 클릭 시 모달 표시 */}
      {selected && (
        <ReelsModal reel={selected} onClose={() => setSelected(null)} />
      )}
    </div>
  );
}

export default Stories;
