import React from 'react'
import styled from 'styled-components'
const Container=styled.div`
background-image: url("https://i.pinimg.com/originals/96/54/6f/96546f3395ae394f063d20c5c9580a9f.jpg");
    width: 100vw;
background-size: cover;
overflow-y: auto;
height: 99vh;
`
const Main=styled.h2`
align-items: center;
text-align:center;
justify-content: center;
font-size: 89px;
color: white;
padding-top: 60px;
text-shadow: 2px 5px 5px black;
transition: black 0.3s ease-in-out;



 

`
const Span=styled.h3`
letter-spacing:9px;
margin-bottom: -55px;
&:hover{
    color:black;
    text-shadow: 2px 5px 5px white;
}
`
const Slogan=styled.div`
font-size: 39px;
font-weight: 700;
color: white;
padding-left: 220px;
text-shadow: 4px 5px 17px black;
&:hover{
    color:black;
    text-shadow: 4px 5px 17px white;

}

`
const Home = () => {
  return (
    <>
   <Container>
    <Main>
        <Span>
<span>TOURS AND TRAVELS</span>
</Span>
    </Main>
<Slogan>
        <p>Embark on extra-ordinary adventures, where dreams meet reality!</p>
</Slogan>
   </Container>
   </>
  )
}

export default Home