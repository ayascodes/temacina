  import { Grid, GridItem } from "@chakra-ui/react"
  import { Outlet } from "react-router-dom"
  import Sidebar from "../Components/Sidebar"
  import "../pages/helpcenter.css"

  export default function RootLayout() {
      return (
          <Grid templateColumns="repeat(5, 1fr)" >
            {/* sidebar */}
            <GridItem className="sideBar"
              as="aside"
              colSpan={{ base: 5, lg: 2, xl: 1 }} 
              minHeight={{lg: '100vh' }}
              p={{ base: '20px', lg: '20px' }}         
            >
              <Sidebar />
            </GridItem>
      
            {/* main content */}
            <GridItem
              as="main"
              colSpan={{ base: 5, lg: 3, xl: 4 }} 
              p="40px"
            >
              <Outlet />
            </GridItem>
          </Grid>
        )
  }
