import { Link } from "react-router-dom";
import Wrapper from "../assets/wrappers/CocktailCard";

const CocktailCard = ({ image, name, id, info, glass }) => {
  return (
    <Wrapper>
      <img src={image} alt={name} className="img"></img>
      <div className="footer">
        <h4>{name}</h4>
        <h5>{glass}</h5>
        <p>{info}</p>
        <Link className="btn" to={`/cocktail/${id}`}>
          Details
        </Link>
      </div>
    </Wrapper>
  );
};
export default CocktailCard;
