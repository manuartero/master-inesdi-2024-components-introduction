import electricIcon from "../assets/electric-type.png";
import groundIcon from "../assets/ground-type.png";
import iceIcon from "../assets/ice-type.png";
import waterIcon from "../assets/water-type.png";
import snorlaxIcon from "../assets/snorlax.png";

import styles from "./pkmn-type.module.css";

const iconMap = {
  electric: electricIcon,
  ground: groundIcon,
  ice: iceIcon,
  water: waterIcon,
  steel: snorlaxIcon,
};

export function PkmnType({ type }) {
  return (
    <div
      className={styles.element}
      onClick={() => alert(`You clicked on ${type} type!`)}
    >
      <img
        className={styles.icon}
        src={iconMap[type]}
        alt={`${type} type`}
      />
    </div>
  );
}
