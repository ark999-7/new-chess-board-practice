import { Chess } from "chess.js";
import { useEffect, useState } from "react";
import { Chessboard } from "@chrisoakman/react-chessboard";

export default function ChessPracticeBoard() {
  const [game, setGame] = useState(new Chess());
  const [position, setPosition] = useState("start");

  const makeMove = (move) => {
    const gameCopy = new Chess(game.fen());
    const result = gameCopy.move(move);
    if (result) {
      setGame(gameCopy);
      setPosition(gameCopy.fen());
    }
  };

  return (
    <div style={{ padding: "2rem", textAlign: "center" }}>
      <h1>React Chessboard Practice</h1>
      <Chessboard
        position={position}
        onPieceDrop={(source, target) => {
          makeMove({ from: source, to: target, promotion: "q" });
          return true;
        }}
      />
      <p style={{ marginTop: "1rem" }}>Move pieces and ask ChatGPT for help!</p>
    </div>
  );
}