import React from 'react'
import LineChart from 'react-linechart'
import '../stylesheets/cart.css'

const Cart = ({ products, total, chart, onNewClick }) => {
	
	const monthData = chart ? chart.chart_data : null
	//<LineChart width={600} height={400} data={chart.data} />
	const lastAverage = products ? products.last_data : null

	// here i will expose the last 30 day graph of
	// average confirmation time

	console.log(monthData)
	const sdata = [
            {									
                color: "steelblue", 
                points: [{x: 1, y: 2}, {x: 3, y: 5}, {x: 7, y: -3}] 
            }]

	return(
		<div className = "mainCart" >
			
			


			Time2
		    {lastAverage}
			<button onClick={onNewClick}>
		    </button>
		</div>
	)
}

export default Cart;