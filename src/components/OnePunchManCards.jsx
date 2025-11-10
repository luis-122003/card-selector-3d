import "../App.css";
import OnePunchCard from "./OnePunchCard";

const characters = [
  {
    id: 1,
    name: "Saitama",
    series: "One Punch Man",
    image: "public/assets/images/saitama.png",
    model: "public/assets/models/saitama.glb",
    power: "One Punch",
    description: "El héroe más fuerte, capaz de derrotar a cualquier enemigo con un solo golpe."
  },
  {
    id: 2,
    name: "Genos",
    series: "One Punch Man",
    image: "public/assets/images/genos.png",
    model: "public/assets/models/genos.glb",
    power: "Incineration Cannon",
    description: "Un poderoso cyborg con fuego en su corazón y lealtad inquebrantable hacia Saitama."
  },
  {
    id: 3,
    name: "Tatsumaki",
    series: "One Punch Man",
    image: "public/assets/images/tatsumaki.png",
    model: "public/assets/models/tatsumaki.glb",
    power: "Psychokinesis",
    description: "La poderosa heroína con habilidades telequinéticas que desafían la gravedad."
  },

  {
    id: 4,
    name: "Speed-o'-Sound Sonic",
    series: "One Punch Man",
    image: "public/assets/images/sonic.png",
    model: "public/assets/models/sonic.glb",
    power: "Super Speed",
    description: "Un ninja extremadamente rápido y rival recurrente de Saitama."
  },
  {
    id: 5,
    name: "Garou",
    series: "One Punch Man",
    image: "public/assets/images/garou.png",
    model: "public/assets/models/garou.glb",
    power: "Martial Arts",
    description: "Un ex-heroico convertido en villano, conocido por su habilidad en artes marciales y su odio hacia los héroes."
  },
  {
    id: 6,
    name: "Fubuki",  
    series: "One Punch Man",
    image: "public/assets/images/fubuki.png",
    model: "public/assets/models/fubuki.glb",
    power: "Psychokinesis",
    description: "La poderosa heroína con habilidades telequinéticas que desafían la gravedad."
  }

];

export default function OnePunchManCards() {
  return (
    <div className="cards-page">
      <h1 className="cards-title">ONE PUNCH MAN - HEROES</h1>
      <p className="cards-subtitle" style={{ textAlign: "center" }}>Pase por encima de tu carta favorita de One Punch Man</p>
      <div className="cards-container">
        {characters.map((c) => (
          <OnePunchCard key={c.id} character={c} />
        ))}
      </div>
    </div>
  );
}
