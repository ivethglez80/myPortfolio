import { useNavigate } from "react-router-dom";
import NotFoundImg from "../../img/NotFound.png"

const NotFound = () => {
    const navigate = useNavigate();
    return (
        <div className="flex justify-center">
            <img src={NotFoundImg} alt="Not Found" className=" h-screen" />            
        </div>
    )
};

export default NotFound;