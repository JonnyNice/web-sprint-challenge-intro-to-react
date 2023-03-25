import React, { useEffect, useState } from "react";

function Character({ character }) {

    return (
        <div>
            <div>
                <li>{character.name}</li>
                    <ul>Height: {character.height}</ul>
                    <ul></ul>
                </div>
        </div>
    )
}

export default Character;