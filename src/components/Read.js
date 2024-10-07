import React, { useState } from 'react';
import app from "../firebaseConfig";
import { getDatabase, ref, set, get } from "firebase/database";



function Read() {

    let [fruitArray, setFruitArray] = useState([]); 
    const fetchData = async () => {
        const db = getDatabase(app);
        const dbRef = ref(db, "nature/fruits"); 
        const snapshot = await get(dbRef);
        if (snapshot.exists()) {
            setFruitArray(Object.values(snapshot.val()));
        } else{
            alert("error");
        }
    }

    return (
        <div>
            <button onClick={fetchData}>Données Afficher </button>
            <ul>
                {fruitArray.map((fruit, index) => (
                    <li key={index}>
                        <h1>{fruit.fruitName }  :  </h1><h2> {fruit.fruitDefinition}</h2> 
                    </li>

                ))}
            </ul>
        </div>
    )
}

export default Read 
