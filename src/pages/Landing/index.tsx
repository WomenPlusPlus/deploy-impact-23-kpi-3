import {Content} from 'antd/es/layout/layout';
import Card from '../../components/Card';
import './style.scss';
import {useEffect, useState} from 'react';

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
							circle_id={c.circle_id}
							circle_description={c.circle_description}
							circle_name={c.circle_name}
						></Card>
					))
				}
			</div>
		</Content>
	)
};