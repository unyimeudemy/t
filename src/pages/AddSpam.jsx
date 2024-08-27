import { border, Box, Button, Center, color, Container, Flex, Input, Spinner, Text } from '@chakra-ui/react'
import Logo from './Logo';
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
        // width: "85%",
        width:"380px",
      },

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
    "@media only screen and (max-width: 625px)": {
        width: "90%",
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

  const feedBackStyle ={
    display:"flex",
    alignItems:"center",
    justifyContent: "center",
    bg: "#e6ffe6",
    height:"30px",
    width:'505px',
    borderRadius:"8px",
    border: "1px solid green",
    color: "green",
    fontWeight:"600",
    fontSize: "15px",
    "@media only screen and (max-width: 625px)": {
        width: "90%",
      },

  }

  const spinner = {
    color: "#3795BD",
    size:"md",
    _hover: {
        color: "#3795BD"
    }
  }


export default function AddSpam() {
    const [spamUrl, setSpamUrl] = useState("");
    const [feedBack, setFeedBack] = useState(false);
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const handleInput = (e) => {
        setSpamUrl(e.target.value);
    }

    const handleClick = async () => {
        setLoading(true);
        setFeedBack(false);
        try{
            const res = await Axios.post("/add_spam_url", {url: spamUrl});
            if(res.data.url != null){
                setFeedBack(true);
            }
        }catch(error){
            console.log(error);
        }finally{
            setLoading(false);
        }
    }


  return (
    <Container sx={container}>
    <Logo />
    <Box sx={wrapper}>
    <Text color={"#3795BD"} fontSize={"30px"} fontFamily={'monospace'}>Add a spam URL</Text>
    {feedBack && <Box sx={feedBackStyle}>
                Spam URL was added successfully
            </Box>}
        <Input
         onChange={handleInput}
         sx={inputStyle}
         placeholder="Enter a spam URL here"
         />
        <Button
         sx={button}
         onClick={handleClick}
        >
            {loading ? <Spinner size="md" sx={spinner}/> : "Add spam URL"}
        </Button>
        <Text onClick={() => {navigate("/")}}
         as='u' sx={link}
         >Click here to shorten a long URL</Text>
    </Box>
</Container>
  )
}
