import { CDN_URL } from "../utils/constants";

const styleCard = {
    backgroundColor: "azure",
  };

const ResCard = ({resData}) => {
  const styleCard = {
  backgroundColor: "azure",
};
    return (
      <div className="res-card" style={styleCard}>
        <img
          className="res-logo"
          src={CDN_URL + resData.info.cloudinaryImageId}
        />
        <h1>{resData.info.name}</h1>
        <h4>{resData.info.cuisines.join(",")}</h4>
        <div className="rate">
        <h4>{resData.info.avgRating}</h4>
        
        </div>
  
      </div>
    );
  };

  export default ResCard;