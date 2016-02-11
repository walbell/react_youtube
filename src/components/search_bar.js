import React, { Component } from 'react';

class SearchBar extends Component {
    constructor(props) {


    	super(props); //call the parent constructor class (Component in the example)

    	this.state = {
    		term: ''    				  
    	};
    }

    render() {
        return (
        	<div className='search-bar'>
	        	<input	
	        	onChange={(event) => this.onInputChange(event.target.value)} />
        	</div>
        );
    }

    onInputChange (term) {
    	this.setState({term});
    	this.props.onTextChange(term);
    }

}

export default SearchBar;
