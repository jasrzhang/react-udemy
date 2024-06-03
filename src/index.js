import React from 'react';
import ReactDOM from 'react-dom/client';

function Greeting() {
  return (
    <div>
      <h3>hello people</h3>
      <ul>
        <li>
          <a href="#">hello world</a>
        </li>
      </ul>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Greeting />);

export default Greeting;
