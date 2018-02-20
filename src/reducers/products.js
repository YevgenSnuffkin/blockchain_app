export const products = ( state = {
	      products: [],
        error: null
	  }, action) => {

    switch ( action.type ) {

      	case 'GET_ALL': {
        	  return {
	              ...state,
				        products:  [...state.products, action.payload]
        	  }
      	}

      	case 'NEW_SUBMIT': {
          	return {
          	    ...state,
                products: [...state.products,{
                    name: action.payload.values.title, 
                    price: action.payload.values.price,
                    comment: action.payload.values.comment,
                    tax: action.payload.values.tax
                }]
            }
      	}

        case 'API_BLOCKCHAIN_FULFILLED' : {
            return {
                ...state,
                products:  [...state.products, action.payload]
            }
        }

         case 'CHART_COORDINATES_FULFILLED' : {
            return {
                ...state,
                products:  [...state.products, action.payload]
            }
        }

        case 'EMPTY': {
          return{
            ...state
          }
        }
        
        default: 
            return state
    }
}