import React from 'react';
import ReactDOM from 'react-dom/client';
import img from './images/book_1.jpg';

import './index.css';

const firstBook = {
  author: 'Nicole Trope',
  title:
    'The Family Across the Street: A totally unputdownable psychological thriller with a shocking twist',
  img: img,
};

const secondBook = {
  author: 'Pedro Urvi',
  title: "The Traitor's Son: (Path of the Ranger Book 1)",
  img: 'https://m.media-amazon.com/images/I/8154SOYpvSL._SL1500_.jpg',
};

const title =
  'The Family Across the Street: A totally unputdownable psychological thriller with a shocking twist';
const author = 'Nicole Trope';

const BookList = () => {
  return (
    <section className="booklist">
      <Book
        author={firstBook.author}
        title={firstBook.title}
        img={firstBook.img}
      />
      <Book
        author={secondBook.author}
        title={secondBook.title}
        img={secondBook.img}
      />
    </section>
  );
};

const Book = props => {
  console.log(props);
  return (
    <article className="book">
      <img src={props.img} alt={props.title} />
      <h2>{props.title}</h2>
      <h4>{props.author}</h4>
    </article>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<BookList />);
