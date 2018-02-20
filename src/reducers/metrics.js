export const average = ( state = {
	    chart: [],
        average: {},
        average_last: {},
        error: null
	  }, action) => {

    switch ( action.type ) {

        case 'API_BLOCKCHAIN_FULFILLED' : {
            return {
                ...state,
                average: {ave:action.payload}
            }
        }

        case 'CHART_COORDINATES_FULFILLED' : {
            return {
                ...state,
                chart: action.payload
            }
        }

        case 'NETWORK_ERR': {
            return{
                ...state,
                error: action.payload
            }
        }
        
        default: 
            return state
    }
}