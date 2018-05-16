
import React from 'react'
import './styles.css'
import { Grid,Segment,Button,Menu, Header, Search } from 'semantic-ui-react'
import {  Categories, Products } from './segments'
import { connect } from 'react-redux'
// import { Switch, Route } from 'react-router'
import { seedCategories, seedProducts,seedItems } from '../../Redux/Actions'

class Home extends React.Component {

    componentWillMount(){
        this.props.seedCategories()
        this.props.seedProducts()
        this.props.seedItems()
    }

    render(){
        return(
            <div>
                <div style={styles.gridDivisor} >
                    <Categories />
                    <Products />
                    {/* <Switch>
                        <Route path="/products" component={Products}/>
                    </Switch> */}
                </div>
            </div>
        )
    }
}

const mapActionsToProps = () => {
    return {
        seedCategories, seedProducts,seedItems
    }
}

export default connect( null, mapActionsToProps() )(Home)

const styles = {
    gridDivisor:{
        display:'flex',
        justifyContent:'center',
    }
}