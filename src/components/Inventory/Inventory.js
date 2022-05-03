import React from 'react';
import { useParams } from 'react-router-dom';
import './Inventory.css';
const Inventory = () => {
    const {inventoryId}= useParams();
    return (
        <div>
            <h2>{inventoryId}</h2>
            <h3>hidafp;afh</h3>
        </div>
    );
};

export default Inventory;