import './App.scss';
import { BrowserRouter, Route, Routes } from 'react-router-dom'; // 導入 React Router DOM
import { HomePage, LoginPage, SignUpPage, TodoPage } from 'pages'; // 導入 Router 要連接的頁面
function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route path="login" element={<LoginPage />} />
          <Route path="signup" element={<SignUpPage />} />
          <Route path="todo" element={<TodoPage />} />
          <Route path="*" element={<HomePage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;

// path 屬性對應網址
// element 屬性對應元件名稱
// *號為設定好的path之外，其他輸入之網址都會回到這個頁面(HomePage)
