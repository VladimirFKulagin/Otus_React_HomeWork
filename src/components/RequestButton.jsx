import React, { useState } from "react";
import MessageBox from "./MessageBox";
import '../App.css'
import ErrorMessageBox from "./ErrorMessageBox";


const RequestButtonPage = () => {

    const correctUrl = "https://catfact.ninja/facts";
    const incorrectUrl = "https://catfact.ninja/factls";

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
             <button onClick={() => fetchRequest(correctUrl)}  >Правильный запрос к API</button> 
             <button onClick={() => fetchRequest(incorrectUrl)} >Неправильный запрос к API</button> 
             <MessageBox data = {responseMessage}/> 
             <ErrorMessageBox err={error}/> 
        </div>
    );
};

export default RequestButtonPage;
