import {Content} from 'antd/es/layout/layout';
import {Button, Typography} from 'antd';
import {KpisTable} from '../../components/KpisTable';
import {Link} from 'react-router-dom';
import React, {useEffect, useState} from 'react';

const {Title} = Typography;


export const AnalyticsPage = () => {
	const [state, setState] = useState<{
		error: string | null,
		data: Array<any> | null,
		loading: boolean,
	}>({
		error: null,
		data: null,
		loading: true,
	});
	useEffect(() => {
		const getValues = async () => {
			try {
				// const response = await fetch('https://7923-2001-861-5e61-e390-309d-9494-a058-10c9.ngrok-free.app/kpi/economist-list?economistId=2');
				const response = await fetch('http://localhost:3200/kpi/economist-list?economistId=2');
				const rows = await response.json();
				setState({
					...state,
					data: rows.map((r: {key: string}, i: number) => ({...r, key: `${r.key}-${i}`})),
					loading: false,
				})

			} catch (e: any) {
				setState({
					...state,
					loading: false,
					error: e,
				})
			}
		}
		getValues();
	}, []);


	return (
		<Content style={{margin: '3rem', overflow: 'initial'}}>
			<div>
				<Title level={2}>Circle Name here</Title>
			</div>
			<div style={{ height: 100 }} className="to_be_removed">
				&nbsp;
			</div>
			<KpisTable
				columns={[
					{
						title: 'KPI Title',
						dataIndex: 'name',
						key: 'name',
					},
					{
						title: 'Periodicity',
						dataIndex: 'periodicity',
						key: 'periodicity',
					},
					{
						title: 'Unit',
						dataIndex: 'unit',
						key: 'unit',
					},
					{
						title: '',
						dataIndex: 'id',
						key: 'id',
						render: (_, {id}) => {
							return (<Link to={`/circle/1/kpis/${id}/add-value`}>
								<Button type="primary">
									Add Value
								</Button>
							</Link>)
						},
					},
				]}
				loading={state.loading}
				rows={state.data}
			></KpisTable>
		</Content>
	)
}