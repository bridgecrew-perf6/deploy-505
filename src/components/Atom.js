import "./cart.css";

import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

import { increment, decrement } from "../action/Index";

import { useDispatch } from "react-redux";

const Atom = ({ id, name, image, price, quantity }) => {
  const dispatch = useDispatch();

  return (
    <>
      <div className="di">
        <Card sx={{ width: 350, height: 350 }} cols={3} rowHeight={190}>
          <CardMedia
            component="img"
            height="190"
            image={`/assets/${image}`}
            alt="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {name}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              price:{price}
            </Typography>
          </CardContent>
          <CardActions>
            <Button
              style={{
                color: "white",
                backgroundColor: "green",
                width: "25px",
                height: "25px"
              }}
              onClick={() => dispatch(increment(id))}
            >
              +
            </Button>
            <span>{quantity}</span>
            <Button
              style={{
                color: "white",
                backgroundColor: "orange",
                width: "25px",
                height: "25px"
              }}
              onClick={() => dispatch(decrement(id))}
            >
              -
            </Button>
          </CardActions>
        </Card>
      </div>
    </>
  );
};
export default Atom;
