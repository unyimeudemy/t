import { useLocation } from "react-router-dom";
import Axios from "../util/axios";
import { useEffect } from "react";


const TargetPage = () => {

    const location = useLocation();
    let currentRoute = location.pathname;
    currentRoute = "http://localhost:5173" + currentRoute;

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await Axios.post("/get-url", { url: currentRoute } );
                window.location.href = res.data.url;
            } catch (error) {
                console.error("***Error:", error);
            }
        };

        fetchData();
    }, [currentRoute]);
 
    return <div></div>
}
export default TargetPage;