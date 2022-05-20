import "./index.css";

const Card = (props) => {
  return (
    <div className="card">
      <img src={props.imageUrl} />

      <a href="">Hover This Link</a>
      <span className="legend"> {props.name} <a href="">Hello</a> </span>
    </div>
  );
};

export default Card;