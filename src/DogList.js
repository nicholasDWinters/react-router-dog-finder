import React from 'react';
import { NavLink } from 'react-router-dom';

const DogList = ({ dogs }) => {

    return (
        <ul style={{ listStyleType: 'none' }}>
            {dogs.map(dog =>
                <li key={dog.name}>
                    <NavLink exact to={`/dogs/${dog.name.toLowerCase()}`}>{dog.name}</NavLink>
                </li>
            )}
        </ul>
    )
}

export default DogList;