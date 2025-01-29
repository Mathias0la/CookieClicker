import { useState } from "react";
import "./App.css";
import CatFacts from "./CatFacts";
import UsersComponent from "./UsersComponent";

function App() {
  const [count, setCount] = useState(0);

  return (
    <main>
      <nav>
        <a href="#cookieclicker">Cookie clicker</a>
        <a href="#catfacts">Cat facts</a>
        <a href="#users">Users</a>
      </nav>
      <section id="cookieclicker">
        <div>
          <h1>{`Cookies clicked: ${count}`}</h1>
          <button
            onClick={() => setCount((prev) => prev + 1)}
            className="cookie"
          >
            <img src="public/cookie.png" alt="Image of a Cookie" />
          </button>
        </div>
      </section>

      <section id="catfacts">
        <CatFacts></CatFacts>
      </section>

      <section id="users">
        <UsersComponent></UsersComponent>
      </section>
    </main>
  );
}

export default App;
