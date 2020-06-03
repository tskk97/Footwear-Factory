import React from 'react';
import { Link } from 'react-router-dom';
import './module.css'

export default class Cart extends React.Component{
    
    handleRemove = (item) => {
        this.props.handleRemove(item)
    }

    render(){
        const cartArray =  this.props.cartArray
        var sum = 0 
        if(cartArray.length !== 0){
            cartArray.map(function(elem){
                return sum = sum + Number(elem.price)
            }) 
        }

        if(this.props.cartArray.length !== 0){
            return(
                <div>
                    <div className="row mt-5">
                        <div className="col-7">
                            {
                                cartArray && cartArray.map(elem => (
                                    <div className="row no-gutters mb-5 ml-5" key={elem.product}>
                                        <div className="col-md-4 my-auto">
                                            <img src={elem.url} className="card-img rounded-lg" alt=""/>
                                        </div>
                                        <div className="col-md-8">
                                            <div className="card-body col">
                                                <h1 className="text-primary">{elem.product}</h1>
                                                <h4>Price: Rs.{elem.price}</h4>
                                                <h6>Rating: 4.2</h6>
                                                
                                                <button className="btn btn-danger btn-lg font-weight-bold mt-4" onClick={() => this.handleRemove(elem)}>Remove from Cart</button>
                                            </div>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                        <div className="col-5">
                            <div className="row">
                                <div className="col text-left">
                                    <div className="card shadow" style={{width: 25+"rem"}}>
                                        <div className="card-body">
                                            <div className="card-title h1 text-center font-weight-bold">
                                                Summary
                                            </div>
                                            <div className="h3 mt-4">
                                                Total Items: {cartArray.length}
                                            </div>
                                            <div className="h3 mt-4">
                                                Total: Rs.{sum}
                                            </div>
                                            <br/>
                                            <div className="mt">
                                                <button className="btn btn-success btn-lg btn-block font-weight-bold">Buy</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )
        }
        else{
            return(
                <div className="card shadow mx-auto my-5 border-0" style={{width: 50+"rem"}}>
                    <img className="img-fluid mx-auto" src="emptycart.png" alt=" " />
                    <div className="card-body h1 font-weight-bold text-center">
                        Cart is Empty!
                    </div>
                    <div className="h4 text-center">
                        Looks like you have no items in your shopping cart.
                    </div>
                    <div className="h4 text-center mb-5">
                        Click <Link to="/brands">here</Link> to continue shopping.
                    </div>
                </div>
            )
        }
    }
}