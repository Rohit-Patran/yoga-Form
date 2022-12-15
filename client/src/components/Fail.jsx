import { Link } from 'react-router-dom';
import CROSS from "../images/cross.png";
const Fail = () => {
    return(
        <div className='flex flex-col bg-blue-400 h-screen items-center justify-center'>
            <p className='font-bold text-red-700'>Payment Failed</p>
            <img src={CROSS} height={50} width={50} alt="cross-pic"/>
            <Link to="/form">
                <button className='bg-green-400 font-bold px-4 py-1 mt-2 rounded-md text-white'>Retry</button>
            </Link>
        </div>
    )
};

export { Fail as default };