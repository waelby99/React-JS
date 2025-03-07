function User({name,age}){
    return (
        <div style={{border:'1px solid grey',padding:'10px',margin:'10px'}}>
            <p>Name : {name}</p>
            <p>Age : {age}</p>
        </div>
    );
}
export default User;