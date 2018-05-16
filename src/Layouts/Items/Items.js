import React from 'react'
import { Grid,Header,Segment, Card,Image,Icon, Label, Menu, Button } from 'semantic-ui-react'
import faker from 'faker'
import axios from 'axios'
import { withRouter } from 'react-router'
import { connect } from 'react-redux'
import { itemSelected,addToCart } from '../../Redux/Actions'

class Items extends React.Component {

    // componentWillUnmount(){
    //     this.props.itemSelected(null)
    // }

    clickBuyNow = (e,data) => {
        this.props.history.push('/orders')
    }

    addToCart = (selectedItem,e) => {
        this.props.addToCart(selectedItem)
    }

    onAssetClick = (assetId,e,data) => {
        console.log('show next image')
    }

    renderAssets = (selectedItem) => {
        const image = faker.image.food()
        console.log(selectedItem.assetRepoResponseMessage)
        if(!selectedItem.assetRepoResponseMessage){
            return null
        }
        const { assetRepoId, assetRepoName } = selectedItem.assetRepoResponseMessage
        
        const assets = <Image src={image} size='small' style={styles.thumbStyle} key={assetRepoId}
                         onClick={this.onAssetClick.bind(this,assetRepoId)} />
        return assets
    }

    onItemClick = (item,e,data) => {
        this.props.itemSelected(item)
    }

    renderItems = (items) => {
        const image = faker.image.food()
        const itemImages = items.map((item,i) => {
            return <Image src={image} size='small' style={styles.thumbStyle} key={i} onClick={this.onItemClick.bind(this,item)} />
        })

        return(
            <div style={{ display:'flex',justifyContent:'flex-start', height:80 }} >
                { itemImages }
            </div>
        )
    }

    getItems = (selectedProduct,allItems) => {
        return selectedProduct.items
    }

    render(){
        const { allProducts, loadingProducts, selectedProduct, allItems, loadingItems, selectedItem  } = this.props
        const items = this.getItems(selectedProduct,allItems)
        
        const renderedAssets = loadingItems === false ?  this.renderAssets(selectedItem)  : null
        const renderedItems = loadingItems === false ? this.renderItems(items) : null
        const image = faker.image.food()

        return(
            <Grid relaxed >
                <Grid.Row columns = {4} >
                    <Grid.Column width={1}>
                        {renderedAssets}
                    </Grid.Column>
                    <Grid.Column width={6} >
                         <Image src={image}  size='huge' style={styles.imageStyle} />
                    </Grid.Column>
                    <Grid.Column width={5}  style={{ marginLeft:30, marginTop:20 }}>
                        <Header size="large"> { selectedItem.displayName } </Header>
                        <br/>
                        <Label size="huge"> $ {selectedItem.salesPrice} </Label>
                        <br/> <br/> <br/> <br/>
                        <div style={{fontSize:16,lineHeight:2}} > Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                            when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
                            It has survived not only five centuries, but also the leap into electronic typesetting,
                             remaining essentially unchanged.  
                        </div>
                        <br/> <br/>
                        <Label size = "large" color="green"> Delivery Time 30 mins </Label>
                        <Label size = "large" color="green"> 2 offers available </Label>
                        { selectedItem.inStock? <Label size = "large" color="green"> In Stock </Label> : null }
                        <br/><br/><br/><br/>
                        { renderedItems }
                    </Grid.Column>
                    <Grid.Column width={3} textAlign='center' style={{paddingTop:40}} >
                            <Button positive size="big" onClick={this.addToCart.bind(this,selectedItem)}  > 
                                <Icon name="cart" inverted size='big' /> 
                                Add To Cart
                            </Button>
                            <br/><br/><br/>
                            <Button color="blue" size="big" onClick={this.clickBuyNow} > 
                                <Icon name="lightning" inverted size='big' />
                                 Buy Now  
                            </Button>
                    </Grid.Column>

                </Grid.Row>
            </Grid>
        )
    }
}

const mapStateToProps = ({ categoriesState, itemsState, productsState }) => {
    const { allCategories, loadingCategories, selectedCategory } = categoriesState
    const { allProducts, loadingProducts, selectedProduct } = productsState
    const { allItems, loadingItems, selectedItem } = itemsState

    return { allProducts, loadingProducts, selectedProduct, allItems, loadingItems, selectedItem,selectedCategory  }
}

const mapActionsToProps = () => {
    return{
        itemSelected,addToCart
    }
}

export default withRouter( connect(mapStateToProps, mapActionsToProps() )(Items) )

const styles = {
    thumbStyle:{
        marginBottom:10,
        marginRight:10,
        marginLeft:5,
        borderRadius:10,
        width:80,
        cursor:'pointer'
    },
    imageStyle:{
        borderRadius:10
    }
}



// {
//       "sku": "sku0",
//       "itemId": "itemId0",
//       "itemName": "itemName0",
//       "displayName": "displayName0",
//       "partNumber": "partNumber0",
//       "productId": "productId0",
//       "partClass": "partClass0",
//       "isDefaultForProduct": false,
//       "assetRepoId": "assetRepoId0",
//       "salesPrice": 0,
//       "listPrice": 0,
//       "buyable": true,
//       "distributorId": "distributorId0",
//       "distributorName": "distributorName0",
//       "startDate": "2017-08-18T17:52:38.771Z",
//       "endDate": "2017-08-18T17:52:38.771Z",
//       "availabilityDate": "2017-08-18T17:52:38.771Z",
//       "lastOrderDate": "2017-08-18T17:52:38.771Z",
//       "endOfServiceDate": "2017-08-18T17:52:38.771Z",
//       "discontinueDate": "2017-08-18T17:52:38.771Z",
//       "sellerId": "sellerId0",
//       "sellerName": "sellerName0",
//       "isBundle": false,
//       "referencedItems": [
//         "referencedItemId0",
//         "referencedItemId1",
//         "referencedItemId2"
//       ],
//       "itemDetailsTemplateId": "itemDetailsTemplateId0",
//       "masterCatalogName": "Master Catalog 1",
//       "manufacturerId": "manufacturerId0",
//       "manufacturerName": "manufacturerName0",
//       "manuPartNumber": "manuPartNumber0",
//       "canBeCustomized": true,
//       "inStock": true,
//       "stockStatus": 0,
//       "markForDelete": false,
//       "restrictionIds": [
//         "restrictionId0",
//         "restrictionId1",
//         "restrictionId2"
//       ],
//       "assetIds": [
//         "assetId0",
//         "assetId1",
//         "assetId2"
//       ]
//     },