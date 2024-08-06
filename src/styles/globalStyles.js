import { createGlobalStyle } from "styled-components";

const MyGlobalStyles = createGlobalStyle`

*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "Poppins";
}

header{
    padding: 20px 16%;
    position: relative;
    width: 100%;
    top: 0;
    left: 0;
    z-index: 10000;
    
}

section{
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
}

`


export default MyGlobalStyles;