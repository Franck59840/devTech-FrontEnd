import React from 'react';
import './App.css';
import './components/header/index.css';
import './components/argonauts/index.css';
import './components/footer/index.css';
import Header from '../src/components/header';
import Argonauts from './components/argonauts';
import Footer from './components/footer';

function App() {
  return (
    <div>
      <Header />
      <Argonauts />
      <Footer />
    </div>
  );
}

export default App;
