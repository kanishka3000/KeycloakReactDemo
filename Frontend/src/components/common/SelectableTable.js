import React from 'react';

class SelectableTable extends React.Component{

    state = {selectedRow : -1}
    
    onRowClick = (id)=>{
        this.setState({selectedRow: id});
        this.props.select(id);
    }

    renderColumnNames(){
        return this.props.config.map( column => <th key = {column.name}> {column.display}</th>);
    }

    renderRow(row){
        return this.props.config.map( column => <td key = {column.name}>{row[column.name]}</td> )
    }

    renderBody(){
        return this.props.data.map(row => {
            return (
                <tr key = {row.id} className = { (row.id === this.state.selectedRow)? 'table-primary':''} 
                            onClick = { () => this.onRowClick(row.id)}>{this.renderRow(row)}</tr>
            );
        });
    }

    render(){
        return (
            <React.Fragment>
                <table className = "table table-striped thead-dark table-hover" style = {{cursor: 'pointer'}}>
                <thead>
                    <tr style = {{alignContent:'center'}}>
                        {this.renderColumnNames()}
                    </tr>
                </thead>
                <tbody>
                    {this.renderBody()}
                </tbody>
                </table>
            </React.Fragment>
        );
    }
}

export default SelectableTable;