import React from 'react'
import { Grid,Header,Segment, Card,Image,Icon,Divider, Button } from 'semantic-ui-react'
import faker from 'faker'
import { withRouter } from 'react-router'
import { connect } from 'react-redux'
import { addToCart,removeFromCart } from '../../Redux/Actions'

class Orders extends React.Component {

    removeCartItem = (cartItem,e,data) => {
        this.props.removeFromCart(cartItem)
    }



    renderTotalAmountBar = (cart) => {
        console.log(cart)
        let totalAmount = cart.reduce((sum,cartItem)=> sum += parseInt(cartItem.subTotal), 0)

        return(
            <Grid.Row >
                    <Grid.Column width={13} >
                    </Grid.Column>
                    <Grid.Column width={3} style={{ fontSize:'1.2em',fontWeight:'bold' }} >
                        Sub Total = $ {totalAmount}
                    </Grid.Column>
            </Grid.Row>
        )
    }

    renderCartItems = (cart) => {
        const image = faker.image.food()
        let cartItems = cart.map(cartItem => {
            return(
                <Grid.Row key={cartItem.itemId} >
                    <Grid.Column width={3} >
                        <Image src={image}  size='medium' style={{borderRadius:10}} />
                    </Grid.Column>
                    <Grid.Column width={3} style={{ fontSize:'1.2em',color:'#000' }} >
                         { cartItem.item.displayName }
                        <br/> <br/> <br/> <br />
                        <Button size={'mini'} onClick={this.removeCartItem.bind(this,cartItem)}> Remove Item </Button>
                    </Grid.Column>
                    <Grid.Column width={4} style={{ fontSize:'1.2em' }} >
                        {cartItem.item.salesPrice} * {cartItem.quantity} = {cartItem.subTotal}
                    </Grid.Column>
                    <Grid.Column width={3} style={{ fontSize:'1.2em', display:'flex' }} >
                        {/* <Icon name='minus circle' color='red' size='large' name={cartItem} onClick={ this.onClickDec } /> */}
                        <span style={{paddingLeft:20,paddingRight:20}}> { cartItem.quantity } </span>
                        {/* <Icon name='add circle' color='green' size='large' /> */}
                    </Grid.Column>
                    <Grid.Column width={3} >
                    </Grid.Column>
                </Grid.Row>
            )
        })
        return cartItems
    }

    render(){
        let { cart } = this.props.ordersState
        let renderedCartItems = this.renderCartItems(cart)
        let renderedTotalAmountBar = this.renderTotalAmountBar(cart)

        return(
            <Grid relaxed centered padded textAlign='center' >
                <Grid.Row>
                    <Grid.Column width={4} >
                        <Header size='large'> Your Cart </Header>
                    </Grid.Column>
                    <Grid.Column width={12} >
                    </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                    <Grid.Column width={6} >
                    </Grid.Column>
                    <Grid.Column width={4} >
                       <Header size="small"> Price </Header>
                    </Grid.Column>
                    <Grid.Column width={3} >
                        <Header size="small"> Quantity </Header>
                    </Grid.Column>
                    <Grid.Column width={3} textAlign="center" >
                        <Button positive size="big"  > 
                                <Icon name="first order" inverted size='big' /> 
                                Place Order
                        </Button>
                    </Grid.Column>
                </Grid.Row>
                <Divider style={{width:'100%'}} />
                { renderedCartItems }
                <Divider style={{width:'100%'}} />
                { renderedTotalAmountBar }
            </Grid>
        )
    }
}

const mapStateToProps = ({ itemsState, ordersState }) => {
    return { itemsState, ordersState }
}

const mapActionsToProps = () => {
    return {
        addToCart,removeFromCart 
    }
}

export default withRouter( connect(mapStateToProps, mapActionsToProps() )(Orders) )
