import './ReelsModal.css';

function ReelsModal({ reel, onClose }) {
  return (
    <div className="reels-modal-overlay">
      <div className="reels-modal">
        <div className="video-section">
          <iframe
            src={`https://www.youtube.com/embed/${reel.videoId}?autoplay=1`}
            title="YouTube video"
            frameBorder="0"
            allow="autoplay; encrypted-media"
            allowFullScreen
          />
        </div>

        <div className="info-section">
          <div className="user-header">
            <img src={reel.profileImage} alt="user" />
            <span>{reel.nickname}</span>
            <button onClick={onClose}>X</button>
          </div>

          <div className="comments">
            <p> 댓글 구현 예정 </p>
            {/* 여기에 댓글 리스트 */}
          </div>

          <div className="comment-input">
            <input type="text" placeholder="댓글 달기..." />
            <button>😊</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ReelsModal;
