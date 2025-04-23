// src/data/products.js

const categories = ['간식', '장난감', '목줄', '사료', '하우스', '패션', '건강관리', '위생용품'];
const productNames = [
  '하트 간식팩', '오리 육포', '컬러 리드줄', '포근한 방석', '멍멍이 후드티',
  '치킨맛 사료', '덴탈껌 세트', '쫀득볼 장난감', '반짝이 리본 목걸이', '코코 향기 스프레이',
  '비프볼 사료', '강아지 물병', '여름용 쿨매트', '후리스 강아지 조끼', '노즈워크 매트',
  '소리나는 공', '로프 토이', '목줄 하네스 세트', '반려견 전용 샴푸', '배변 훈련 패드',
];

const productImages = {
  '하트 간식팩': '/images/products/heart-snack.jpg',
  '오리 육포': '/images/products/duck-jerky.jpg',
  '컬러 리드줄': '/images/products/lead-color.jpg',
  '포근한 방석': '/images/products/soft-mat.jpg',
  '멍멍이 후드티': '/images/products/hoodie.jpg',
  '치킨맛 사료': '/images/products/chicken-food.jpg',
  '덴탈껌 세트': '/images/products/dental-gum.png',
  '쫀득볼 장난감': '/images/products/chewy-ball.jpg',
  '반짝이 리본 목걸이': '/images/products/ribbon.jpg',
  '코코 향기 스프레이': '/images/products/coco-spray.jpg',
  '비프볼 사료': '/images/products/beef-balls.jpg',
  '강아지 물병': '/images/products/dog-bottle.jpg',
  '여름용 쿨매트': '/images/products/cool-mat.jpg',
  '후리스 강아지 조끼': '/images/products/fleece-vest.jpg',
  '노즈워크 매트': '/images/products/nosework-mat.jpeg',
  '소리나는 공': '/images/products/squeaky-ball.jpg',
  '로프 토이': '/images/products/rope-toy.jpeg',
  '목줄 하네스 세트': '/images/products/harness-set.jpg',
  '반려견 전용 샴푸': '/images/products/dog-shampoo.jpeg',
  '배변 훈련 패드': '/images/products/potty-pad.jpg',
};

export const products = Array.from({ length: 20 }, (_, i) => {
  const name = productNames[i % productNames.length];
  const price = Math.floor(Math.random() * 91 + 10) * 500;
  const donationAmount = Math.floor(price * 0.333);
  const category = categories[Math.floor(Math.random() * categories.length)];

  return {
    id: i,
    name,
    category,
    price,
    donation: `이 상품을 구매하면 약 ${donationAmount.toLocaleString()}원이 기부됩니다`,
    rating: Math.floor(Math.random() * 2) + 4,
    image: productImages[name] || '/images/sample-product.png',
  };
});
