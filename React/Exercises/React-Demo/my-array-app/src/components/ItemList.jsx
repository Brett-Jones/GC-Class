
import React from "react";

const ItemList = ({items, setItems}) => {
    const addItem = () => {
        items.push('')
        setItems([...items, 'Pumpkin'])
    }


    return (
        <div>
            <ul>
                {items.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
        </div>
    )
}





export default ItemList;
