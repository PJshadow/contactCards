import React from "react";
import contacts from "../contacts.js";
import Card from "./Card.jsx";
import ProfileImg from "./ProfileImg.jsx";

function App() {
  return (
    <div>
      <h1 className="heading">My Contacts</h1>
      <ProfileImg src="https://cdn.shoppub.io/brogan/media/filer_public/61/c9/61c9fdda-4a3b-4987-94ec-955fdb7ee0ba/03.jpg" />
      {contacts.map(function (contact, index) {
        return (
          <Card
            key={index}
            name={contact.name}
            email={contact.email}
            tel={contact.phone}
            imgsrc={contact.imgURL}
          />
        );
      })}
    </div>
  );
}

export default App;
