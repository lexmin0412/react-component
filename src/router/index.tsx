import React from 'react'
import {BrowserRouter as Router, Route} from "react-router-dom";

import HomeIndex from './../pages/home'

export default () => {
	return (
		<Router basename='react-component'>
			<Route path="/" exact component={HomeIndex} />
			<Route path="/home/index" component={HomeIndex} />
		</Router>
	)
}
