import React from 'react';
import { useParams } from 'react-router-dom';

const DogDetails = ({ dogs }) => {
    const { name } = useParams();
    const dog = dogs.filter(d => d.name.toLowerCase() === name);
    let styles = {
        height: '200px',
        width: 'auto'
    }
    let divStyles = {
        textAlign: 'center',
        textDecoration: 'none'
    }
    return (
        <div style={divStyles}>
            <h1>{dog[0].name}</h1>
            <h2>{dog[0].age} years old</h2>
            <img src={dog[0].src} alt={`${dog[0].name} pic`} style={styles}></img>
            <ul style={{ listStyleType: 'none' }}>
                {dog[0].facts.map(fact => <li key={dog[0].facts.indexOf(fact)}>{fact}</li>)}
            </ul>
        </div>
    );
}

export default DogDetails;