import "./styles.css";
import Policy from "./Policy";

export default function App() {
  return (
    <div className="App">
      <h1>Evo Fanta</h1>
      Selektuj ime(polisu)
      <p>Pa onda chekiraj Features</p>
      <p>
        Provalices da se menja state za svaku features za selectovane polise
      </p>
      <Policy />
    </div>
  );
}
