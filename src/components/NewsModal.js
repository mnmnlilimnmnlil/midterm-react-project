import './NewsModal.css';

function NewsModal({ item, onClose }) {
  if (!item) return null;

  return (
    <div className="news-modal-overlay">
      <div className="news-modal-layout">
        {/* 왼쪽 영역 */}
        <div className="news-left">
          <img src={item.image} alt={item.title} className="news-image" />
          <div className="news-body">
            <h2>{item.title}</h2>
            <p className="date">{item.date} · {item.comments}개의 댓글</p>
            <div className="news-content">{item.content}</div>
          </div>
        </div>

        {/* 오른쪽 댓글 영역 */}
        <div className="news-comments">
          <button className="close-btn" onClick={onClose}>×</button>
          <h4>💬 댓글</h4>
          <div className="comments-list">
            <p> 댓글 구현 예정 </p>
          </div>
          <div className="comment-input">
            <input type="text" placeholder="댓글을 입력하세요" />
            <button>등록</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NewsModal;
