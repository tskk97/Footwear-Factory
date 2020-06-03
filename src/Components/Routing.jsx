import React from 'react';
import { Link, Route, Switch } from 'react-router-dom'
import Home from './Pages/Home'
import Login from './Pages/Login'
import Brands from './Pages/Brands'
import About from './Pages/About'
import FAQ from './Pages/FAQ'
import ContactUs from './Pages/ContactUs'
import Cart from './Pages/Cart'
import AllProducts from './Pages/AllProducts'
import Product from './Pages/Product'
import './routing.css'

const brands = [
    {
        brand: "nike",
        name: "Nike",
        imgurl: "nike.jpg",
        allproducts: [
            {
                product: "Nike Phantom Run 2",
                price: "9000",
                url: "101.jpg",
                id: 101
            },
            {
                product: "Nike Air Max 2090",
                price: "8000",
                url: "102.jpg",
                id: 102
            },
            {
                product: "Nike Metcon 5",
                price: "9500",
                url: "103.jpg",
                id: 103
            },
            {
                product: "LeBron 17 Low",
                price: "7500",
                url: "104.jpg",
                id: 104
            },
            {
                product: "Nike SB Blazer Low GT",
                price: "10000",
                url: "105.jpg",
                id: 105
            },
            {
                product: "Jordan Max 200",
                price: "8500",
                url: "106.jpg",
                id: 106
            }
        ]
    },
    {
        brand: "adidas",
        name: "Adidas",
        imgurl: "adidas.jpg",
        allproducts: [
            {
                product: "Adidas Sport Drogo",
                price: "9000",
                url: "201.jpg",
                id: 201
            },
            {
                product: "Adidas Running Helkin",
                price: "8000",
                url: "202.jpg",
                id: 202
            },
            {
                product: "Adidas Running Yamo",
                price: "9500",
                url: "203.jpg",
                id: 203
            },
            {
                product: "Adidas Questar Rise",
                price: "7500",
                url: "204.jpg",
                id: 204
            },
            {
                product: "Adidas Running Nebular",
                price: "10000",
                url: "205.jpg",
                id: 205
            },
            {
                product: "Adidas Sport Duramo",
                price: "8500",
                url: "206.jpg",
                id: 206
            }
        ]
    },
    {
        brand: "reebok",
        name: "Reebok",
        imgurl: "reebok.jpg",
        allproducts: [
            {
                product: "Reebok Nano 9",
                price: "9000",
                url: "301.jpg",
                id: 301
            },
            {
                product: "Reebok Floatride Run 2",
                price: "8000",
                url: "302.jpg",
                id: 302
            },
            {
                product: "Reebok Club C Revenge",
                price: "9500",
                url: "303.jpg",
                id: 303
            },
            {
                product: "Reebok Flashfilm Trainer",
                price: "7500",
                url: "304.jpg",
                id: 304
            },
            {
                product: "Reebok Flexagon Force 2",
                price: "10000",
                url: "305.jpg",
                id: 305
            },
            {
                product: "Reebok Forever Energy 2",
                price: "8500",
                url: "306.jpg",
                id: 306
            }
        ]
    },
    {
        brand: "puma",
        name: "Puma",
        imgurl: "puma.jpg",
        allproducts: [
            {
                product: "Puma Ralph Sampson Lo",
                price: "9000",
                url: "401.jpg",
                id: 401
            },
            {
                product: "Puma Cell Phantom",
                price: "8000",
                url: "402.jpg",
                id: 402
            },
            {
                product: "Puma H.ST.20 OG Gold",
                price: "9500",
                url: "403.jpg",
                id: 403
            },
            {
                product: "Puma NRGY Asteroid",
                price: "7500",
                url: "404.jpg",
                id: 404
            },
            {
                product: "Puma Tropus Running",
                price: "10000",
                url: "405.jpg",
                id: 405
            },
            {
                product: "Puma LQDCELL Origin Tech",
                price: "8500",
                url: "406.jpg",
                id: 406
            },
        ]
    },
    {
        brand: "skechers",
        name: "Skechers",
        imgurl: "skechers.png",
        allproducts: [
            {
                product: "Skechers Max Cushion Premier",
                price: "9000",
                url: "501.jpg",
                id: 501
            },
            {
                product: "Skechers Max Cushion Elite",
                price: "8000",
                url: "502.jpg",
                id: 502
            },
            {
                product: "Skechers Max Cushion Lucid",
                price: "9500",
                url: "503.jpg",
                id: 503
            },
            {
                product: "Skechers Max Cushion Tycoon",
                price: "7500",
                url: "504.jpg",
                id: 504
            },
            {
                product: "Skechers Air Varsity",
                price: "10000",
                url: "505.jpg",
                id: 505
            },
            {
                product: "Skechers The Happs 2.0",
                price: "8500",
                url: "506.jpg",
                id: 506
            }
        ]
    },
    {
        brand: "converse",
        name: "Converse",
        imgurl: "converse.jpg",
        allproducts: [
            {
                product: "Chuck Taylor All Star Ultra",
                price: "9000",
                url: "601.jpg",
                id: 601
            },
            {
                product: "One Star Vintage Suede",
                price: "8000",
                url: "602.jpg",
                id: 602
            },
            {
                product: "Seasonal Color Chuck Taylor All Star",
                price: "9500",
                url: "603.jpg",
                id: 603
            },
            {
                product: "Seasonal Color Twill Jack Purcell",
                price: "7500",
                url: "604.jpg",
                id: 604
            },
            {
                product: "Chuck Taylor All Star CX",
                price: "10000",
                url: "605.jpg",
                id: 605
            },
            {
                product: "CONS Louie Lopez Pro",
                price: "8500",
                url: "606.jpg",
                id: 606
            }
        ]
    }
]

const Offers = (props) => {  
    if(props.offers === true){
        return(
            <div className="row py-2 bg-danger text-light">
                <div className="col-11 my-auto text-center h5">
                    <div className="col ml-5">10% discount on all Adidas and Puma Collection! Hurry up, Limited Time Offer!</div>
                </div>
                <div className="col-1 text-right">
                    <div onClick={props.clcik} className="btn text-danger shadow-lg bg-light rounded-circle font-weight-bold display-4">X</div>
                </div>
            </div>
        )
    }
    else{
        return null
    }
}

export default class Routing extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            offers: true,
            isAuth: false,
            cart: 0,
            cartArray: []
        }
    }

    handleOffers = () => {
        this.setState({
            offers: false
        })
    }

    handleAuth = () => {
        this.setState({
            isAuth: !this.state.isAuth,
            offers: true,
            cart: 0,
            cartArray: []
        })
        alert(this.state.isAuth ? "You've Logged Out successfully!" : "You are now Logged In! Continue Shopping")
    }

    addtoCart = (item) => {
        this.setState({
            cart: this.state.cart + 1,
            cartArray: [...this.state.cartArray, item]
        }, () => console.log("Added"))
    }

    removefromCart = (item) => {
        let newcartArray = this.state.cartArray.filter(elem => {
            return elem !== item
        })
        this.setState({
            cart: this.state.cart - 1,
            cartArray: newcartArray
        }, () => console.log("Removed"))
    }

    render(){
        return(
            <div className="container-fluid">
                <Offers clcik={this.handleOffers} offers={this.state.offers}/>
                <div className="row py-4 border shadow h5 bg-light">
                    <div className="col-3">
                        <div className="col">
                        <span className="h3 footwear"><Link to="/">Footwear Factory<img src="shoe.png" alt=""/></Link></span>
                        </div>
                    </div>
                    <div className="col-9 my-auto">
                        <div className="col text-right">
                            <span className="mr-5"><Link to="/brands">Brands</Link></span>
                            <span className="mr-5"><Link to="/login">{this.state.isAuth ? "Logout" : "Login"}</Link></span>
                            <span className="mr"><Link to="/cart"><img className="mr-1" width="25px" src="cart2.png" alt=" "/>Cart</Link></span>
                            <span className="rounded-circle px-2 py-1 bg-primary text-light ml-1">{this.state.cart}</span>
                        </div>
                    </div>
                </div>
                <Switch>
                    <Route path="/" exact component={Home}></Route>
                    <Route path="/brands" exact render={(props) => <Brands brands={brands} {...props} />}></Route>
                    <Route path="/brands/:brand" exact render={(props) => <AllProducts brands={brands} {...props} />}></Route>
                    <Route path="/brands/:brand/:product" render={(props) => <Product cartArray={this.state.cartArray} handleAddtoCart={this.addtoCart} handleRemovefromCart={this.removefromCart} isAuth={this.state.isAuth} brand={brands} {...props} />}></Route>
                    <Route path="/about" component={About}></Route>
                    <Route path="/faq" component={FAQ}></Route>
                    <Route path="/contact-us" component={ContactUs}></Route>
                    <Route path="/login" render={(props) => <Login {...props} isAuth={this.state.isAuth} handleLogin={this.handleAuth} handleLogout={this.handleAuth} />}></Route>
                    <Route path="/cart" render={(props) => <Cart cartArray={this.state.cartArray} handleRemove={this.removefromCart} {...props} />}></Route>
                </Switch>
                <div className="row mt-2 py-4 border shadow h5 bg-light">
                    <div className="col-3">
                        <div className="col">
                            <span className="h3 footwear mr-2"><a href="https://www.instagram.com/tskk97"><img width="45px" src="instagram.png" alt=""/></a></span>
                            <span className="h3 footwear mr-2"><a href="https://www.facebook.com/tskk97"><img width="45px" src="facebook.png" alt=""/></a></span>
                            <span className="h3 footwear mr-2"><a href="https://twitter.com/tskk_97"><img width="45px" src="twitter.png" alt=""/></a></span>
                            <span className="h3 footwear mr-2"><a href="https://github.com/tskk97"><img width="45px" src="github2.png" alt=""/></a></span>
                        </div>
                    </div>
                    <div className="col-6 my-auto">
                        <div className="col text-center text-muted">
                            © Copyright 2020 | Maintained by Saikiran Kumar | All Rights Reserved
                        </div>
                    </div>
                    <div className="col-3 my-auto">
                        <div className="col text-right">
                            <span className="mr-5"><Link to="/about">About</Link></span>
                            <span className="mr-5"><Link to="/faq">FAQ</Link></span>
                            <span className=""><Link to="/contact-us">Contact Us</Link></span>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}