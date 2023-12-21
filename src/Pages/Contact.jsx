import React, { useState } from 'react'
import CallIcon from '@mui/icons-material/Call';
import MailIcon from '@mui/icons-material/Mail';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import styled from 'styled-components';
const Containner=styled.div`
margin-top: 80px;
background-color: gray;
display: flex;
justify-content: center;
padding: 80px;
text-align: center;
height: 100vh;
width: 100vw;
gap: -90px;
`
const Contacct=styled.div`
display: flex;
flex-direction: column;
`
const Icon=styled.div`
margin-right: -590px;
display: flex;
font-size: 18px;
margin-top: 20px;
flex-direction: row;
justify-content: center;
align-items: center;

`
const Input=styled.div`
display: flex;
flex-direction: column;
gap: 8px;
font-size: 30px;
`
const Message=styled.div`
display: flex;
margin-left:-450px;
margin-top:-400px;
justify-content: center;
flex-direction: column;
align-items: center;
`
const Messaage=styled.h1`
margin-top: 60px;
`

const Contact = () => {
  const[feedback,setFeedback]=useState('')
  const[showThanks,setshowThanks]=useState(null)
 const handleChange=(e)=>{

  setFeedback(e.target.value)
 }
 const handleSubmit=()=>{
  if(feedback.trim() !== ''){
  setshowThanks(true);
  } else {
    setshowThanks(false);
  }
 }
  return (
   <>
   <Containner>
    <Contacct>
<Icon>
  <CallIcon/>
  <p>067543667528889299190121</p>
</Icon>
<Icon>
  <MailIcon/>
  <p>travelandtours@gmail.com</p>
</Icon>
<Icon>
  <LocationOnIcon/>
  <p>Thamel Lainchaur,Kathmandu</p>
</Icon>
    </Contacct>
    <Message>
      <Input>
      <p>PLEASE SEND ANY TYPE OF FEEDBACK!</p>
      <input type='text' placeholder='Any feedback?' value={feedback}  style={{
                fontSize: '16px',
                padding: '8px',
                borderRadius: '4px',
                border: '1px solid #ccc',
                outline: 'none',
                // Add more styles as needed
              }}  onChange={handleChange}  ></input>

      <button onClick={handleSubmit}  style={{height: '40px'}}     >Submit</button>
   
      </Input>
      {showThanks === true && (
            <Messaage>Thank you for feedback, will check!</Messaage>
          )}
          {showThanks === false && (
            <Messaage>Please write something before submitting.</Messaage>
          )}
 </Message>
   </Containner>
   </>
  )
}

export default Contact