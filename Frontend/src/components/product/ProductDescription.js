import React from 'react';
import {connect} from 'react-redux';

import {productionColumnsExtended} from '../../configs/displayNames';
class ProductDescription extends React.Component{

    renderField(field){
        return (
            <div key = {field.display}>
                {field.display} - {this.props.product[field.name]}
            </div>
        );
    }
    renderFields(){
        return productionColumnsExtended.map(
            field => this.renderField(field)
        );
    }

    render(){
        return (
            <div>
            {this.renderFields()}
            </div>
        );
    }
}
function mapStateToProps(state){
    return {product: state.selectedProduct}
}
export default connect(mapStateToProps)(ProductDescription);