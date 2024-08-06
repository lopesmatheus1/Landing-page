import styled from "styled-components";
import Img1 from '../../assets/images/4qwpet030521.jpg'
import Img2 from '../../assets/images/9t57uv030437.jpg'
import Img3 from '../../assets/images/ngc72y0300442.jpg'
import breakpoints from "../../styles/breakpoints";

const StyledDiv = styled.div`
    display: flex;
    flex-direction: row;
   align-items: center;
   justify-content: center;
   gap: 20px;
   margin-top: 30px;
   flex-wrap: wrap;
   
`
const Card = styled.div`

    display: flex;
    flex-direction: column;
    min-width: 250px;
    max-width: 350px;
    img{
        border-radius:20px 20px 0 0 ;
        width: 350px;
        height: 200px;
    }
    @media ${breakpoints.usm} {
        width: 280px;
        height: auto;

        img{
            width: 280px;
            height: auto;
        }
    }
`
const Text = styled.div`
    text-align:center;
    display: flex;
    justify-content: space-around;
    flex-direction: column;
    background-color: #FFFF;
    border-radius: 0 0 20px 20px;
    height: 250px;
    
    p{
        font-size: 18px;
    }
`

const Data = [
    {
        nome: "Nome Cliente",
        texto: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In at sapien ut metus suscipit aliquam. Maecenas eu ligula ut enim pharetra sodales. Mauris ultricies eros in vulputate auctor',
        img: Img1,
    },

    {
        nome: "Nome Cliente",
        texto: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In at sapien ut metus suscipit aliquam. Maecenas eu ligula ut enim pharetra sodales. Mauris ultricies eros in vulputate auctor',
        img: Img2
    },

    {
        nome: "Nome Cliente",
        texto: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In at sapien ut metus suscipit aliquam. Maecenas eu ligula ut enim pharetra sodales. Mauris ultricies eros in vulputate auctor',
        img: Img3
    }
];
export {Text,Card,StyledDiv, Data}