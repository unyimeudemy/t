import { Box } from "@chakra-ui/react"
import { Outlet } from "react-router-dom"


export default function RootLayout() {
  return (
        <Box 
        width="100vw"
        height="100vh"
        background={"#d7ebf4"}
        >
        <Outlet />
        </Box>
  )
}
