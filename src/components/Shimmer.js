import { Link } from "react-router";

const Shimmer = () => {
     var id="28721"
    return(
        <div className="shimmer-container" >
            <div className="shimmer-card"><Link to={"/restaurant/"+id}>Cards</Link> </div>
            <div className="shimmer-card"> Cards</div>
            <div className="shimmer-card"> Cards</div>

        </div>
    )
}

export default Shimmer;