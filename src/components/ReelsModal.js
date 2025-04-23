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
            <img src={`${process.env.PUBLIC_URL}/${reel.profileImage}`} alt="user" />
            <span>{reel.nickname}</span>
            <button onClick={onClose}>X</button>
          </div>

          <div className="comments">
            <p> 댓글 구현 예정 </p>
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
