import React from 'react';
import MediaWrapper from './media-wrapper';
import Checkout from './checkout';

class App extends React.Component {
  static fetchImages() {
    return fetch('/images')
      .then(res => res.json())
      .then(data => data)
      .catch(err => err);
  }

  static fetchProducts() {
    return fetch('/products')
      .then(res => res.json())
      .then(data => data.row)
      .catch(err => err);
  }

  constructor(props) {
    super(props);
    this.state = {
      images: [],
      product: {},
    };
  }

  componentDidMount() {
    App.fetchImages()
      .then(data => this.setState({ images: data }));
    App.fetchProducts()
      .then(data => this.setState({ product: data }))
      .then(() => {
        const { product } = this.state;
        document.title = product.productName;
      });
  }

  render() {
    const { images, product } = this.state;
    return (
      <div id="product-wrapper">
        <MediaWrapper
          images={images}
        />
        <Checkout
          {...product}
        />
      </div>
    );
  }
}

export default App;
