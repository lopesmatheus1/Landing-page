import React from 'react'
import {Text,Card,StyledDiv, Data} from './style'



function ReviewSlider() {
  return (
    
    <section style={{minHeight:'70vh', backgroundColor:'	#eeeee878'}}>
     
     <h2 style={{fontWeight:'300'}}>O QUE FALAM NOSSOS CLIENTES</h2>
    
        <StyledDiv>
            {Data.map((item) =>(
                <Card>
                    <img src={item.img} alt="" />
                    <Text>
                    <p>{item.nome}</p>
                    <p>{item.texto}</p>
                                </Text>
                </Card>
            ))}

            

        </StyledDiv>
        
        
    

    </section>
  )
}

export default ReviewSlider
