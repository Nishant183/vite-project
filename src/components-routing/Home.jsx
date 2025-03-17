import { useNavigate } from "react-router-dom";

function Home() {
    const navigate=useNavigate();
    const handleLogin=()=>{
        navigate("/dashboard");
    };
    return (
        <div>
            <h1>Home</h1>
            <button onClick={handleLogin}>Login</button>
        </div>
    );
}
export default Home;