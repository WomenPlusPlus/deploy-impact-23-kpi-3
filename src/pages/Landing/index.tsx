import {Content} from 'antd/es/layout/layout';
import {Button, Card} from 'antd';
import './style.scss';
import {useEffect, useState} from 'react';
import {Link} from 'react-router-dom';
import {PlusOutlined, SettingOutlined} from '@ant-design/icons';

export const LandingPage = () => {
	const [state, setState] = useState<{
		error: string | null,
		data: Array<any>,
		loading: boolean,
	}>({
		error: null,
		data: [],
		loading: true,
	});
	useEffect(() => {
		const getCircles = async () => {
			try {
				const response = await fetch('http://localhost:3200/circles')
				const data = await response.json();
				if(response.ok) {
					setState({
						...state,
						data,
						loading: false,
					})
				} else {
					throw Error(data);
				}

			} catch (e: any) {
				setState({
					...state,
					loading: false,
					error: e,
				})
			}
		}
		getCircles();
	}, []);
	return (
		<Content style={{margin: '3rem', overflow: 'initial'}}>
			<div className="circles-container">
				{state.loading && (<span>Loading</span>)}
				{state.error && (<span>error</span>)}
				{
					state.data && state.data.map((c: any) => (
						<Card
							key={c.circle_id}
							title={c.circle_name}
							bordered
							actions={[
								<Link to={`circle/${c.circle_id}/kpis`}>
									<Button type="link" icon={<PlusOutlined/>}>
										New KPI
									</Button>
								</Link>,
								<Link to={`circle/${c.circle_id}/analytics`}>
									<Button type="link" icon={<SettingOutlined />}>
										Configure Data
									</Button>
								</Link>
							]}
						>
							<div>
								{c.circle_description}
							</div>
						</Card>
					))
				}
			</div>
		</Content>
	)
};