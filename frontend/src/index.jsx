import React, { useState, useEffect } from 'react';
import List from './List.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';

const Home = ({Endpoint}) => {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [users, setUsers] = useState(false);

    useEffect(() => {
        fetch(Endpoint)
            .then(res => res.json())
            .then(
                (data) => {
                    setIsLoaded(true);
                    setUsers(data);
                },
                (error) => {
                    setIsLoaded(true);
                    setError(error);
                }
            )
    }, [])
    if (error) {
        return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
        return <div>Loading...</div>
    } else {
        return (
            <List item={users} />
        );
    }
}
export default Home;