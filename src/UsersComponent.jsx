import { useState } from "react";

export default function UsersComponent() {
  const mockData = [
    { username: "Ola Normann", email: "ola.normann@norge.no" },
    { username: "Torleif", email: "torleif@kodehode.no" },
    { username: "Jan Egil", email: "jan.egil@kodehode.no" },
    { username: "Sander", email: "sander@kodehode.no" },
  ];
  const [users, setUsers] = useState(mockData);
  const [newUser, setNewUser] = useState({});

  function handleUpdate(e) {
    const { name, value } = e.target;
    setNewUser((prev) => ({ ...prev, [name]: value }));
  }

  //Function that adds user to list and clears input fields
  function addUser() {
    setUsers((prev) => [newUser, ...prev]);
    setNewUser({});
  }

  return (
    <div>
      <h1>Users:</h1>
      <div className="userdiv">
        {users.map((user, i) => {
          return (
            <div key={i} className="usercard">
              <h3>{user.username}</h3>
              <p>{user.email}</p>
            </div>
          );
        })}
      </div>
      <div className="inputs">
        <h2 className="inputheading">Create new user:</h2>
        <input
          type="text"
          placeholder="Name.."
          onChange={handleUpdate}
          name="username"
          value={newUser.username || ""}
        ></input>
        <input
          type="text"
          placeholder="Email.."
          onChange={handleUpdate}
          name="email"
          value={newUser.email || ""}
        ></input>
        <button onClick={addUser} className="adduser">
          Add user
        </button>
      </div>
    </div>
  );
}

/* 
Funksjonalitet:

Visning av brukere:

Start med å vise listen over brukere på skjermen.
Opprette nye brukere:

Lag to input-felt:
Ett for brukernavn (username).
Ett for e-post (email).
Lag en knapp som legger til en ny bruker i listen når den trykkes.
Bruk av useState:

Bruk useState for å håndtere listen over brukere.
Når brukeren fyller ut feltene og trykker på knappen, skal den nye brukeren legges til i listen.
Vurdering:

Brukeren skal kunne legge til nye brukere ved å fylle ut input-feltene og trykke på knappen.
Den nye brukeren skal vises i listen etter at den er lagt til.*/
