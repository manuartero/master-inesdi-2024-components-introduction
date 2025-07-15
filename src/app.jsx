import { PkmnType } from "./components/pkmn-type";

import "./app.css";

export function App() {
  return (
    <main>
      <PkmnType type="electric" />
      <PkmnType type="ground" />
      <PkmnType type="ice" />
      <PkmnType type="water" />
      <PkmnType type="steel" />
    </main>
  );
}
