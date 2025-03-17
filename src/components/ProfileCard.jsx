import PropTypes from 'prop-types';

function ProfileCard({name, age, num, isMember, hobbies, onHobbyClick}) {
    const sum=num+1;
    return (
        <div className='profile-card'>
            <p><b>Name:</b> {name}</p>
            <p><b>Age:</b> {age}</p>
            <p><b>Sum:</b> {sum}</p>
            <p><b>Status:</b> {isMember?"Active member":"Guest"}</p>
            <p><b>Hobbies:</b>{hobbies.map((hobby)=>{
                return <p onClick={()=>onHobbyClick(hobby)}>{hobby}</p>})}</p>
        </div>
    );
}

ProfileCard.propTypes={
    name:PropTypes.string,
    age:PropTypes.number,
    num:PropTypes.number,
    isMember:PropTypes.bool.isRequired,
    hobbies:PropTypes.array
}

export default ProfileCard;