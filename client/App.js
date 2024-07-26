import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const [photos, setPhotos] = useState([]);
  const [favitem, setFavItem] = useState([]);
  useEffect(() => {
    fetch('https://www.themealdb.com/api/json/v1/1/categories.php')
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data);
        setPhotos(data.categories);
      });
  }, []);
  const addToFvt = (e) => {
    console.log(e.target.value);
    setFavItem(prev => [...prev, e.target.value]);
    localStorage.setItem("favcat", favitem);
  }
  var userfav = localStorage.getItem("favcat");
  console.log(userfav)
  return (

    <div className="App" >
      <p>user</p>
      {photos.map((cat) => {
        console.log(cat)
        return (
          <div >
            <p>{cat.strCategory}</p>
            <button onClick={addToFvt} value={cat.strCategory}>Add to fav</button>
          </div>)
      })}
      <p>user fav item</p>
      {
        userfav
      }

    </div>
  );
}

export default App;


