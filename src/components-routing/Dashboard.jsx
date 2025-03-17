import { useNavigate } from "react-router-dom";

function Dashboard() {
    const navigate=useNavigate();
    const handleLogout=()=>{
        navigate(-1);
    };
    return (
        <div>
            <h1>Dashboard</h1>
            <button onClick={handleLogout}>Logout</button>
        </div>
    );
}
export default Dashboard;