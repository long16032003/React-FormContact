import logo from './logo.svg';
import './App.css';
import Container from './Container';
import Contact from './component/contact/Contact';
import NotFound from './NotFound';
import Slider from './component/silder/Slider';

import { BrowserRouter, HashRouter, Route, Routes } from "react-router-dom";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Container />}/>
          <Route path="contact" element={<Contact />} />
          <Route element={<NotFound />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
