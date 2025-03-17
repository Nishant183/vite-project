import { Link, Outlet, useSearchParams } from "react-router-dom";

function About() {
    const [serachParams, setSearchParams]=useSearchParams();
    const topic=serachParams.get("topic")||"about";
    console.log("useSearchParam: ", topic);

    const urlParams=new URLSearchParams(window.location.search);
    const topicFormUrl=urlParams.get("topic");
    console.log("urlSearchParams: ", topicFormUrl);
    
    const handleTopic=(newTopic)=>{
        setSearchParams({topic:newTopic})
    };
    return (
        <div>
            <h1>About</h1>
            <Link to="team">Team</Link>
            <Outlet/>
            <button onClick={()=>handleTopic("mission")}>Mission</button>
            <button onClick={()=>handleTopic("vision")}>Vision</button>
            <p>Current Topic: {topic}</p>
        </div>
    );
}
export default About;