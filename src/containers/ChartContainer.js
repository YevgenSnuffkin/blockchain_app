import React from 'react'
import { connect } from 'react-redux'
import Chart from '../components/Chart'
import { getChart } from '../actions/'

//average time container where average time from api will be displayed
const ChartContainer = ({ average, total, getChart, chart }) => (
	<Chart
    average={average}
    total={total}
    chart = {chart}
    onNewClick={() => getChart()} />
)


const mapStateToProps = state => {	
	return{
		average: state.average.average.ave,
		chart: state.average.chart.chart_data
	}
}


export default connect(
	mapStateToProps,
	{ getChart }
)( ChartContainer )