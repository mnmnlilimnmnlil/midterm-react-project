import './Style/Home.css'; 

function Home() {
  return (
    <div className="home">
      <img src={`${process.env.PUBLIC_URL}/images/paw-topright.png`} alt="발바닥" className="top-paw" />
      <img src={`${process.env.PUBLIC_URL}/images/dog01.gif`} alt="강아지" className="main-dog" />

      <div className="home-content">
        <h1 className="main-title">
          <span className="bold">잇다</span>에서 아이들을 만나보세요
        </h1>
        <button className="main-btn">바로 만나보기</button>
      </div>
    </div>
  );
}

export default Home;
