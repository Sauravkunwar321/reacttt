import React, { useEffect, useState } from "react";

const User = ({name}) => {
    const[count] = useState(0);

    useEffect(() =>{

    }, []);




    return (
        <div className="user-card">
            <h1>Count = {count}</h1>
            <h2>{name}</h2>
            <h3>Location: kathmandu</h3>

        </div>
    )
}

export default User;