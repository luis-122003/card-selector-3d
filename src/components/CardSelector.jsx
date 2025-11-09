import React, { useState } from "react";
import { cardsData } from "../data/cardsData";


export default function CardSelector() {
  const [selectedCard, setSelectedCard] = useState(null);

  const handleSelect = (card) => {
    setSelectedCard(card);

    const audio = new Audio(card.audio);
    audio.play().catch(() => console.log("🔇 Audio bloqueado por el navegador"));
  };

  return (
    <div className="container">
      <h1>🃏 Selector de Cartas</h1>

      <div className="card-grid">
        {cardsData.map((card) => (
          <div
            key={card.id}
            className={`card ${selectedCard?.id === card.id ? "selected" : ""}`}
            onClick={() => handleSelect(card)}
          >
            <img src={card.image} alt={card.name} />
            <h2>{card.name}</h2>
            <p>{card.series}</p>
          </div>
        ))}
      </div>

      {selectedCard ? (
        <div className="viewer">
          <h2>{selectedCard.name}</h2>
          <p>{selectedCard.series}</p>
          <model-viewer
            src={selectedCard.model}
            alt={selectedCard.name}
            camera-controls
            auto-rotate
            shadow-intensity="1"
            style={{ width: "100%", height: "400px", borderRadius: "16px" }}
          ></model-viewer>
        </div>
      ) : (
        <p style={{ color: "#9ca3af" }}>
          Selecciona una carta para ver su modelo.
        </p>
      )}
    </div>
  );
}
