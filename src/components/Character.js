import React, { useEffect, useState } from "react";

function Character() {

    const [characters, setCharacters] = useState([]);

    useEffect(()=>{
        fetch('https://swapi.dev/api/people/')
        .then((r)=>r.json())
        .then(setCharacters);
        console.log(characters)
    }, []);

    return (
        <div>
            {characters.map((character)=>(
                <div>
                <li>{character.name}</li>
                <ul>{character.height}</ul>
                </div>
            ))}
        </div>
    )
}

export default Character;