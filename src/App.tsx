import { BrowserRouter,Route,Routes } from 'react-router-dom';
import Form from './form/Form';
import './App.css';



function App() {
	 return(



		<BrowserRouter>
		<Routes>
			<Route path="/" element = {<Form/>}/>
			
		</Routes>
	</BrowserRouter>
);
}

export default App;
