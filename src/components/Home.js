import React from "react";
import { Link } from "react-router-dom";
import { styled, Box } from "@mui/system";
import ModalUnstyled from "@mui/base/ModalUnstyled";

import Button from "@mui/material/Button";
import "./home.css";

const StyledModal = styled(ModalUnstyled)`
  position: fixed;
  z-index: 1300;
  right: 0;
  bottom: 0;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Backdrop = styled("div")`
  z-index: -1;
  position: fixed;
  right: 0;
  bottom: 0;
  top: 0;
  left: 0;

  -webkit-tap-highlight-color: transparent;
`;

const style = {
  width: 400,
  bgcolor: "background.paper",
  border: ".5px solid #000",

  p: 2,
  px: 4,
  pb: 3
};

const Home = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <div style={{ backgroundColor: "orange" }}>
        <div
          style={{ color: "white", backgroundColor: "blue", height: "40px" }}
        >
          <h4>Welcome to Swasch Restaurent</h4>
        </div>
        <div>
          <Button className="enu" variant="contained" onClick={handleOpen}>
            login
          </Button>

          <Link style={{ textDecoration: "none" }} to="/App">
            <Button className="menu" variant="contained">
              Menu
            </Button>
          </Link>

          <StyledModal
            aria-labelledby="unstyled-modal-title"
            aria-describedby="unstyled-modal-description"
            open={open}
            onClose={handleClose}
            BackdropComponent={Backdrop}
          >
            <Box sx={style}>
              <h3> Sing up</h3>
              <input type="text" placeholder="Username"></input>
              <input type="password" placeholder="Password"></input>

              <div>
                <button>Sign up</button>
              </div>
            </Box>
          </StyledModal>
        </div>
      </div>
    </>
  );
};

export default Home;
