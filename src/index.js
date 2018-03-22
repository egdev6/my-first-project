// Styles
import './index.css';

//redux
import store from './store';
import {Provider} from 'react-redux';

// Importamos las distintas librerias
import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, hashHistory} from 'react-router';

// Importamos los componentes
import BaseContainer from './containers/BaseContainer';
import DetailsContainer from './containers/DetailsContainer';
import About from './components/About';

ReactDOM.render(
	<Provider store={store}>
	  	<Router history={hashHistory}>
		  	<Route path="/" component={BaseContainer}>
		  		<Route path=":user/:repo" component={DetailsContainer}/>
		  		<Route path="/about" component={About}/>
		  	</Route>
	  	</Router>
	</Provider>,
  	document.getElementById('root')
);
