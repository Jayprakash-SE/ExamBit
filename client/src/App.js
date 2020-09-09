import React from 'react';

import {
	BrowserRouter as Router,
	Switch,
	Route
} from "react-router-dom";

// Material UI
import { CssBaseline, Typography } from '@material-ui/core';

// Components
import NavBar from './components/Nav/Nav'
import Home from './components/Home';
import UploadImage from './components/UploadImage';
import NotFound from './components/404NotFount'

function App() {
	return (
		<Router>
			<CssBaseline />
			<NavBar/>
			<Switch>
				<Route path="/" exact component={Home} />
				<Route path="/upload/:uuid" component={UploadImage} />
				<Route component={NotFound} />
			</Switch>
			<Typography style={{marginTop: "220px"}}>
				This is not an offical site and used as Education experments. 
			</Typography>
		</Router>
	);
}

export default App;
