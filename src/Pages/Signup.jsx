import React from 'react'
import styled from 'styled-components'
const Container=styled.div`
margin-top: 80px;
display: flex;
justify-content: center;
align-items: center;
text-align: center;
padding-top: 40px;
background-color: #eee;
height: 82vh;
`
const FormContainer=styled.div`

`
const Form=styled.form`
height: 40vh;
width: 20vw;
background-color: white;
justify-content: center;
align-items: center;
text-align: center;
padding-top: 20px;

`
const Input=styled.div`
font-size: 33px;
`
const Button=styled.div`
margin-top: -10px;
`
const Top=styled.h1`
font-weight: bold;
color: blue;
font-size: 30px;
`
const Signup = () => {
  const handleSubmit=(e)=>{
    e.preventDefault();
  }
  return (
   <>
   <Container>
    <FormContainer>
      <Form>
       <Top>
        SIGN UP
       </Top>
        <Input>
        <input type="email" placeholder="Enter email"   style={{height: '20px', width:'200px'}}></input>
        </Input>
        <Input>
        <input type="password" placeholder='Set your password' style={{height: '20px', width:'200px'}}  ></input>
        </Input>
        <Input>
        <input type='password' placeholder='Confirm your password'style={{height: '20px', width:'200px'}} ></input>
        </Input>
        <Button>
          <button onClick={handleSubmit} style={{backgroundColor: 'teal', width: '80px', height:'28px' , marginTop:'20px'}}>
            Sign up
          </button>
        </Button>
      </Form>
    </FormContainer>
   </Container>

   </>
  )
}

export default Signup