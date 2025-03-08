import {useEffect, useState} from "react";

function DataFetcher(){
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then((response)=> response.json())
            .then((data)=>{
                setData(data);
                setLoading(false);

            })
            .catch((error)=>{
                setError(error);
                setLoading(false)
            });
    }, []);
    if (loading) return <p> Loading ...</p>;
    if (error) return <p> Error: {error.message}</p>;
    return (
        <ul>
            {data.map((user)=>(
                <>
                    <li key={user?.id}>{user.name} - {user.email}</li>
                </>
            ))}

        </ul>
    )
}
export default DataFetcher;