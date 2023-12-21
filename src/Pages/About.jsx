import React from 'react'
import styled from 'styled-components'
const Container=styled.div`
height: 170vh;
margin-top: 80px;
padding-top: 150px;
width: 100vw;
display: flex;
background-image: url("https://i.pinimg.com/474x/6e/68/56/6e6856103b0ea0dadf8efe96677b8a3e--pink-damask-wallpaper-bedroom-wallpaper.jpg");
 position: relative;
flex-direction: column;
justify-content: center;
background-size: cover;
overflow: hidden;
background-repeat: no-repeat;




`
const First=styled.div`
display: flex;
flex-direction: column;
justify-content: center;
margin-left: 130px;
`
const Span=styled.div`
margin-left: -50px;
font-size: 30px;
font-weight: bold;
letter-spacing: 1.8px;
color: black;
background-color: white;
height: 100px;
width: 220px;
border-radius: 45%;
text-align: center;
align-items: center;
justify-content: center;
padding-top: 39px;
box-shadow: 1px 2px 4px 4px black;
transition: transform 0.5s ease;
&:hover{
  transform: scale(1.1);
  background-color:#D3D3D3;
  color: #006400;
}
`
const Para=styled.div`
font-familly: georgia;
font-size: 20px;
font-weight: 500;

`



const About = () => {
  return (
   <>
   <Container>
    <First>
      <Span>
      <span>About us</span>
      </Span>
      <Para>
      <p>
Welcome to Wanderlust Adventures, where travel dreams come to life! <br></br> Our journey began in 2022 with a group of passionate explorers who shared a love for discovering the world's wonders. <br></br> Today, we have grown into a dedicated community committed to curating unique and immersive travel experiences.</p>
 
</Para>
   </First>
    <First>
    <Span>
      <span>Our Values</span>
      </Span>
     
      <Para>
      <p>
        
At Wanderlust Adventures, we live by our core values:<br></br> Adventure, Exploration, and Cultural Appreciation. <br></br> These principles guide every aspect of our operations,<br></br> ensuring that your journey is not only exciting <br></br>but also aligned with our commitment to sustainability, cultural respect, and safety.
      </p>
      </Para>
    </First>
    
    <First>
    <Span>
      <span>Our Team</span>
      </Span>
      <Para>
      <p>
Meet our team of passionate travel experts with a collective 2 years of combined experience.<br></br> Despite our relative youth, we bring fresh perspectives and boundless enthusiasm to crafting unforgettable journeys.</p>
  
</Para>
  </First>
    <First>
    <Span>
      <span>Destinations</span>
      </Span>
      <Para>
      <p>
Explore the world with us! <br></br> Whether you're seeking cultural immersion, thrilling adventures, or luxurious escapes, Wanderlust Adventures has the perfect journey for you.</p>
  
</Para>
  </First>
    <First>
    <Span>
      <span>Types of Tours</span>
      </Span>
      <Para>
<p>
Choose from our curated selection of tours, including: <br></br>

Adventure Tours <br></br>
Cultural Experiences <br></br>
Luxury Getaways<br></br>
Specialized Themes (e.g., Food Tours, Photography Expeditions)<br></br>
</p>
</Para>
    </First>
   </Container>
   
   </>
  )
}

export default About