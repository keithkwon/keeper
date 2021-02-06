import React from "react";
import Header from "./Header";
import Note from "./Note";
import Footer from "./Footer";
import notes from "../notes";

function App() {
  const rendNotes = notes.map((note) => {
    return <Note key={note.id} title={note.title} content={note.content} />;
  });
  return (
    <div>
      <Header />
      {rendNotes}
      <Footer />
    </div>
  );
}

export default App;
