import React from 'react';
import ProductDescription from './ProductDescription';

import ProductTable from './ProductTable';

class ProductView extends React.Component{
    render(){
        return (
            <div className = 'row'>
                <div className = 'col-sm-10'>
                    <ProductTable/>
                </div>
                <div className = 'col-sm-2'>
                    <ProductDescription/>
                </div>
                
            </div>
        );
    }
}

export default ProductView;