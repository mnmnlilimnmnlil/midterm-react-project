import { Link } from 'react-router-dom';
import './Header.css';

function Header() {
  return (
    <header className="header">
      <div className="header-inner">
        <div className="logo-area">
          <Link to="/">
            <img src={`${process.env.PUBLIC_URL}/images/logo.png`} alt="잇다 로고" className="logo-img" />
          </Link>
        </div>
        <nav className="menu">
          <Link to="/pets">아이들 만나기</Link>
          <Link to="/share">함께 나누기</Link>
          <Link to="/stories">우리 이야기</Link>
          <Link to="/adopted">담아둔 친구들</Link>
          <Link to="/news">입양 소식</Link>
        </nav>
      </div>
    </header>
  );
}

export default Header;