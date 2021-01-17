import React from 'react';
import {connect} from 'react-redux';

import SelectableTable from '../common/SelectableTable';
import {productColomns} from '../../configs/displayNames';
import {fetchProducts, fetchProduct} from '../../actions/product';

class ProductTable extends React.Component{

    componentDidMount(){
        this.props.fetchProducts();
    }

    select = (id)=>{
        this.props.fetchProduct(id);
    }

    render(){
        return (
            <div>
                <SelectableTable select = {this.select} config = {productColomns} data = {this.props.allProducts}/>
            </div>
        );
    }
}
function mapStateToProps(state){
    return {allProducts: state.allProducts};
}
export default connect(mapStateToProps, {fetchProducts, fetchProduct})(ProductTable);