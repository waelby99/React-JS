import React from "react";
import styled from "styled-components";

const Button = styled.button`
    background-color: blue;
    color: white;
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    cursor: pointer;

    &:hover {
        background-color: darkblue;
    }
`;

function StyledButton() {
    return <Button>Click Me</Button>;
}
export default StyledButton;