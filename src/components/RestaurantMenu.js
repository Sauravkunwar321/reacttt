import { useEffect } from "react";

const RestaurantMenu = () => {

    useEffect( () => {

    }, []);



    return (
        <div className="menu">
            <h1>Name of the restaurant</h1>
            <h2>
                Menu
            </h2>
            <ul>
                <li>Burgers</li>
                <li>Pizza</li>
                <li>Coke</li>
            </ul>

        </div>
    );
};

export default RestaurantMenu;