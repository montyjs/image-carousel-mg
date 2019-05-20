import React from 'react';
import MediaWrapper from './media-wrapper';
import Checkout from './checkout';

class App extends React.Component {
  static fetchImages() {
    return fetch('/images')
      .then(res => res.json())
      .then(data => data)
      .catch(err => console.log(err));
  }

  static fetchProducts() {
    return fetch('/products')
      .then(res => res.json())
      .then(data => data)
      .catch(err => console.log(err));
  }

  constructor(props) {
    super(props);
    this.state = {
      images: [],
      products: [],
    };
  }

  componentDidMount() {
    App.fetchImages()
      .then(data => this.setState({ images: data }));
    App.fetchProducts()
      .then(data => this.setState({ products: data }));
  }

  render() {
    const { images, products } = this.state;
    return (
      <div id="product-wrapper">
        <MediaWrapper
          images={images}
        />
        <Checkout
          products={products[82]}
        />
      </div>
    );
  }
}

export default App;
