import { Box } from "@chakra-ui/react"
import { Outlet } from "react-router-dom"


export default function RootLayout() {
  return (
        <Box 
        width="100vw"
        height="100vh"
        background={"#F7F7F8"}
        >
        <Outlet />
        </Box>
  )
}
