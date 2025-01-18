import React, { useState } from "react";
import MessageBox from "./MessageBox";


const RequestButtonPage = () => {
    const [responseMessage, setResponseMessage] = useState("");
    const [error, setError] = useState(null);
    const fetchRequest = async (urlAddress) => {
        setError(null);
        setResponseMessage("");
        try{
            const response = await fetch( urlAddress ); // "https://catfact.ninja/facts" или .../factls
            if (!response.ok) {
                throw new Error(response.status);
            }
            const data = await response.json();
            const randomElem = Math.floor(Math.random() * data.data.length);
            setResponseMessage(data.data[  randomElem  ].fact); //выдача случайного факта 
        } catch (err) {
            setError(`Ошибка: ${err.message}`);
        }
    };

    return (
        <div>
             <button onClick={() => fetchRequest("https://catfact.ninja/facts")}  style={{marginRight: '20px', fontSize: '18px'}}>Правильный запрос к API</button> 
             <button onClick={() => fetchRequest("https://catfact.ninja/factls")} style={{marginLeft:  '20px', fontSize: '18px'}}>Неправильный запрос к API</button> 
             <MessageBox err={error} data = {responseMessage}/> 
        </div>
    );
};

export default RequestButtonPage;
