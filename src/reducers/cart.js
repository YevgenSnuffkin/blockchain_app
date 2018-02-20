export const cart = ( state = {
    total: 0,
    taxes: [],
    netto: 0,
    showNew: false
}, action) => {

    switch ( action.type ) {
      	case 'GET_TOTAL': {
            return {
	              ...state,
				        total: 2,
                taxes: action.payload.taxes,
                netto: 1
        	  }
      	}
        case 'NEW': {
            return {
                showNew: true
            }
        }
        default: 
            return state
    }
}
