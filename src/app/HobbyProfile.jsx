import ProfileCard from '.././components/ProfileCard';

function HobbyProfile() {
    const handleHobbyClick=(hobby)=>{alert('You clicked on: '+hobby)};
    const alice={name:"Alice", age:"28", num:"2", isMember:true};
    //destructuring
    const {name, age, num, isMember}=alice;
    //spread operator
    const johnProfile={
      name:"John",
      age:28,
      num:2,
      hobbies:['Swiming','Hiking'],
      onHobbyClick:handleHobbyClick
    }
    return (
      //props
      <div className='props'>
        <ProfileCard name={name}
                     age={28}
                     num="2"
                     isMember={true} 
                     hobbies={['Reading','Cooking']}
                     onHobbyClick={handleHobbyClick}/>
        <ProfileCard {...johnProfile}/>
      </div>
    );
}
export default HobbyProfile;