
import {Routes, Route, Outlet, Link} from 'react-router-dom';
import {Layout, Typography} from 'antd';
import './App.css';
import {DefinedKpisListPage} from './pages/DefinedKpisList'
import {CreateKpiFormPage} from './pages/CreateKpiForm';
import {AddKpiValueFormPage} from './pages/AddKpiValueForm';
import {LandingPage} from './pages/Landing'
import {NoMatchPage} from './pages/NoMatch'
import { Menu } from 'antd';
import {AnalyticsPage} from './pages/Analytics';
import {EvolutionPage} from './pages/Evolution';
const { Header, Content} = Layout;
const { Title} = Typography;

function App() {
	return (
		<Layout>
			<Header
				style={{
					position: 'sticky',
					top: 0,
					zIndex: 1,
					width: '100%',
					display: 'flex',
					alignItems: 'center',
					justifyContent: 'flex-start',
				}}>
				<Title level={4} style={{color: 'lightgrey', margin: '0 1rem'}}>Golden Keys</Title>
				<div style={{minWidth: 200}}>
					<Menu
						theme="dark"
						mode="horizontal"
					>
						<Menu.Item>
							<Link to="/">Add KPI</Link>
						</Menu.Item>
						<Menu.Item>
							<Link to="circle/circle_id/kpis">Define KPI</Link>
						</Menu.Item>
						<Menu.Item>
							<Link to="circle/circle_id/evolution">Data Dashboard</Link>
						</Menu.Item>
					</Menu>
				</div>
			</Header>
		
			<Routes>
				<Route path="/" element={<Outlet />}>
					<Route index element={<LandingPage/>}/>
					<Route path="circle/:id/kpis/create" element={<CreateKpiFormPage />}/>
					<Route path="circle/:id/kpis/:id/add-value" element={<AddKpiValueFormPage />}/>
					<Route path="circle/:id/kpis" element={<DefinedKpisListPage />}/>
					<Route path="circle/:id/analytics" element={<AnalyticsPage />}/>
					<Route path="circle/:id/evolution" element={<EvolutionPage/>}/>

					<Route path="*" element={<NoMatchPage />}/>
				</Route>
			</Routes>
			
		</Layout>
	);
}

export default App;