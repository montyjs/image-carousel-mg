import React from 'react';
import MediaWrapper from './media-wrapper';
import BuyWrapper from './buy-wrapper';

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
        <MediaWrapper />
        <BuyWrapper
          fetchImages={this.fetchImages}
          fetchProducts={this.fetchProducts}
        />
      </div>
    );
  }
}

export default App;
