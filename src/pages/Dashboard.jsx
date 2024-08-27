import {  background, Box, Button,  Flex, Input, Spinner, Text } from '@chakra-ui/react'
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
    justifyContent:"center",
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

      "@media only screen and (max-width: 625px)": {
        width: "90%",
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
    "@media only screen and (max-width: 625px)": {
        width:"400px",
        height:"400px",
      },

  }


const copyBox = {
    display:"flex",
    alignItems:"center",
    justifyContent: "center",
    "@media only screen and (max-width: 625px)": {
        width: "90%"
          },
}

const shortUrl = {
    height: "40px",
    width: "350px",          
    backgroundColor: "white", 
    border:"2px solid #3795BD",
    display:"flex",
    alignItems: "center",
    justifyContent: "center",


    
  };

  const button = {
    height: "53px",
    width: "500px",
    backgroundColor: "#3795BD",
    color: "white",
    border: "none", 
    fontSize: "20px",
    fontWeight:"900",
    "@media only screen and (max-width: 625px)": {
        width:"90%"
      },
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
    bg: "#ffe6e6",
    height:"30px",
    width:'505px',
    borderRadius:"8px",
    border: "1px solid red",
    color: "red",
    fontWeight:"600",
    fontSize: "15px",
    "@media only screen and (max-width: 625px)": {
        width: "90%",
      },
  }

  const spinner = {
    color:'#3795BD',
     size:'md',
     _hover: {
        color: "white"
     }
  }


export default function Dashboard() {
    const [url, setUrl] = useState(""); 
    const [shortenedUrl, setShortenedUrl] = useState(""); 
    const [errMsg, setErrMsg] = useState(false);
    const [loading, isLoading] = useState(false);
    const navigate = useNavigate();
    

    const handleInput = (e) => {
        setUrl(e.target.value); 
    };

    const handleShortenUrl = async () => {
        isLoading(true);
        setErrMsg(false);
        try {
            const response = await Axios.post('/generate', { url: url });
            const urlResult = response.data.url;
            if(!urlResult.startsWith("http")){
                setErrMsg(true);
            }
            setShortenedUrl(response.data.url); 
        } catch (error) {
            console.error("Error generating short URL:", error);
        }finally{
            isLoading(false);
        }
    };

  return (
      <>
        <Flex sx={container}>
        <Logo />
        <Box sx={wrapper}>
        <Text color={"#3795BD"} fontSize={"30px"} fontFamily={'monospace'}>Shorten a long URL</Text>
            {errMsg && <Box sx={errorBox}>
                URL is a spam
            </Box>}
            <Input 
                value={url}
                onChange={handleInput}
                sx={inputStyle}
                placeholder="Enter your long URL here"
            />
            <Box sx={copyBox}>
                <Box sx={shortUrl}>
                    <Text fontWeight="900"  fontSize='15px' color={"#3795BD"}>
                        {shortenedUrl || "www.short-url.com"}
                    </Text>
                </Box>
                <CopyTextComponent text={shortenedUrl}/>
            </Box>
            <Button
             onClick={() => {
                handleShortenUrl();
             }}
              sx={button}
               > 
               {loading ? <Spinner sx={spinner} /> : "Shorten URL"} 
               </Button>
            <Text onClick={() => {navigate("/add-spam-url")}}
             as='u' sx={link}
             >Click here to add spam url</Text>
        </Box>
    </Flex>
    </>
    
  )
}
