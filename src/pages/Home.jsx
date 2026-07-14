import { useState } from 'react';
import About from '../components/About';
import Skills from '../components/Skills';

function Home() {
  const [showTip, setShowTip] = useState(false);
  const mySkills = ['JavaScript', 'React', 'HTML', 'CSS'];

  return (
    <div>
      <About />
      <Skills skillList={mySkills} />

      <button onClick={() => setShowTip(!showTip)}>
        {showTip ? 'Hide' : 'Click Me!'}
      </button>
      {showTip && <p>btw I am in 5th semester :)</p>}
    </div>
  );
}

export default Home;