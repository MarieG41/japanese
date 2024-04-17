import './App.css';
import { Route, Routes } from "react-router-dom";
import Home from './pages/Home';
import Layout from './components/Layout';
import DishPages from './pages/DishPages';
import About from './pages/About';
import Cart from './pages/Cart';
import NotFound from './pages/NotFound';

function App() {
  return (
    <div className="App">
        <Routes>
          <Route element={<Layout />}>
            <Route index element={<Home />} />
            <Route path='/a-propos' element={<About />} />
            <Route path='/plat/:slug' element={<DishPages />} />
            <Route path='/panier' element={<Cart />} />
            <Route path='*' element={<NotFound />} />
          </Route>
        </Routes>
    </div>
  );
}

export default App;
