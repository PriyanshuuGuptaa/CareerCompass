import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function KeyWordSearch() {
    const { code } = useParams();
    const [taskData, setTaskData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchTaskData = async () => {
            try {
                const res = await axios.get(`${process.env.REACT_APP_API_URL}/api/task_statement/${code}`);
                if (res.status === 200) {
                    setTaskData(res.data);
                }
            } catch (err) {
                setError(err.message);
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
            <div className='bg-black'>
                <ul>
                    {taskData.map((elem) => (
                        <li key={elem.id}>{elem.task}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default KeyWordSearch;
