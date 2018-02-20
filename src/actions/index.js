export const fetchBlockchain = () => (dispatch) => {	
    fetch(`/last`).then(res => {
    	console.log(res)
    	return res.json()
    })
	.then((response) => {
       	dispatch({type: 'API_BLOCKCHAIN_FULFILLED', payload: response}); 	
	})
  .catch((err) => {
        dispatch({type: 'NETWORK_ERR', payload: err});
  })
}

//get actual chart data action
export const getChart = () => (dispatch) => {
	fetch(`/chart`).then(res => {
    	return res.json()
    })
	.then((response) => {
       	dispatch({type: 'CHART_COORDINATES_FULFILLED', payload: response}); 	
	})
  .catch((err) => {
        dispatch({type: 'NETWORK_ERR', payload: err});
  })
}
