import React from 'react';

class App extends React.component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    }
    this.fetchProducts = this.fetchProducts.bind(this);
    this.fetchImages = this.fetchImages.bind(this);
  }
  // Declare a new state variable, which we'll call "count"
  fetchImages() {
    return fetch('/images')
      .then(res => res.json())
      .then(data => console.log(data))
      .catch(err => console.log(err));
  }
  fetchProducts() {
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
        <button type="button" onClick={() => fetchProducts()}>
          Console Log Products
        </button>
        <button type="button" onClick={() => fetchImages()}>
          Console Log Images
        </button>
      </div>
    </div>
  );
}

export default App;
