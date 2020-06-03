import React from 'react';
import { Link, Redirect } from 'react-router-dom';

export default class Product extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            flag: 0,
            status: false,
            buttonTxt: "Add to Cart"
        }
    }

    handleClick = (details) => {
        if(this.props.isAuth === false){
            this.setState({
                flag: 1
            })
            alert("You are not Logged in! Redirecting to Login...")
        }
        else{
            if(this.state.status === false){
                this.setState({
                    status: true,
                    buttonTxt: "Remove from Cart"
                })
                this.props.handleAddtoCart(details)
            }
            else{
                this.setState({
                    status: false,
                    buttonTxt: "Add to Cart"
                })
                this.props.handleRemovefromCart(details)
            }
        }
    }

    componentDidMount(){
        const cartArray = this.props.cartArray
        const brand = this.props.brand.find((elem) => elem.brand === this.props.match.params.brand)
        const item = brand.allproducts.find((elem) => Number(elem.id) === Number(this.props.match.params.product))
        for(var i = 0; i < cartArray.length; i++){
            if(cartArray[i] === item){
                this.setState({
                    status: true,
                    buttonTxt: "Remove from Cart"
                })
            }
        }
    }

    render(){
        const brands = this.props.brand
        const { match } = this.props
        const { isAuth } = this.props.isAuth
        const brand = brands.find((elem) => elem.brand === match.params.brand)
        const details = brand.allproducts.find((elem) => Number(elem.id) === Number(match.params.product))

        if(!isAuth && this.state.flag === 1){
            return(
                <Redirect to="/login" />
            )
        }
        else{
            return(
                <div className="row my-5">
                    <div className="col-6">
                        <div className="col mx-auto">
                            <img src={details.url} className="img-fluid shadow-lg" alt=" "/>
                        </div>
                    </div>
                    <div className="col-6">
                        <div className="col">
                            <div className="display-4 font-weight-bold">
                                {details.product}
                            </div>
                            <div className="h6">By: <Link to={`/brands/${match.params.brand}`}>{brand.name}</Link></div>
                            <div className="h2 mt-5">
                                Price: Rs.{details.price}
                            </div>
                            <div className="mt-5">
                                <button className={this.state.status ? "btn btn-danger btn-lg font-weight-bold" : "btn btn-success btn-lg font-weight-bold"} onClick={() => this.handleClick(details)}>{this.state.buttonTxt}</button>
                            </div>
                        </div>
                    </div>
                </div>
            )
        }
    }
}