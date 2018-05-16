import React from 'react'
import { Grid,Header,Segment, Card,Image,Icon } from 'semantic-ui-react'
import faker from 'faker'
import axios from 'axios'
import { withRouter } from 'react-router'
import { connect } from 'react-redux'
import { productSelected } from '../../../Redux/Actions'


class Products extends React.Component {

    onProductClick = (productId,e,data) => {
        const { allProducts } = this.props
        console.log(productId)

        const selectedProduct = allProducts.filter(product =>  product.productId === productId )[0]
        this.props.productSelected(selectedProduct)
        this.props.history.push('/items')

    }

    renderProducts = (products,selectedProduct) => {
        console.log(products)
        return products.map(product => {
            const { productId,productName,displayName,masterCatalogId,productDetails,items,assetId,markForDeleted,restrictionIds } = product
            let image = faker.image.food()
            let price = faker.commerce.price()
            return(
                <Grid.Column key={productId}>
                      <Card style={styles.cardStyle} onClick = {this.onProductClick.bind(this,productId) } >
                        <Image src={image} size='large' />
                        <Card.Content>
                        <Card.Header>
                            {productName}
                        </Card.Header>
                        {/* <Card.Meta>
                            <span style={styles.priceText} >
                             $ {price}
                            </span>
                        </Card.Meta> */}
                        <Card.Description>
                            {productDetails}
                        </Card.Description>
                        </Card.Content>
                        <Card.Content extra>
                        <div>
                            <Icon name='bookmark' />
                            { items.length } variants
                        </div>
                        </Card.Content>
                    </Card>
                </Grid.Column>
            )
        })
    }

    getCategoryProducts = (selectedCategory,allProducts) => {
        //return allProducts
        console.log(selectedCategory)
        console.log(allProducts)
        if(selectedCategory.products.length > 0){
            return selectedCategory.products
        }
        const selectedCategoryId = selectedCategory.categoryId
        return allProducts.filter(product => product.categoryId === selectedCategoryId )
    }

    render(){

        const { allProducts, loadingProducts, selectedProduct, allCategories, loadingCategories, selectedCategory }  = this.props
        console.log(loadingProducts)
        return(
            <Grid padded relaxed stackable style={styles.gridStyle} >
                <Grid.Row columns = {4} >
                    { loadingProducts? null :
                       this.renderProducts( this.getCategoryProducts(selectedCategory,allProducts) , selectedProduct) } 
                </Grid.Row>
            </Grid>
        )
    }

}

const mapStateToProps = ({productsState, categoriesState }) => {
    const { allProducts, loadingProducts, selectedProduct } = productsState
    const { allCategories, loadingCategories, selectedCategory } = categoriesState

    return { allProducts, loadingProducts, allCategories, loadingCategories, selectedCategory }
}

export default withRouter( connect(mapStateToProps, { productSelected })(Products) )

const styles = {
    gridStyle:{
        width:'90%',
        flex:8,

    },
    cardStyle:{
        width:'100%',
        marginBottom:'2em'
    },
    priceText:{
        fontSize:16,
        color:'#555'
    }
}