import { border, Box, Button, Center, color, Container, Flex, Input, Text } from '@chakra-ui/react'
import Logo from './Logo';
import CopyTextComponent from './CopyTextComponent';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import Axios from '../util/axios';

const container = {
    width: "100vw",
    height: "100vh",
    display: "flex",
    flexDirection: "column",
    alignItems:"center",
    justifyContent:"center"
  };

  const inputStyle = {
    variant: "filled",
    placeholder: "Long URL",
    size: "lg",
    height: "40px",
    width: "500px",          
    backgroundColor: "gray.100", 
    borderRadius: "5px",
    border: "2px solid #3795BD", 
    fontSize:"20px",
    mt:"10px",
    _focus: {
        border: "2px solid #3795BD",  
      },   
  };

  const wrapper ={
    display:"flex",
    alignItems:'center',
    flexDirection:"column",
    width:"600px",
    height:"400px",
    gap: "15px",
    bg:"white",
    border: "2px solid #3795BD",
    borderRadius: "10px", 

  }





  const button = {
    height: "53px",
    width: "500px",
    backgroundColor: "#3795BD",
    color: "white",
    border: "none", 
    fontSize: "20px",
    fontWeight:"900",
    _hover: {
        color: "#3795BD",
      backgroundColor: "white", 
      border: "2px solid #3795BD",
      cursor: "pointer", 
    },
  }

  const link ={
    color:"#3795BD",
    fontSize: "20px",
    fontWeight:"900",
    _hover : {
        cursor: "pointer",
         
    }
  }


export default function AddSpam() {
    const [spamUrl, setSpamUrl] = useState("");
    const navigate = useNavigate();

    const handleInput = (e) => {
        setSpamUrl(e.target.value);
    }

    const handleClick = async () => {
        try{
            const res = await Axios.post("/add_spam_url", {url: spamUrl});
            console.log(res);
        }catch(error){
            console.log(error);
        }
    }


  return (
    <Container sx={container}>
    <Logo />
    <Box sx={wrapper}>
    <Text color={"#3795BD"} fontSize={"30px"} fontFamily={'monospace'}>Add a spam URL</Text>
        <Input
         onChange={handleInput}
         sx={inputStyle}
         placeholder="Enter a spam URL here"
         />
        <Button
         sx={button}
         onClick={handleClick}
        >Add spam URL</Button>
        <Text onClick={() => {navigate("/")}}
         as='u' sx={link}
         >Click here to shorten a long URL</Text>
    </Box>
</Container>
  )
}
