import React from 'react';

import '../stylesheets/new.css'

const New = ({ handleSubmit }) => {
    return(
		    <div className="new">
    		    <form onSubmit = { e=> { e.preventDefault()
                    handleSubmit()}}>
                    <button type="submit">Submit</button>
          	    </form>
		    </div>
	)
}

export default New
