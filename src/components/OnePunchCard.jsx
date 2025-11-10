  import "../App.css";

export default function OnePunchCard({ character }) {
  return (
    <div className="card-3d">
      <div className="card-inner">
        {/* Lado A - Información */}
        <div className="card-front">
          <img
            src={character.image}
            alt={character.name}
            className="card-front-image"
          />
          <h2>{character.name}</h2>
          <h4>{character.series}</h4>
          <p><strong>Poder:</strong> {character.power}</p>
          <p className="description">{character.description}</p>
        </div>

        {/* Lado B - Modelo 3D */}
        <div className="card-back">
          <model-viewer
            src={character.model}
            alt={character.name}
            camera-controls
            auto-rotate
            style={{
              width: "100%",
              height: "100%",
              borderRadius: "12px",
              background: "rgba(145, 26, 26, 0.2)",
            }}
          ></model-viewer>
        </div>
      </div>
    </div>
  );
}
