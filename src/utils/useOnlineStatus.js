import { useEffect, useState } from "react";

const useOnlineStatus = () => {

    //check if omline,and return online status

    const[onlineStatus, setOnlineStatus] = useState(navigator.onLine);

    useEffect(() => {


        window.addEventListener("offline", () => {
            setOnlineStatus(false);

        });

        window.addEventListener("online", () => {
            setOnlineStatus(true);

        });

        

    }, []);

    //This is a boolean value
    return onlineStatus;

}

export default useOnlineStatus;