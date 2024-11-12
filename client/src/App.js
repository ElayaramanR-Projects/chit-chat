import React, { useEffect, useState } from "react";

const App = () => {
    const [message, setMessage] = useState("");

    useEffect(() => {
        fetch("/api/").then(response => response.text()).then(data => setMessage(data));
    }, []);

    return (
        <div>
            <h2>Hello World!</h2>
            <p>Message from Express: {message}</p>
        </div>
    );
};

export default App;