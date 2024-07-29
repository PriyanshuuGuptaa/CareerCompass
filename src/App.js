import './App.css';
import { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const API_URL = "http://localhost:8000";
  const [occupationData, setOccupationData] = useState([]);
  const [showDropdown, setShowDropdown] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [filterOccupations, setFilterOccupations] = useState([]);
  useEffect(() => {
    fetchOccupationData();
  }, []);
  const fetchOccupationData = async () => {
    try {
      const response = await axios.get(`${API_URL}/api/occupations`);
      setOccupationData(response.data);
      setFilterOccupations(response.data);
    } catch (error) {
      console.error('Error fetching occupation data:', error);
    }
  };
  const searchOccupationKeyword = (e) => {
    var value = e.target.value;
    setInputValue(value);
    if (value.length > 0) {
      const filteredOccupations = occupationData.filter((occ) => {
        return occ.title.toLowerCase().includes(value.toLowerCase());
      });
      setFilterOccupations(filteredOccupations);
    }
    else (setShowDropdown(false))
  }

  return (

    <div className="App">
      <label>Enter the keyword</label>

      <input type='text' id="occupation_keyword" onFocus={() => setShowDropdown(true)} onChange={searchOccupationKeyword} value={inputValue} />
      {showDropdown && (<ul>
        {filterOccupations.map((occ) => {
          return (
            <li onClick={() => { setInputValue(occ.title) }}>{occ.title}</li>
          )
        })}
      </ul>)}
    </div>
  );
}

export default App;
