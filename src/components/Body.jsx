/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import "./Body.scss";
import Button from "./Button";
import Cards from "./Cards";
import { SourceIcon } from "../../db/planets-array";

const Body = ({ data }) => {
  const [selected, setSelected] = useState("Overview");
  const toggleButton = (option) => {
    setSelected(prev => prev === option ? prev : option);
  };
  const newColor = data.backgroundColor;
  function setColor(newColor) {
    document.documentElement.style.setProperty('--main-color', newColor);
  }
  useEffect(() => {
    setColor(newColor);
  }, [newColor]);

  return (
    <div className="global">
      <div className="container">
        <div className="buttons top">
          <Button label="Overview" number="01" className={`${selected === 'Overview' ? 'selected' : ''} choice`} onClick={() => toggleButton("Overview")} />
          <Button label="Structure" number="02" onClick={() => toggleButton("Structure")} className={`${selected === 'Structure' ? 'selected' : ''} choice`} />
          <Button label="Geology" number="03" onClick={() => toggleButton("Geology")} className={`${selected === 'Geology' ? 'selected' : ''} choice`} />
        </div>
        <div className="img">
          <img className="main" src={selected === "Overview" ? data.planetImage : data.internalPlanetImage}></img>
          <img className="geology" src={selected === "Geology" ? data.geologyImage : ""} />
        </div>
        <div className="info">
          <div className="info-container">
            <div className="title">{data.title}</div>
            <div className="description">{selected === "Overview" ? data.overviewParagraph : (selected === "Structure" ? data.internalParagraph : data.geologyParagraph)}</div>
            <div className="source">Source: <a href={data.overviewWikipediaLink} > Wikipedia </a>  <img src={SourceIcon} /></div>
          </div>
          <div className="buttons bottom">
            <Button label="Overview" number="01" className={`${selected === 'Overview' ? 'selected' : ''} choice`} onClick={() => toggleButton("Overview")} />
            <Button label="Interval Structure" number="02" onClick={() => toggleButton("Structure")} className={`${selected === 'Structure' ? 'selected' : ''} choice`} />
            <Button label="Surface Geology" number="03" onClick={() => toggleButton("Geology")} className={`${selected === 'Geology' ? 'selected' : ''} choice`} />
          </div>
        </div>
      </div>
      <div className="card-container">
        <Cards rotation={data.rotationTime} revolution={data.revolutionTime} radius={data.radius}
          temp={data.averageTemp} />
      </div>
    </div >
  );
};

export default Body;