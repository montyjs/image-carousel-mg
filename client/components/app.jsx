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
      product: {
        productName: '',
        companyName: '',
        itemNumber: 0,
        color: '',
        price: '80.00',
        rating: '5',
        noRatings: 0,
        shoeSizes: [],
      },
      size: null,
      quantity: 1,
      shippingOption: 'ship',
    };
    this.handleShoeSizeSelect = this.handleShoeSizeSelect.bind(this);
    this.handleQuantityClick = this.handleQuantityClick.bind(this);
    this.handleQuantityInput = this.handleQuantityInput.bind(this);
    this.handleShippingInput = this.handleShippingInput.bind(this);
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

  handleShoeSizeSelect(e) {
    const shoeSize = e.target.value;
    this.setState({
      size: shoeSize,
    });
  }

  handleQuantityClick(e) {
    const val = e.target.dataset.val === 'inc' ? 1 : -1;
    const { quantity } = this.state;
    if (quantity + val === 0) {
      return false;
    }
    this.setState({
      quantity: quantity + val,
    });
  }

  handleQuantityInput(e) {
    const input = Number(e.target.value);
    if (input < 1) {
      return false;
    }
    this.setState({
      quantity: input,
    });
  }

  handleShippingInput(e) {
    this.setState({
      shippingOption: e.target.value,
    });
  }

  render() {
    const {
      images, product, quantity, shippingOption,
    } = this.state;
    const handlers = {
      shoeSizeSelect: this.handleShoeSizeSelect,
      handleQuantityClick: this.handleQuantityClick,
      handleQuantityInput: this.handleQuantityInput,
      handleShippingInput: this.handleShippingInput,
    };
    return (
      <div id="product-wrapper">
        <MediaWrapper
          images={images}
        />
        <Checkout
          product={product}
          handlers={handlers}
          quantity={quantity}
          shippingOption={shippingOption}
        />
      </div>
    );
  }
}

export default App;
