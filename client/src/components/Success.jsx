import { Link } from 'react-router-dom';
import "../../src/index.css";
import TICK from "../images/tick.png";

const Success = () => {
    return(
        <div className='flex flex-col bg-blue-400 h-screen items-center justify-center'>
            <p className='font-bold text-green-700'>Successfully Payment Done</p>
            <img src={TICK} alt="tick-pic"></img>
            <Link to="/">
                <button className='bg-green-400 font-bold px-4 py-1 mt-2 rounded-md text-white'>Back to Home</button>
            </Link>
        </div>
    )
};

export { Success as default };