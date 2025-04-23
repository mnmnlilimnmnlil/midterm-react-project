import './Style/Home.css'; 

function Home() {
  return (
    <div className="home">
      {/* 헤더보다 위로 올라갈 발바닥 이미지 */}
      <img src="images/paw-topright.png" alt="발바닥" className="top-paw" />

      {/* 파란색 강아지 gif */}
      <img src="images/dog01.gif" alt="강아지" className="main-dog" />

      {/* 메인 텍스트와 버튼 */}
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
