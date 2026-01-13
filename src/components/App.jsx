import React from "react";
import contacts from "../contacts.js";
import Card from "./Card.jsx";

/*
function App() {
  return (
    <div>
      <h1 className="heading">My Contacts</h1>
      {contacts.map(function (contact) {
        return (
          <Card
            name={contact.name}
            email={contact.email}
            tel={contact.phone}
            imgsource={contact.imgURL}
          />
        );
      })}
    </div>
  );
}
*/

function App() {
  return (
    <div>
      <h1 className="heading">My Contacts</h1>
      {contacts.map(function (contact) {
        return (
          <Card
            name={contact.name}
            email={contact.email}
            tel={contact.phone}
            imgsource={contact.imgURL}
          />
        );
      })}
    </div>
  );
}

export default App;
