import React from 'react';

const SearchBox = ( {SearchChange} ) => {
	return (
		<div className = "pa2 tc">
		<input className = "pa2 ba b--green bg-lightest-blue" type="search" placeholder = "Search For Robots" onChange={SearchChange} />
		</div>
		);
}

export default SearchBox;