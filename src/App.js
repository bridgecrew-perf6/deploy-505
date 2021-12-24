import { useState, useEffect } from "react";
import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import Modal from "@mui/material/Modal";
import Atom from "./components/Atom";
import Kart from "./components/Kart";
import { total } from "./action/Index";
import Badge from "@mui/material/Badge";
import { styled } from "@mui/material/styles";
import IconButton from "@mui/material/IconButton";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

import Foot from "./components/Foot";

import Box from "@mui/material/Box";

const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    right: -3,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: "0 4px"
  }
}));

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4
};

function App() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  //const [odal, setOdal] = useState(false)

  const dispatch = useDispatch();

  const { item, totalItem } = useSelector((state) => state.ChangeColor);

  useEffect(() => {
    dispatch(total());
  }, [item]);

  return (
    <>
      <div className="nav" style={{ background: "blue" }}>
        <NavLink activeClassName="active" to="/Home">
          <img
            src="https://www.deccanherald.com/sites/dh/files/articleimages/2020/07/06/Swiggy-1594035877.jpg"
            style={{ width: "50px", height: "35px" }}
            alt=""
            srcset=""
          />{" "}
        </NavLink>

        <IconButton aria-label="cart">
          <StyledBadge
            onClick={handleOpen}
            badgeContent={totalItem}
            color="secondary"
          >
            <ShoppingCartIcon />
          </StyledBadge>
        </IconButton>
      </div>

      <div>
        {item.map((event) => {
          return <Atom key={event.id} {...event} />;
        })}
      </div>

      <Foot />

      <div>
        {/*  <Modal className='modal' isOpen={(odal)} onRequestClose={() => setOdal(false)}>
      <button onClick={() => setOdal(false)} ><CancelIcon/></button>

        <Kart />
       

      </Modal>
*/}

        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <Kart />
          </Box>
        </Modal>
      </div>
    </>
  );
}

export default App;
