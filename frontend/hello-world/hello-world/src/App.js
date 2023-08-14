// frontend/src/App.js

import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
    const [greeting, setGreeting] = useState('');

    useEffect(() => {
        // Fetch greeting from the server
        axios.get('http://localhost:5001/api/greeting')
            .then(response => {
                setGreeting(response.data.message);
                response.header['Access-Control-Allow-Origin'] = '*';
                response.headerheader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
            })
            .catch(error => {
                console.error('Error fetching greeting:', error);
            });
    }, []);

    return (
        <div className="App">
            <h1>{greeting}</h1>
        </div>
    );
}

export default App;
