import React from 'react';

class App extends React.Component {
  // Declare a new state variable, which we'll call "count"
  static fetchImages() {
    return fetch('/images')
      .then(res => res.json())
      .then(data => console.log(data))
      .catch(err => console.log(err));
  }

  static fetchProducts() {
    return fetch('/products')
      .then(res => res.json())
      .then(data => console.log(data.rows))
      .catch(err => console.log(err));
  }

  render() {
    return (
      <div id="product-wrapper">
        <div className="product-media-wrapper">
          <img src="https://s3-us-west-2.amazonaws.com/fec-rei/kiwi/back_kiwi_tarantulace_kiwigrey_5_8.jpg" alt="tarantulace" />
        </div>
        <div className="buy-wrapper">
          <button type="button" onClick={() => this.fetchProducts()}>
            <p>
              Console Log Products
            </p>
          </button>
          <button type="button" onClick={() => this.fetchImages()}>
            Console Log Images
          </button>
        </div>
      </div>
    );
  }
}

export default App;
