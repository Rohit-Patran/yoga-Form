import { Link } from "react-router-dom";
import LOGO from "../../src/images/favicon.ico";

const Home = () => {
    return(
        <div className="flex flex-col justify-center bg-blue-400 h-screen">
            <img src={LOGO} alt="logo" className="block mx-auto" height={100} width={100} />
            <p className="text-white text-center font-bold mb-4">Heal Y💚ga</p>
            <Link to="/form">
                <button className="bg-green-400 text-white font-bold px-4 py-2 rounded-md block mx-auto">Join</button>
            </Link>
        </div>
        
    );
};

export { Home as default };