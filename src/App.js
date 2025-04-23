import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import Header from './components/Header';

import Home from './pages/Home';
import MeetPets from './pages/MeetPets';
import Share from './pages/Share';
import PetDetail from './pages/Detail/PetDetail';
import Adopted from './pages/Adopted';
import ProductDetail from './pages/Detail/ProductDetail';
import Stories from './pages/Stories';
import News from './pages/News';

import { products as productData } from './data/products';

function App() {
  const names = ['두부', '콩이', '꼬미', '보리', '탄이', '미미', '댕댕이', '루비', '복실이', '백설이'];
  const ages = ['1살', '2살', '3살', '1살', '4살', '5살', '2살', '3살', '6살', '1살'];
  const images = [
    '/images/dog1.jpg',
    '/images/dog2.jpg',
    '/images/dog3.jpg',
    '/images/dog4.jpg',
    '/images/dog5.jpg',
    '/images/dog6.jpg',
    '/images/dog7.jpg',
    '/images/dog8.jpg',
    '/images/dog9.jpg',
    '/images/dog10.jpg',
  ];

  const [pets, setPets] = useState(
    names.map((name, i) => ({
      id: i,
      name,
      age: ages[i],
      liked: false,
      image: images[i],
      sex: i % 2 === 0 ? '여아' : '남아',
      weight: `${2 + i * 0.5}kg`,
      desc: `${name}는 아주 귀여운 아이예요.`,
      status: '보호중',
      postNum: `2025-00${i + 1}`,
      period: '2025.04.01 ~ 2025.04.15',
      center: `${name} 공원 근처`,
      shelter: `${name} 보호소`,
      contact: '02-123-4567',
      address: `서울시 어딘가 ${i + 1}`,
    }))
  );

  const [products] = useState(productData);

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pets" element={<MeetPets pets={pets} setPets={setPets} />} />
        <Route path="/pets/:id" element={<PetDetail pets={pets} setPets={setPets} />} />
        <Route path="/adopted" element={<Adopted pets={pets} setPets={setPets} />} />
        <Route path="/share" element={<Share products={products} />} />
        <Route path="/product/:id" element={<ProductDetail products={products} />} />
        <Route path="/stories" element={<Stories />} />
        <Route path="/news" element={<News />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
