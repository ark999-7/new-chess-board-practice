import { useState } from "react";
import Chessboard from "chessboardjsx";
import { Chess } from "chess.js";

export default function ChessPracticeBoard() {
  const [game, setGame] = useState(new Chess());
  const [fen, setFen] = useState("start");

  const onDrop = ({ sourceSquare, targetSquare }) => {
    const gameCopy = new Chess(game.fen());
    const move = gameCopy.move({ from: sourceSquare, to: targetSquare, promotion: "q" });
    if (move === null) return;
    setGame(gameCopy);
    setFen(gameCopy.fen());
  };

  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <h1>Chess Practice Board</h1>
      <Chessboard
        width={400}
        position={fen}
        onDrop={onDrop}
        boardStyle={{
          borderRadius: "5px",
          boxShadow: "0 5px 15px rgba(0, 0, 0, 0.3)"
        }}
      />
      <p style={{ marginTop: "15px" }}>Ask ChatGPT for help with your moves!</p>
    </div>
  );
}