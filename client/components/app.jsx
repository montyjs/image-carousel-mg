import React from 'react';
import MediaWrapper from './media-wrapper';
import Checkout from './checkout';
import Carousel from './imageSubComponents/carousel';

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
      carouselPosition: 0,
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
    this.handleCarouselPos = this.handleCarouselPos.bind(this);
    this.handleShoeSizeSelect = this.handleShoeSizeSelect.bind(this);
    this.handleQuantityClick = this.handleQuantityClick.bind(this);
    this.handleQuantityInput = this.handleQuantityInput.bind(this);
    this.handleShippingInput = this.handleShippingInput.bind(this);
    this.handleColorSelect = this.handleColorSelect.bind(this);
  }

  // componentWillUpdate()

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

  handleCarouselPos(e) {
    const { carouselPosition } = this.state;
    const carouselWidth = e.target.parentNode.parentNode.offsetWidth + 120; // 120 is the width of an image container
    const newPosition = e.target.value === 'inc' ? carouselPosition + 400 : carouselPosition - 400;

    if (newPosition < 1 && newPosition > -carouselWidth) {
      this.setState({
        carouselPosition: newPosition,
      });
    }
  }

  // This picks the image out of the carousel and makes it the active image
  handleImageClick(e) {
    // Users can click the image itself or the DIV but only the IMG has the dataset attributes.
    // So, if a user clicks the div, we specify the dataset of the child
    const { dataset } = e.target.tagName === 'DIV' ? e.target.children[0] : e.target;
    const { images } = this.state;
    const fullImg = images.find(img => img.color === dataset.color && img.orientation === dataset.orientation && img.size === 'full');
    // index is used by the imageInfo component. Example: 'Image {index} of 10'
    fullImg.index = Number(dataset.index);
    console.log(dataset);
    return this.setState({ activeImage: fullImg });
  }


  // Checkout handlers
  handleShoeSizeSelect(e) {
    const shoeSize = e.target.value;
    this.setState({
      size: shoeSize,
    });
  }

  handleColorSelect(e) {
    const color = e.target.alt.split(' ')[0];
    const { images } = this.state;
    const newActiveImg = images.find(img => img.color === color && img.size === 'full');
    this.setState({
      activeImage: newActiveImg,
      activeColor: color,
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
      images, activeColor, activeImage, product, quantity, shippingOption, carouselPosition,
    } = this.state;
    const checkoutHandlers = {
      shoeSizeSelect: this.handleShoeSizeSelect,
      handleQuantityClick: this.handleQuantityClick,
      handleQuantityInput: this.handleQuantityInput,
      handleShippingInput: this.handleShippingInput,
      handleColorSelect: this.handleColorSelect,
    };
    const mediaHandlers = {
      handleImageClick: this.handleImageClick,
      handleCarouselPos: this.handleCarouselPos,
    };

    return (
      <div id="product-wrapper">
        <MediaWrapper
          images={images.filter(img => img.color === activeColor && img.size === 'thumb')}
          active={activeImage}
          handlers={mediaHandlers}
          carouselPosition={carouselPosition}
        />
        <Checkout
          product={product}
          handlers={checkoutHandlers}
          quantity={quantity}
          images={images.filter(img => img.size === 'select')}
          shippingOption={shippingOption}
          activeColor={activeColor}
        />
      </div>
    );
  }
}

export default App;
