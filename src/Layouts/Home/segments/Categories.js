import React, {Component} from 'react'
import { Menu, Grid } from 'semantic-ui-react'
import axios from 'axios'
import { connect } from 'react-redux'
import { categorySelected } from '../../../Redux/Actions'

class Categories extends Component {

    componentWillMount(){
        
    }

    handleItemClick = (e,{name}) => {
        const {allCategories} = this.props
        console.log(name)
        // this.setState({ activeItem: name })
        const selectedCategory = allCategories.filter(category => category.categoryId === name )[0]
        this.props.categorySelected(selectedCategory)
    }

    getMenuItems = (categories,selectedCategory) => {
        return categories.map(category => {
            const { categoryId,categoryName,displayName,parentCategoryId,parentCategoryName,markForDeleted,displaySequenceNumber,productId,
                    products, restrictionIds } = category

            return(
                <Menu.Item name={categoryId} active={selectedCategory.categoryId === categoryId }
                 onClick={this.handleItemClick} key={categoryId} style={styles.menuItem} >
                    {displayName} 
                </Menu.Item>
            )
        })
    }

    getHeadingCategory = () => {
        let headingStyle = { backgroundColor:'#eee', fontSize:'1.1em', marginRight:0 }
        return(
                <Menu.Item name={'heading'} active={false }
                  key={'heading'} style = {headingStyle}  >
                    {'Select a Category'} 
                </Menu.Item>
            )
    }


    render(){
        let { allCategories, loadingCategories, selectedCategory } = this.props
        
        return(
                <Menu vertical style = {styles.menuContainer} >
                    { this.getHeadingCategory() }
                    { loadingCategories ? null  : this.getMenuItems(allCategories,selectedCategory) }
                </Menu>
        )
    }

}

const mapStateToProps = ({categoriesState}) => {
    const { allCategories, loadingCategories, selectedCategory } = categoriesState

    return { allCategories, loadingCategories, selectedCategory }
}

export default connect( mapStateToProps, { categorySelected } )(Categories)

const styles = {
    menuContainer:{
        paddingRight:0,
        backgroundColor:'#fff',
        textAlign:'center',
        height:'100%'
    },
    menuItem:{
        paddingTop:20,
        paddingBottom:20,
        fontSize:16
    }
}

