import "./bootstrap.min.css";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomeScreen from './Screen/HomeScreen';
import ProductScreen from './Screen/ProductScreen';
import RegisterScreen from "./Screen/RegisterScreen";
import {Container} from 'react-bootstrap';



function App() {
  return (
    <Router>
      <Header />
      <main>
        <Container>
        <Routes>
          <Route path='/' element={<HomeScreen />} exact/>
          <Route path='/products/:id' element={<ProductScreen />} />
          <Route path='/signup' element={<RegisterScreen />} />
        </Routes>
        </Container>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
