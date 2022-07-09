import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Items from './components/Items';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      orders: [],
      items: [
        {
          id: 1,
          title: 'Men\'s T\-Shirt',
          img: 'tshirt.jpg',
          article: 'sh265',
          quantity: '1',
          price: '100.00'
        },
        {
          id: 2,
          title: 'Women\'s Jacket',
          img: 'jacket.jpg',
          article: 'jk394',
          quantity: '1',
          price: '250.00'
        },
        {
          id: 3,
          title: 'Men\'s Jeans',
          img: 'jeans.jpg',
          article: 'jn475',
          quantity: '1',
          price: '150.00'
        }
      ]
    }
    this.addToOrder = this.addToOrder.bind(this)
    this.deleteOrder = this.deleteOrder.bind(this)
  }
  render() {
    return (
      <div className="wrapper">
        <Header orders={this.state.orders} onDelete={this.deleteOrder} />
        <Items items={this.state.items} onAdd={this.addToOrder} />
        <Footer />
      </div>
    )
  }

  deleteOrder(id) {
    this.setState({orders: this.state.orders.filter(el => el.id !== id)})
  }

  addToOrder(item) {
    let isInArray = false
    this.state.orders.forEach(el => {
      if (el.id === item.id)
        isInArray = true
    })
    if (!isInArray)
      this.setState({orders: [...this.state.orders, item]})
  }
}

export default App;
