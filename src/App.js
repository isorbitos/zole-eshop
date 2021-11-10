import Layout from './components/Layout/Layout';
import {Routes, Route, Navigate} from "react-router-dom"
import MainPage from './pages/MainPage'
import ProductsPage from './pages/ProductsPage';
import AboutPage from './pages/AboutPage';
import ContacPage from './pages/ContacPage';
import ProductDetail from './pages/ProductDetail';

function App() {
  return (
   <Layout> 
     <Routes>
       <Route path="/" element={<Navigate  to="/welcome" />} />
       <Route path="/welcome" element={<MainPage />} />
       <Route path="/products" element={<ProductsPage />} />
       <Route path="/products/:productId" element={<ProductDetail/>} />
       <Route path="/about" element={<AboutPage />}/>
       <Route path="/contacts" element={<ContacPage />} />


     </Routes>
   </Layout>
  );
}

export default App;
