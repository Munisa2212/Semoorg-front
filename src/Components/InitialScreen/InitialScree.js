import React, { useContext } from "react";
import Box from "@mui/material/Box";
import styled from "styled-components";
import MyButton from "../MyButton/MyButton";
import Link from "@mui/material/Link";
import ThemeContext from "../../Context/ThemeContext";
import Typography from "@mui/material/Typography";
import { Slide } from "react-awesome-reveal";

const InitialScreenBox = styled(Box)`
  width: 100%;
  height: 100vh;
  position: fixed;
  left: 0;
  top: 0;
  z-index: 999999;
  background: #fff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  text-align: center;
`;

const StyledMyButton = styled(MyButton)`
  background: none;
  border: 1px solid #af8f5c;
  color: #af8f5c;
  &:hover {
    background: #af8f5c;
    color: #fff;
    border: 1px solid #af8f5c;
  }
`;

function InitialScreen() {
  const { setInitialScreen } = useContext(ThemeContext);

  const handleHideScreen = () => {
    setInitialScreen(false);
  };

  return (
    <InitialScreenBox id="InitialScreenBox">
      <Slide direction="down">
        <Typography variant="h6">
          Welcome to Semoorg сhoose your destination below
        </Typography>
      </Slide>
      <Box sx={{ display: "flex", gap: "1rem" }}>
        <Slide>
          <Link href="https://www.semoorg.co.uk/">
            <StyledMyButton
              title={"🍔 Taste Street"}
              variant={"dark"}
              rangi={"red"}
            />
          </Link>
        </Slide>
        <Slide direction="right">
          <MyButton
            onClick={handleHideScreen}
            title={"🏢 BuildScape"}
            variant={"dark"}
            rangi={"#AF8F5C"}
          />
        </Slide>
      </Box>
    </InitialScreenBox>
  );
}

export default InitialScreen;
