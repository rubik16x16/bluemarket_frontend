import './App.css';
import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css';

import {
	BrowserRouter as Router,
	Switch,
	Route
} from "react-router-dom";

import UserApp from './modules/user/App';
import AdminApp from './modules/admin/App';

export default function App() {
	return (
		<div className="App">
			<Router>
				<Switch>
					<Route path="/admin">
						<AdminApp />
					</Route>
					<Route path="/">
						<UserApp />
					</Route>
				</Switch>
			</Router>
		</div>
	);
}
