import {
	BrowserRouter as Router,
	Switch,
	Route,
	Link
} from "react-router-dom";

import {Navbar, Icon} from 'react-materialize';
import Login from './pages/login/Login';
import Index from './pages/index/Index';

export default function App(){

	return(
		<Router>
			<Navbar
				alignLinks="right"
				brand={<Link style={{'marginLeft': '10px'}} to={`/`}>Blue market</Link>}
				id="mobile-nav"
				menuIcon={<Icon>menu</Icon>}
				options={{
					draggable: true,
					edge: 'left',
					inDuration: 250,
					onCloseEnd: null,
					onCloseStart: null,
					onOpenEnd: null,
					onOpenStart: null,
					outDuration: 200,
					preventScrolling: true
				}}
			>
				<Link to={`/login`}>Login</Link><br/>
				<Link to={`/`}>Index</Link>
			</Navbar>
			<Switch>
				<Route path={`/login`}>
					<Login />
				</Route>
				<Route path="/">
					<Index />
				</Route>
			</Switch>
		</Router>
	);
}
