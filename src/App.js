import './App.css';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


function App() {
  const API_URL = "http://localhost:8000";
  const [occupationData, setOccupationData] = useState([]);
  const [showDropdown, setShowDropdown] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [filterOccupations, setFilterOccupations] = useState([]);
  const navigate = useNavigate();

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

  const handleOccupation = async (code) => {
    navigate(`/profile/summary/${code}`);
    setShowDropdown(false);
  }
  return (

    <div className="App">
      <label>Enter the keyword</label>

      <input type='text' id="occupation_keyword" onFocus={() => setShowDropdown(true)} onChange={searchOccupationKeyword} value={inputValue} />
      {showDropdown && (<ul>
        {filterOccupations.map((occ) => {
          return (
            <li key={occ.onetsoc_code} onClick={() => { setInputValue(occ.title); handleOccupation(occ.onetsoc_code) }}>{occ.title}</li>
          )
        })}
      </ul>)}
    </div>
  );
}

export default App;
