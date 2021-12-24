
import "./am.css"
import { increment, decrement } from '../action/Index'
import { useDispatch } from "react-redux";


const Am = ({ id, name, image, price, quantity }) => {

    const dispatch = useDispatch();

    return (
        <>
            <div class="grid-container">
                <div className="grid-item">{name}</div>
                <div className="grid-item"> {quantity}</div>
                <div className="grid-item"> 
                 <button ClassName="btn1" style={{ backgroundColor: "green", width: "25px", height: "25px" }} onClick={() => dispatch(increment(id))} >+</button>
                 <button ClassName="btn1" style={{ backgroundColor: "red", width: "25px", height: "25px" }} onClick={() => dispatch(decrement(id))} >-</button>
                 </div>

            </div>

        </>
    );
};
export default Am ;
