import playerMen from "./statics/hombre.png";
import playerWoman from "./statics/mujer.png";

const Player = (props) => {
  const playerAvatar = props.player === "Men" ? playerMen : playerWoman;

  return (
    <div className="player">
      <img src={playerAvatar} alt="playerMen" />
      <h3>{props.playerName}</h3>
      <h2>{props.turno}</h2>
    </div>
  );
};
export default Player;
