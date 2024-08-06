import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import background from "../Assets/background.jpeg";
import "./LandingPage.css";
import { FaPhoneVolume } from "react-icons/fa6";


function LandingPage() {
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
            const response = await axios.get(`${process.env.REACT_APP_API_URL}/api/occupations`);
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
        <div className='landing-page-container relative w-screen'>
            <div className=' navbar p-0 bg-white flex z-10  absolute top-12 shadow-lg w-fit gap-10 left-0 right-0 mx-auto text-black'>
                <div className='py-10 px-24'>logo</div>
                <div className='nav flex'>
                    <div>Home</div>
                    <div>Career</div>
                    <div>Interest</div>
                    <div>Field</div>
                    <div>Community</div>
                </div>
                <div className=' bg-custom-yellow py-10 px-20 text-white text-lg '><span className='flex justify-center items-center gap-2'><FaPhoneVolume />+91 9982839012</span></div>
            </div>

            <div className="carousel w-full absolute ">
                <div id="slide1" className="carousel-item relative w-full my-0">
                    <img
                        src={background}
                        className="w-full" />
                    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                        <a href="#slide4" className="btn btn-circle">❮</a>
                        <a href="#slide2" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full">
                    <img
                        src={background}
                        className="w-full" />
                    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                        <a href="#slide1" className="btn btn-circle">❮</a>
                        <a href="#slide3" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full">
                    <img
                        src={background}
                        className="w-full" />
                    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                        <a href="#slide2" className="btn btn-circle">❮</a>
                        <a href="#slide4" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide4" className="carousel-item relative w-full">
                    <img
                        src={background}
                        className="w-full" />
                    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                        <a href="#slide3" className="btn btn-circle">❮</a>
                        <a href="#slide1" className="btn btn-circle">❯</a>
                    </div>
                </div>
            </div>
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
    )
}

export default LandingPage