import React from 'react'
import DirectionsBusIcon from '@mui/icons-material/DirectionsBus';
import FlightLandIcon from '@mui/icons-material/FlightLand';
import HolidayVillageIcon from '@mui/icons-material/HolidayVillage';
import styled from 'styled-components';
import './Service.css'

const Container=styled.div`
margin-top: 80px;
background-image: url("https://www.dlf.pt/dfpng/middlepng/238-2387181_watercolor-hand-painted-leaf-material-transparent-background-flower.png");
height: 110vh;
width: 100vw;
text-decoration: none;
`

const Icons=styled.div`
display: flex;
flex-direction: row;
gap: -5px;

justify-content: center;
padding: -10px;
`
const LargeIcons=styled.div`
font-size: 120px;
`
const Services=styled.div`


`
const Span=styled.div`
margin-top: -28px;
font-family: joining;
font-size: 90px;

justify-content: center;
align-items: center;
text-align: center;
letter-spacing: 8px;

`
const List=styled.li`
list-style: none;
justify-content: center;
align-items: center;
text-align: center;
text-decoration: none;
`
const Item=styled.h1`
font-size: 34px;
font-weight: 600;
color: inherit;
text-decoration: none;
list-style: none;
`

const Service = () => {
  return (
   <>
   <Container>
   <Icons>
    <LargeIcons>
    <DirectionsBusIcon style={{ fontSize: '120px'}}/>
    </LargeIcons>
    <LargeIcons>
    <FlightLandIcon  style={{ fontSize: '120px'}} />
    </LargeIcons>
    <LargeIcons>
    <HolidayVillageIcon  style={{ fontSize: '120px'}} />
    </LargeIcons>
   </Icons>
   <Services>
    <Span>
    <span>OUR SERVICES</span>
    </Span>
    <List>
      <Item>
      <a href="https://holidays.buddhaair.com/">1. Diverse Tour Packages</a>
        </Item>
      <Item>
        <a href='https://www.trekksoft.com/en/blog/personalized-tours'>2.Customization Options</a>
      </Item>
      <Item>
        <a href='https://www.booking.com/index.en.html?aid=393655&label=msn-nuz8LR7EK0S9OmkTG7BBSg-80058214382142:tikwd-16659121511:loc-128:neo:mtp:lp142622:dec:qsaccommodation%20tours%20nepal&utm_campaign=English%20EN%20ROW-CAUS&utm_medium=cpc&utm_source=bing&utm_term=nuz8LR7EK0S9OmkTG7BBSg&msclkid=8a82178b2c651fd91fc6720aa5bf0ab7'>3.Exceptional Accommodations</a>
      </Item>
      <Item>
        <a href='https://www.lonelyplanet.com/'>4.Expert Guides</a>
      </Item>
      <Item>
        <a href="https://www.holidify.com/collections/best-places-in-the-world">5.Diverse Activities and Excursions</a>
      </Item>
      <Item>
        <a href=''>6. Comfortable Transportation</a>
      </Item>

    </List>
   </Services>
   </Container>
   </>
  )
}

export default Service