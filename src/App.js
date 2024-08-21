import React, { useEffect } from 'react';
import ReactGA from 'react-ga';
import { BrowserRouter as Router, Route, Switch, useLocation } from 'react-router-dom';
import './App.css';

const TRACKING_ID = 'G-T4CZMRKE9J'; // Google Analytics 측정 ID
ReactGA.initialize(TRACKING_ID);

const App = () => {
  return (
    <Router>
      <PageViewTracker />
      <div className="App">
        <header className="App-header">
          <h1>테크솔 랜딩페이지</h1>
          <p>최적의 솔루션을 제공합니다.</p>
          <div className="button-group">
            <button onClick={() => handleButtonClick('가')}>가</button>
            <button onClick={() => handleButtonClick('나')}>나</button>
            <button onClick={() => handleButtonClick('다')}>다</button>
            <button onClick={() => handleButtonClick('라')}>라</button>
            <button onClick={() => handleButtonClick('마')}>마</button>
          </div>
        </header>

        <footer className="App-footer">
          <p>&copy; 2024 TechSol. All rights reserved.</p>
        </footer>
      </div>
    </Router>
  );
};

const PageViewTracker = () => {
  const location = useLocation();

  useEffect(() => {
    ReactGA.pageview(location.pathname + location.search);
  }, [location]);

  return null;
};

const handleButtonClick = (buttonLabel) => {
  ReactGA.event({
    category: 'User Interaction',
    action: 'Button Click',
    label: buttonLabel,
  });
  alert(`클릭됨: ${buttonLabel}`);
};

export default App;
