import React, { useState, useEffect } from 'react';

function App() {
  // Declare a new state variable, which we'll call "count"
  const [count, setCount] = useState(0);
  /**
   * ++++++++++++++++++++++++++++++++++++++++++++++++++++++
   * ++++ https://reactjs.org/docs/hooks-overview.html ++++
   * ++++++++++++++++++++++++++++++++++++++++++++++++++++++
   * When you call useEffect, you’re telling React to run your
   * “effect” function after flushing changes to the DOM. Effects
   * are declared inside the component so they have access to its
   * props and state. By default, React runs the effects after
   * every render — including the first render.
   */
  useEffect(() => {
    document.title = `${count} click`;
  });

  function fetchImages() {
    return fetch('/images')
      .then(res => res.json())
      .then(data => console.log(data))
      .catch(err => console.log(err));
  }
  function fetchProducts() {
    return fetch('/products')
      .then(res => res.json())
      .then(data => console.log(data.rows))
      .catch(err => console.log(err));
  }

  return (
    <div>
      <div className="product-media-wrapper">
        <img src="https://s3-us-west-2.amazonaws.com/fec-rei/kiwi/back_kiwi_tarantulace_kiwigrey_5_8.jpg" alt="tarantulace" />
      </div>
      <div className="buy-wrapper">
        <p>
          {`You clicked ${count} times`}
        </p>
        <button type="button" onClick={() => fetchProducts()}>
          Console Log Products
        </button>
        <button type="button" onClick={() => fetchImages()}>
          Console Log Images
        </button>
        <button type="button" onClick={() => setCount(count + 1)}>
          Click me
        </button>
      </div>
    </div>
  );
}

export default App;
