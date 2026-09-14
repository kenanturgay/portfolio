import React, { useState } from 'react';
import Navbar from './components/Navbar';

function MinimalApp() {
  const [count, setCount] = useState(0);
  const [activeSection, setActiveSection] = useState('hero');

  return (
    <div className="min-h-screen bg-white p-8">
      <Navbar activeSection={activeSection} setActiveSection={setActiveSection} />
      <h1 className="text-4xl font-bold text-center">Portfolio - Testing with Navbar</h1>
      <p className="text-center mt-4">If you see this, the basic React setup with Navbar is working.</p>
      <div className="text-center mt-8">
        <button 
          onClick={() => setCount(count + 1)}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Count: {count}
        </button>
      </div>
    </div>
  );
}

export default MinimalApp;