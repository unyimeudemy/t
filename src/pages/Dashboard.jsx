import {  Box, Button,  Flex, Input, Text, useDisclosure } from '@chakra-ui/react'
import Logo from './Logo';
import CopyTextComponent from './CopyTextComponent';
import { useNavigate } from 'react-router-dom';
import React, { useState } from 'react';
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


const copyBox = {
    display:"flex",
    alignItems:"center",
    justifyContent: "center"
}

const shortUrl = {
    height: "40px",
    width: "350px",          
    backgroundColor: "white", 
    border:"2px solid #3795BD",
    // mt:"17px",
    display:"flex",
    alignItems: "center",
    justifyContent: "center"
    
  };

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

  const errorBox ={
    display:"flex",
    alignItems:"center",
    justifyContent: "center",
    bg: "red",
    height:"30px",
    width:'505px',
    borderRadius:"8px"

  }


export default function Dashboard() {
    const [url, setUrl] = useState(""); 
    const [shortenedUrl, setShortenedUrl] = useState(""); 
    const navigate = useNavigate();
    const { isOpen, onOpen, onClose } = useDisclosure();
    const cancelRef = React.useRef();

    const handleInput = (e) => {
        setUrl(e.target.value); 
    };

    const handleShortenUrl = async () => {
        try {
            const response = await Axios.post('/generate', { url: url });
            console.log(response);
        
            setShortenedUrl(response.data.url); 
        } catch (error) {
            console.error("Error generating short URL:", error);
        }
    };

  return (
      <>
        <Flex sx={container}>
        <Logo />
        <Box sx={wrapper}>
        <Text color={"#3795BD"} fontSize={"30px"} fontFamily={'monospace'}>Shorten a long URL</Text>
            <Box sx={errorBox}>

            </Box>
            <Input 
                value={url}
                onChange={handleInput}
                sx={inputStyle}
                placeholder="Enter your long URL here"
            />
            <Box sx={copyBox}>
                <Box sx={shortUrl}>
                    <Text fontWeight="900"  fontSize='20px' color={"#3795BD"}>
                        {shortenedUrl || "www.short-url.com"}
                    </Text>
                </Box>
                <CopyTextComponent text={shortenedUrl}/>
            </Box>
            <Button
             onClick={() => {
                handleShortenUrl();
                onOpen();
             }}
              sx={button}
               > Shorten URL </Button>
            <Text onClick={() => {navigate("/add-spam-url")}}
             as='u' sx={link}
             >Click here to add spam url</Text>
        </Box>
    </Flex>
    </>
    
  )
}
