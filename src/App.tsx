import { Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Jobs from './pages/Jobs';
import Contact from './pages/Contact';

function App() {
  return (
    <p>Site down pending payments</p>
    // <Routes>
    //   <Route path="/" element={<Layout />}>
    //     <Route index element={<Home />} />
    //     <Route path="about" element={<About />} />
    //     <Route path="services" element={<Services />} />
    //     <Route path="jobs" element={<Jobs />} />
    //     <Route path="contact" element={<Contact />} />
    //   </Route>
    // </Routes>
  );
}

export default App;