import React, { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";

const List = styled.ul`
    list-style: none;
    padding: 0;
`;

const ListItem = styled.li`
  background-color: #cba3a3;
  margin: 10px 0;
  padding: 10px;
  border-radius: 5px;
`;

function DataFetching() {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        axios.get("https://jsonplaceholder.typicode.com/posts")
            .then((response) => {
                setData(response.data);
                setLoading(false);
            })
            .catch((error) => {
                setError(error);
                setLoading(false);
            });
    }, []);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error.message}</p>;

    return (
        <List>
            {data.map((post) => (
                <ListItem key={post.id}>{post.title}</ListItem>
            ))}
        </List>
    );
}
export default DataFetching;