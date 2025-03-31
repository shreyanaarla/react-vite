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

let book = {title: "", author: "", genre: "", isbn: "", FilmAdaptation: false}

function ListBooks() {
  const booksList = books.map(b =>
    <li>{b.title}</li>
  );
  return (
    <>
      <ul>{booksList}</ul>
    </>
  );
}

function BookPicker() {
  return (
    <>
      <button onClick={() => book = books[Math.floor(Math.random() * 5)]}>Click Me To Pick A Book!</button>
    </>
  );
}

function DisplayInfo() {
  return (
    <>
      <h3>Author: {book.author}</h3>
      <p>Genre: {book.genre}</p>
      <p>ISBN: {book.isbn}</p>
    </>
  );
}

function DisplayInfoButton() {
  return (
    <>
      <button onClick={DisplayInfo}>Display Book Information</button>
    </>
  );
}

function FilmAdapt() {
  return (
    <p style = {{color: book.FilmAdaptation ? 'green' : 'red'}}>Has a film adaptation: {book.FilmAdaptation}</p>
  );
}

function FilmAdaptButton() {
  return (
    <button onClick={FilmAdapt}>Is there a film adaptation?</button>
  );
}

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className="Card">
      <ListBooks />
      <BookPicker />
      <h1>{book.title}</h1>
      <DisplayInfoButton />
      <FilmAdaptButton />
    </div>
      
    </>
  )
}

export default App
