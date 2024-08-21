import electricIcon from "./assets/electric-type.png";
import groundIcon from "./assets/ground-type.png";
import iceIcon from "./assets/ice-type.png";
import waterIcon from "./assets/water-type.png";

import "./app.css";

export function App() {
  return (
    <main>
      <div className="element">
        <img
          className="icon icon-electric"
          src={electricIcon}
          alt="electric type"
        />
        <span className="label">Electric</span>
      </div>

      <div className="element">
        <img className="icon icon-ground" src={groundIcon} alt="ground type" />
        <span className="label">Ground</span>
      </div>

      <div className="element">
        <img className="icon icon-ice" src={iceIcon} alt="ice type" />
        <span className="label">Ice</span>
      </div>

      <div className="element">
        <img className="icon icon-water" src={waterIcon} alt="water type" />
        <span className="label">Water</span>
      </div>
    </main>
  );
}
