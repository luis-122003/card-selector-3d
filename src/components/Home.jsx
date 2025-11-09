import { useNavigate } from "react-router-dom";
import "./Home.css";

export default function Home() {
  const navigate = useNavigate();

  const goToCards = () => {
    navigate("/cards");
  };

  return (
    <div className="home-container">
      <div className="overlay">
        <h1 className="home-title">Bienvenido a One Punch Man Cards</h1>
        <button className="home-button" onClick={goToCards}>
          Ver Cartas
        </button>
      </div>
    </div>
  );
}