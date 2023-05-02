import './styles/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Layout from './components/layouts/Layout';
import About from './pages/About';
import Contact from './pages/Contact';
import Main from './pages/Main';
import Works from './pages/Works';

function App() {
  return (
      <Layout>
        <div style={{ width: "100%", height: "70px" }}></div>
        <Main />
        <About />
        <Works />
        <Contact />
      </Layout>
  );
}

export default App;
