import { Box, Text } from "@chakra-ui/react";

  const Id = {
    height: "100px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: "5px",
    color:"#1A5319",
    flexDirection:"column",
  };

  const wrapper = {
    display:"flex",
    alignItems: "center",
    flexDirection:"column",
    height: "100px",
    width: "400px",
  }

export default function Logo() {
  return (
    <Box sx={wrapper}> 
        <Box as="span" sx={Id}>
            <Text fontSize='90px' color='#3795BD' fontWeight="900" fontFamily={"sans-serif"}>t.com</Text>
        </Box>
    </Box>
 )
}
