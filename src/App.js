import './App.css';
import { useEffect, useState } from 'react';

function App() {

  useEffect(() => {
    fetch('https://services.onetcenter.org/ws/online/bright_outlook/')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        console.log('Data received:', data);
      })
      .catch(error => {
        console.error('There was a problem with the fetch operation:', error);
      });

  })


  return (

    <div className="App" >

    </div>
  );
}

export default App;


