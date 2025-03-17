import { useLocation } from "react-router-dom";

const CurrentLocation = () => {
    const location=useLocation();
    return (
        <p>Current Path: {location.pathname}</p>
    );
}
export default CurrentLocation;