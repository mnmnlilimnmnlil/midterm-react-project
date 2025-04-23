import { useState } from 'react';
import { news } from '../data/news';
import NewsModal from '../components/NewsModal';
import './Style/News.css';

function News() {
  const [selected, setSelected] = useState(null);

  return (
    <div className="news-page">
      {news.map((item) => (
        <div className="news-card" key={item.id} onClick={() => setSelected(item)}>
          <img src={`${process.env.PUBLIC_URL}/images/${item.image}`} alt={item.title} />
          <div className="news-text">
            <h4>{item.title}</h4>
            <p className="summary">{item.summary}</p>
            <div className="meta">
              <span>{item.date}</span>
              <span>{item.comments} 댓글</span>
            </div>
          </div>
        </div>
      ))}

      {selected && <NewsModal item={selected} onClose={() => setSelected(null)} />}
    </div>
  );
}

export default News;
