import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

const books = [
  {title: "A Court of Thorns and Roses", author: "Sarah J. Maas", genre: "Romance", isbn: "9781619634459", FilmAdaptation: false},
  {title: "Caraval", author: "Stephanie Garber", genre: "Mystery", isbn: "9781250095268", FilmAdaptation: false},
  {title: "Red Queen", author: "Victoria Aveyard", genre: "Dystopian", isbn: "9781250095268", FilmAdaptation: false},
  {title: "City of Bones", author: "Cassandra Clare", genre: "Fantasy", isbn: "9781250095268", FilmAdaptation: true},
  {title: "The Lightning Thief", author: "Rick Riordan", genre: "Mythology", isbn: "9781250095268", FilmAdaptation: true},
];


function ListBooks() {
  const [isList, setList] = useState(false)
  const booksList = books.map(b =>
    <li>{b.title}</li>
  );
  return (
    <>
      <button onClick={() => setList(true)}>Display List Of Books</button>
      {isList ? <ol>{booksList}</ol>: ""}
    </>
  );
}


function DisplayInfo() {
  const [isList, setList] = useState(false)
  const booksList = books.map(b =>
    <li><strong>Author:</strong> {b.author}, <strong>Genre:</strong> {b.genre}, <strong>ISBN:</strong> {b.isbn}</li>
  );
  return (
    <>
      <button onClick={() => setList(true)}>Display Book Info</button>
      {isList ? <ol>{booksList}</ol>: ""}
    </>
  );
}

function FilmAdapt() {
  const [isList, setList] = useState(false)
  const booksList = books.map(b =>
    <li style = {{color: b.FilmAdaptation ? 'green' : 'red'}}>{b.FilmAdaptation ? "Yes" : "No"}</li>
  );
  return (
    <>
      <button onClick={() => setList(true)}>Is there a film adaptation?</button>
      {isList ? <ol>{booksList}</ol>: ""}
    </>
  );
}


function App() {

  return (
    <>
    <div className="Card">
      <ListBooks />
      <DisplayInfo />
      <FilmAdapt />
    </div>
      
    </>
  )
}

export default App
