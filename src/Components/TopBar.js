
import React from 'react'
import { Grid,Segment,Button,Menu, Header, Search, Icon, Label } from 'semantic-ui-react'
import { withRouter } from 'react-router'
import { connect } from 'react-redux'
// import { itemSelected,addToCart } from '../../Redux/Actions'


class TopBar extends React.Component {

    onCartClick = () => {
        this.props.history.push('/orders')
    }

    handleResultSelect = () => {
        return
    }

    handleSearchChange = () => {
        return
    }

    renderSearchBar = () => {
        let results = [{ title:'description',description:'title',image:'none',price:'0' }]
        let value = 'nope'

        return(
            <Grid.Column width={8}>
                    <Search
                        loading={false}
                        onResultSelect={this.handleResultSelect}
                        onSearchChange={this.handleSearchChange}
                        results={results}
                        value={value}
                    />
            </Grid.Column>
        )
    }

    renderHeaderLeft = () => {

        return(
            <Grid.Column width={3} >
                     <Header size="large" inverted style={{ }} > One Commerce </Header> 
            </Grid.Column>
        )
    }

    renderMenuRight = () => {
        return(
            <Grid.Column width={3} >
                    <Header size="large" style={{ color:'#fff' }} > OneCommerce </Header>
            </Grid.Column>
        )
    }

    render(){
        let { cart } = this.props.ordersState

        return(
            <Grid style={{ marginBottom:10 }} >
            <Grid.Row columns={3} style={{ backgroundColor:'#131643', height:70,paddingLeft:20,paddingTop:30 }} >
                { this.renderHeaderLeft() }
                <Grid.Column width={10}>
                </Grid.Column>
                <Grid.Column width={3} textAlign='center' onClick={this.onCartClick} style={{cursor:'pointer'}}  >
                    { cart.length? <span style={styles.numberStyle} > {cart.length} </span> : null }
                    <Icon name="cart" inverted size='big' style={{marginleft:100}} />
                    <span style={{ fontSize:16,color:'#fff' }} > Your Cart </span>
                </Grid.Column>
                {/* { this.renderSearchBar() }
                { this.renderMenuRight() } */}
            </Grid.Row>
            </Grid>
        )
    }
}

// export default withRouter(TopBar)


const mapStateToProps = ({ ordersState }) => {
    return { ordersState }
}

export default withRouter( connect(mapStateToProps, {  })(TopBar) )


const styles = {
    numberStyle:{
        paddingLeft:6,
        paddingRight:6,
        paddingTop:3,
        paddingBottom:3,
        backgroundColor:'#f00',
        borderRadius:6,
        color:'#fff'
    }
}