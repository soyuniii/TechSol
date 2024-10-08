import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>테크솔 랜딩페이지</h1>
        <p>당신의 비즈니스를 위한 최적의 솔루션을 제공합니다.</p>
        <div className="button-group">
          <button onClick={() => alert('클릭됨')}>가</button>
          <button onClick={() => alert('클릭됨')}>나</button>
          <button onClick={() => alert('클릭됨')}>다</button>
          <button onClick={() => alert('클릭됨')}>라</button>
          <button onClick={() => alert('클릭됨')}>마</button>
        </div>
      </header>
      <footer className="App-footer">
        <p>&copy; 2024 테크솔. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
