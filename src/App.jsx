import { Routes, Route } from 'react-router-dom';
// import './App.css';


import Header from './component/Header';
import Footer from './component/Footer';


import Home,{About} from './component/Website';


function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        {/* <Route path="/courses" element={<Courses />} /> */}
        {/* <Route path="/contact" element={<Contact />} /> */}
        {/* <Route path="/blog" element={<Blog />} /> */}
        {/* <Route path="/register" element={<Register />} /> */}
        {/* <Route path="/gallery" element={<Gallery />} /> */}
        {/* <Route path="/login" element={<Login />} /> */}
      </Routes>
      <Footer />
    </>
  );
}

export default App;
