import { border, Box, Button, Center, color, Container, Flex, Input, Text } from '@chakra-ui/react'
import Logo from './Logo';
import CopyTextComponent from './CopyTextComponent';

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
    mt:"60px",
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
    mt:"17px",
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

export default function Dashboard() {
  return (
    <Container sx={container}>
        <Logo />
        <Box sx={wrapper}>
            <Input sx={inputStyle}/>
            <Box sx={copyBox}>
                <Box sx={shortUrl}>
                    <Text fontWeight="900"  fontSize='30px' color={"#bfbfbf"}>www.short-url.com</Text>
                </Box>
                <CopyTextComponent/>
            </Box>
            <Button sx={button}>Shorten URL</Button>
            <Text as='u' sx={link}>Click here to add spam url</Text>
        </Box>
    </Container>
  )
}
