import React from "react";

const CardViewer = ({ card, onBack }) => {
  return (
    <div className="viewer">
      <button onClick={onBack} className="back-btn">⬅ Volver</button>
      <div className="viewer-card">
        <img src={card.image} alt={card.name} className="viewer-image" />
        <h2>{card.name}</h2>
        <p className="viewer-series">{card.series}</p>
      </div>

      <model-viewer
        src={card.model}
        alt={`Modelo 3D de ${card.name}`}
        camera-controls
        auto-rotate
        shadow-intensity="1"
        class="model-viewer"
      ></model-viewer>
    </div>
  );
};

export default CardViewer;
