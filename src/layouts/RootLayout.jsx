import { background, Box } from "@chakra-ui/react"
import { Outlet } from "react-router-dom"

const layout = {
    width:"100vw",
    height:"100vh",
    background:"#d7ebf4",
}


export default function RootLayout() {
  return (
        <Box 
        sx={layout}
        >
        <Outlet />
        </Box>
  )
}
