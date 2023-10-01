import "./App.css";
import Header from './components/Header'
import Footer from './components/Footer'
import Main from './page/Main'
import Login from './page/Login'
import GoodsList from './page/GoodsList'
import PrivateRoute from './routes/PrivateRoute'
import { Route, Routes } from "react-router-dom";
import { useState } from "react";
// json-server --watch json파일 --port 포트번호설정

function App() {

  const [authenticate,setAuthenticate] = useState(false)
  const [goods, setGoods] = useState([])
  // 로그인상태, 상품리스트를 관리하는 state를 정의하시오.
  // 로그인상태 : authenticate
  // 상품리스트 : goods
  console.log(authenticate)

  return (
    <div className="container">
      {/* Header컴포넌트가 출력되도록 구현하시오. */}
      <Header authenticate={authenticate} setAuthenticate={setAuthenticate}/>

      {/* 
          메인페이지, 로그인페이지, 메뉴리스트, 메뉴상세페이지로 이동되도록
          Route를 구성하시오.
        */}
      <Routes>
        <Route path="/" element={<Main/>}/>
        <Route path='/login' element={<Login setAuthenticate={setAuthenticate}/>}/>
        <Route path="/menu/list" element={<GoodsList goods={goods} setGoods={setGoods}/>}/>
        <Route path="/menu/:id" element={<PrivateRoute authenticate={authenticate} />}/>
      </Routes>
      {/* Footer컴포넌트가 출력되도록 구현하시오. */}
      <Footer/>
    </div>
  );
}

export default App;
