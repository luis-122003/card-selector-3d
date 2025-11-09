import React from "react";

const CardList = ({ cards, onSelect }) => {
  return (
    <div className="card-list">
      {cards.map((card) => (
        <div
          key={card.id}
          className="card"
          onClick={() => onSelect(card)}
        >
          <img src={card.image} alt={card.name} />
          <h3>{card.name}</h3>
          <p>{card.series}</p>
          <span className="status">{card.status}</span>
        </div>
      ))}
    </div>
  );
};

export default CardList;
