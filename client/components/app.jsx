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
      activeImage: {},
      activeColor: 'flame',
      product: {
        productName: '',
        companyName: '',
        itemNumber: 0,
        color: '',
        price: '80.00',
        rating: '5',
        noRatings: 0,
        shoeSizes: [],
        activeColor: 'flame',
      },
      size: null,
      quantity: 1,
      shippingOption: 'ship',
    };
    this.handleImageClick = this.handleImageClick.bind(this);
    this.handleShoeSizeSelect = this.handleShoeSizeSelect.bind(this);
    this.handleQuantityClick = this.handleQuantityClick.bind(this);
    this.handleQuantityInput = this.handleQuantityInput.bind(this);
    this.handleShippingInput = this.handleShippingInput.bind(this);
  }

  componentDidMount() {
    App.fetchImages()
      .then(data => this.setState({
        images: data.rows,
        activeImage: data.rows.find(img => img.size === 'full' && img.color === 'flame'),
      }));

    App.fetchProducts()
      .then(data => this.setState({ product: data }))
      .then(() => {
        const { product } = this.state;
        document.title = product.productName;
      });
  }

  handleImageClick(e) {
    const { dataset } = e.target;
    const { images } = this.state;
    const fullImg = images.find(img => img.color === dataset.color && img.orientation === dataset.orientation && img.size === 'full');
    return this.setState({ activeImage: fullImg });
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
    return this.setState({
      quantity: quantity + val,
    });
  }

  handleQuantityInput(e) {
    const input = Number(e.target.value);
    if (input < 1) {
      return false;
    }
    return this.setState({
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
      images, activeColor, activeImage, product, quantity, shippingOption,
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
          images={images.filter(img => img.color === activeColor && img.size === 'thumb')}
          active={activeImage}
          clickHandler={this.handleImageClick}
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
