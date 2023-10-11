import React from 'react';
import {Routes, Route, Outlet, Link} from 'react-router-dom';
import {Layout, Typography} from 'antd';
import './App.css';
import {KpisDefinitionPage} from './pages/KpisDefinition'
import {LandingPage} from './pages/Landing'
import {NoMatchPage} from './pages/NoMatch'
import {AnalyticsPage} from './pages/Analytics';
 import { StyledHeader ,StyledTitle, StyledMenu} from './styles.js';
import {Menu} from 'antd';
 
 


function App() {
return (
 	<Layout>
	  <StyledHeader>
		<StyledTitle level={4} >
		  Golden Keys
		</StyledTitle>
		<div>
		  <StyledMenu mode="horizontal">
			<Menu.Item>
			  <Link to="/">Home</Link>
			</Menu.Item>
			<Menu.Item>
			  <Link to="/kpis">KPIs</Link>
			</Menu.Item>
			<Menu.Item>
			  <Link to="/analytics">Analytics</Link>
			</Menu.Item>
		  </StyledMenu>
		</div>
	  </StyledHeader>
 		<Routes>

				<Route path="/" element={<Outlet />}>
					<Route index element={<LandingPage />}/>
					<Route path="kpis" element={<KpisDefinitionPage />}/>
					<Route path="analytics" element={<AnalyticsPage />}/>
					<Route path="*" element={<NoMatchPage />}/>
				</Route>
			</Routes>
		</Layout>
 
	);
}

// function App() {
// 	const [state, setData] = useState({
// 		data: null,
// 		loading: true,
// 		error: false,
// 	});
//
// 	useEffect(() => {
// 		const fetchData = async () => {
// 			const response = await fetch('http://localhost:3200/misc-circles-kpis/fake');
// 			const data = await response.json();
// 			setData({
// 				data,
// 				loading: false,
// 				error: false,
// 			});
// 			try {
// 			} catch (e) {
// 				setData({
// 					data: null,
// 					loading: false,
// 					error: true,
// 				});
// 			}
// 		};
// 		fetchData();
// 	}, [])
//
// 	return (
// 		<Layout>
// 			<Header
// 				style={{
// 					position: 'sticky',
// 					top: 0,
// 					zIndex: 1,
// 					width: '100%',
// 					display: 'flex',
// 					alignItems: 'center',
// 					justifyContent: 'flex-start',
// 				}}>
// 				<Title level={4} style={{color: 'lightgrey', margin: 0}}>KPI - 3</Title>
// 				<Button type="link">
// 					Home
// 				</Button>
// 			</Header>
// 			<Content style={{margin: '3rem', overflow: 'initial'}}>
// 				<Row align="middle" justify="center">
// 					<Col span={20}>
// 						<Card title="Card title" bordered>
// 							<div style={{height: 500, width: '100%'}}>
// 								{
// 									state.error && <Title>Error</Title>
// 								}
// 								{
// 									state.loading && <Title>Loading...</Title>
// 								}
// 								{
// 									state.data &&
//                     <ResponsiveContainer width="100%" height="100%">
//                         <BarChart
//                             width={500}
//                             height={300}
//                             data={state.data}
//                             margin={{
// 															top: 5,
// 															right: 30,
// 															left: 20,
// 															bottom: 5,
// 														}}
//                         >
//                             <CartesianGrid strokeDasharray="3 3"/>
//                             <XAxis dataKey="name"/>
//                             <YAxis/>
//                             <Tooltip/>
//                             <Legend/>
//                             <Bar dataKey="pv" fill="#8884d8"/>
//                             <Bar dataKey="uv" fill="#82ca9d"/>
//                         </BarChart>
//                     </ResponsiveContainer>
// 								}
// 							</div>
// 						</Card>
// 					</Col>
// 				</Row>
// 				<Divider/>
// 				<Row align="middle" justify="center">
// 					<Col span={20}>
// 						<Card title="Card title" bordered style={{height: 600}}>
// 							<div style={{height: 500, width: '100%'}}>
// 								{
// 									state.error && <Title>Error</Title>
// 								}
// 								{
// 									state.loading && <Title>Loading...</Title>
// 								}
// 								{
// 									state.data &&
//                     <ResponsiveContainer width="100%" height="100%">
//                         <LineChart
//                             width={500}
//                             height={300}
//                             data={state.data}
//                             margin={{
// 															top: 5,
// 															right: 30,
// 															left: 20,
// 															bottom: 5,
// 														}}
//                         >
//                             <CartesianGrid strokeDasharray="3 3"/>
//                             <XAxis dataKey="name"/>
//                             <YAxis/>
//                             <Tooltip/>
//                             <Legend/>
//                             <Line type="monotone" dataKey="pv" stroke="#8884d8" activeDot={{r: 8}}/>
//                             <Line type="monotone" dataKey="uv" stroke="#82ca9d"/>
//                         </LineChart>
//                     </ResponsiveContainer>
// 								}
// 							</div>
// 						</Card>
// 					</Col>
// 				</Row>
// 			</Content>
// 		</Layout>
// 	);
// }

export default App;
