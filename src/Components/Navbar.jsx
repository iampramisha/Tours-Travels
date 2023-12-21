import {React ,useState, useEffect}from 'react'
import {Link} from 'react-router-dom';
import HomeIcon from '@mui/icons-material/Home';
import InfoIcon from '@mui/icons-material/Info';
import WorkIcon from '@mui/icons-material/Work';
import styled from 'styled-components'
import './Navbar.css'
import AccessTimeIcon from '@mui/icons-material/AccessTime';

import RecentActorsIcon from '@mui/icons-material/RecentActors';

const Container=styled.div`
top:0;
position: fixed;
display: flex;
justify-content: flex-end;
align-items: center;
height: 80px;
background-color: rgba(128, 128, 128, 0.5); 
z-index: 1000;
width: 100vw;


`
const Icons=styled.div`
display: flex;
flex-direction: row;
margin-right: 20px;
gap: 18px;
&:hover{
  transform: scale(1.01);
}

`
const IconItems=styled.div`
display: flex;

gap: 0px;
`
const TimeDisplay=styled.div`
margin-right: 870px;
display: flex;
align-items: center;
color: black;
font-size: 20px;
font-weight: 700;
transition: transform 0.8s ease-in-out;

 
&:hover{
    color: #006400;
    transform: scale(1.3);
     }
`
const Navbar = () => {
    const [currentTime, setCurrentTime] = useState(new Date());

    useEffect(() => {
      const timerID = setInterval(() => {
        setCurrentTime(new Date());
      }, 1000);
  
      return () => clearInterval(timerID);
    }, []);
  
  return (
   <Container>
       <TimeDisplay>
        <AccessTimeIcon/>
        {currentTime.toLocaleTimeString()}</TimeDisplay>
    <Icons>
        <IconItems>
<HomeIcon />
<Link to='/' className="spann">Home</Link>
</IconItems>
<IconItems>
<InfoIcon></InfoIcon>
<Link to='/about' className="spann">About</Link>
</IconItems>
<IconItems>
<WorkIcon></WorkIcon>
<Link to='/service' className="spann">Service</Link>
</IconItems>
<IconItems>
<RecentActorsIcon></RecentActorsIcon>
<Link to='/contact' className='spann'>Contact</Link>
</IconItems>

<Link to='/signup' className='spann'>Sign-up</Link>

    </Icons>
   </Container>
  )
}

export default Navbar