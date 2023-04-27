/* eslint-disable react/prop-types */
import "./Cards.scss";

const Cards = ({ rotation, revolution, radius, temp }) => {

  return (
    <div className="cards">
      <div className="card">
        <div className="main">
          Rotation Time
        </div>
        <div className="data">
          {rotation}
        </div>
      </div>
      <div className="card">
        <div className="main">
          Revolution Time
        </div>
        <div className="data">
          {revolution}
        </div>
      </div>
      <div className="card">
        <div className="main">
          Radius
        </div>
        <div className="data">
          {radius}
        </div>
      </div>
      <div className="card">
        <div className="main">
          Average temp
        </div>
        <div className="data">
          {temp}
        </div>
      </div>
    </div>

  );
};

export default Cards;