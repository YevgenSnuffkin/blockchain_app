import React from 'react'
import LineChart from 'react-linechart'
import '../stylesheets/chart.css'

const Chart = ({ average, total, chart, onNewClick }) => {
	
	const monthData = chart ? chart.map(function(day){ day.x = chart.indexOf(day);  return day; } ) : [{x:1,y:1}]

	const lastAverage = average ? average.last_data : null

	
	// here i will expose the last 30 day graph of
	// average confirmation time

	console.log(monthData)
	const sdata = [{									
                color: "steelblue", 
                points: monthData            }]

	return(
		<div className = "mainChart" >
			<p>
			Median confirmation time is : {lastAverage} minutes
			</p>

			<p>
			Chart showing confirmation time for last 30 days (in minutes):
			</p>
			<LineChart 
                        width={600}
                        height={400}
                        data={sdata}
                        xLabel="Days"
                        yLabel="Minutes"
            />
		</div>
	)
}

export default Chart;