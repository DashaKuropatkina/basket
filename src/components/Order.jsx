import React, { Component } from 'react'

export class Order extends Component {
    render() {
        return (
            <div className='item'>
                <img src={"./img/" + this.props.item.img} />
                <h2>{this.props.item.title}</h2>
                <p>{this.props.item.article}</p>
                <b>{this.props.item.price}$</b>
                <div className='delete-icon' onClick={() => this.props.onDelete(this.props.item.id)}>Delete</div>
            </div>
        )
    }
}

export default Order