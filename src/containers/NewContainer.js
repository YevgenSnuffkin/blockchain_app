import React from 'react'
import { connect } from 'react-redux'
import New from '../components/New'
import { newSubmitted } from '../actions/'

//chart container where we will get the chart for mining times
//also will have a refresh button
const NewContainer = ({ newSubmitted, fields }) => (
  	<New
  		handleSubmit = {(item) => newSubmitted(item)}
  	/>
)

const mapStateToProps = (item) => {
	return {
		item: newSubmitted(item)	
	}
}

export default connect(
	mapStateToProps,
	{ newSubmitted }
)( NewContainer )