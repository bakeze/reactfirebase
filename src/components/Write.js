import React, { useState } from 'react';
import app from "../firebaseConfig";
import { getDatabase, ref, set, push } from "firebase/database";

function Write() {
    const [inputValue1, setInputValue1] = useState("");
    const [inputValue2, setInputValue2] = useState("");

    const saveData = async () => {
        if (!inputValue1 || !inputValue2) {
            alert("Veuillez remplir tous les champs.");
            return;
        }

        const db = getDatabase(app);
        const newDocRef = push(ref(db, "nature/fruits"));

        try {
            await set(newDocRef, {
                fruitName: inputValue1,
                fruitDefinition: inputValue2
            });
            alert("Données enregistrées avec succès !");
        } catch (error) {
            alert(`Erreur : ${error.message}`);
        }
    };

    return (   
        <div>
            <input 
                type="text"  
                value={inputValue1} 
                onChange={(e) => setInputValue1(e.target.value)} 
                placeholder="Nom du fruit"
            />

            <input 
                type="text"  
                value={inputValue2} 
                onChange={(e) => setInputValue2(e.target.value)} 
                placeholder="Définition du fruit"
            />

            <button onClick={saveData}>Enregistrer les données</button>
        </div>
    );
}

export default Write;
