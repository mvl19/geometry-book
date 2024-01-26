import Layout from './components/Layout';
import { Routes, Route } from 'react-router-dom';
import StlGallery from './pages/StlGallery';
import About from './pages/About';

function App() {

  return (
    <Layout>
      <Routes>
        <Route path="/" element={<StlGallery />} />
        <Route path="about" element={<About />} />
      </Routes>
    </Layout>
  )
}

export default App
