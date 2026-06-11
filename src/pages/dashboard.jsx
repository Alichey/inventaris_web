import { Box, Button, Text } from "@chakra-ui/react";
import { BiLogOut } from "react-icons/bi";
import { useEffect } from "react";
import { useState } from "react";
import { useColorMode } from "../components/ui/color-mode";
import { CiSun } from "react-icons/ci";
import { Outlet, useNavigate } from "react-router-dom";
import person from "../assets/icons/kucing-menjulur-kucing-lidah.png";
import MyDrawer from "./mydrawer";

const Dashboard = () => {
  const navigate = useNavigate();
  const [nama, setNama]=useState("");
  const {toggleColorMode} = useColorMode();

  const handlelogOut = () => {
    localStorage.clear();
    navigate("/");
  }

  useEffect(() => {
    const usernameLS = localStorage.getItem("usernameLS");

    if(usernameLS == null) {
      navigate("/");
    }else{
      setNama(localStorage.getItem("namaLS"));
  }
  })
    return (
      <>
      <Box width="100dvw" height="100dvh" display="flex" flexDirection="column">
        <Box display="flex" flexDirection="row" justifyContent="space-between" padding="10px">
          <MyDrawer namadrawer={nama} logodrawer={person}/>
          <Box display="flex" flexDirection="row" alignItems="center" gapX= "10px">
          <Text fontWeight="bold">My Inventory</Text>
          <Button variant="outline" onClick={()=> {toggleColorMode();}}>
            <CiSun/>
          </Button>
          </Box>

          <Button variant="outline" onClick={()=> {handlelogOut();}}>
            <BiLogOut/>
          </Button>
        </Box>
        <Outlet/>
      </Box>
      </>
    );
  };

export default Dashboard;