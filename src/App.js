import { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import LandingPage from './pages/LandingPage';


function App() {
  return (
    <div>
      <LandingPage />
    </div>
  );
}

export default App;
