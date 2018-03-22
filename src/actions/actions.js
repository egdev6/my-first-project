export const startSearch = search =>{
	return{
		type: 'SEARCH_START',
		search
	}
}

export const successSearch = results =>{
	return{
		type: 'SEARCH_SUCCESS',
		results
	}
}

export const searchRepositories = value =>
	dispatch =>{
		dispatch(startSearch(value));

	    fetch(`https://api.github.com/search/repositories?q=${value}`)
	      .then(res=>{
	        return res.json();
	      })
	      .then(json=>{
	        dispatch(successSearch(json.items));
	      });
	}