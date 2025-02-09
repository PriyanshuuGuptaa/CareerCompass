import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function ProfileSummary() {
    const { code } = useParams();
    const [taskData, setTaskData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchTaskData = async () => {
            try {
                const res = await axios.get(`${process.env.REACT_APP_API_URL}/api/profilesummary/${code}`);
                if (res.status === 200) {
                    setTaskData(res.data);
                    console.log(res.data)
                }
            } catch (err) {
                setError(err.message);
                console.log(err)
            } finally {
                setLoading(false);
            }
        };

        fetchTaskData();
    }, [code]);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error}</p>;

    return (
        <div>
            <div>
                <ul >
                    {taskData.map((elem) => (
                        <li key={elem.id}>{elem.task}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default ProfileSummary;
