import './App.css';
import Header from './components/Header';
import About from './components/About';
import Skills from './components/Skills';
import Footer from './components/Footer';

function App() {
  const mySkills = ['JavaScript', 'React', 'HTML', 'CSS'];

  return (
    <div className="app-container">
      <Header name="Priyanshi Dalwadi" />
      <About />
      <Skills skillList={mySkills} />
      <Footer />
    </div>
  );
}

export default App;