import {Content} from 'antd/es/layout/layout';
import {CircleCard} from '../../components/CircleCard';
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
				// const response = await fetch('https://7923-2001-861-5e61-e390-309d-9494-a058-10c9.ngrok-free.app/circles')
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
						<CircleCard
							key={c.id}
							circle_id={c.id}
							circle_description={c.description}
							circle_name={c.name}
						></CircleCard>
					))
				}
			</div>
		</Content>
	)
};