import "./board.css";

const Square = () => {
  return <div className="square"> a </div>;
};

const Board = () => {
  return (
    <div className="table">
      <div className="board">
        <Square />
      </div>
    </div>
  );
};
export default Board;
