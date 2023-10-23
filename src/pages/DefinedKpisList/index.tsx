import {Content} from 'antd/es/layout/layout';
import {Button, Typography} from 'antd';
import {KpisTable} from '../../components/KpisTable';
import {Link} from 'react-router-dom';
import React, {useEffect, useState} from 'react';

const {Title} = Typography;


export const DefinedKpisListPage = () => {
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
				const response = await fetch(
					'http://localhost:3200/kpi/gatekeeper-list?gatekeeperId=3'
					// 'https://7923-2001-861-5e61-e390-309d-9494-a058-10c9.ngrok-free.app/kpi/gatekeeper-list?gatekeeperId=3'
				);
				const rows = await response.json();
				setState({
					...state,
					data: rows,
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
				<Title level={2}>KPIs Database</Title>
			</div>
			<Link to={`create`}>
				<Button type="primary">
					Add New KPI
				</Button>
			</Link>
			<div style={{ height: 100 }} className="to_be_removed">
				&nbsp;
			</div>
			<KpisTable
				columns={[
					{
						title: 'KPI Title',
						dataIndex: 'kpi_title',
						key: 'kpi_title',
					},
					{
						title: 'Assigned Circles',
						dataIndex: 'assigned_circles',
						key: 'assigned_circles',
					},
					{
						title: 'Economist',
						dataIndex: 'economist_names',
						key: 'economist_names',
					},
					{
						title: 'Last Entry Date',
						dataIndex: 'last_entry_date',
						key: 'last_entry_date',
					},
					{
						title: '',
						dataIndex: 'kpi_id',
						key: 'kpi_id',
						render: (_, kpi_id: string) => (
							<Link to={`circle/${kpi_id}/kpis`}>
								<Button type="primary">
									Edit KPI
								</Button>
							</Link>
						),
					},
				]}
				loading={state.loading}
				rows={state.data}
			></KpisTable>
		</Content>
	)
}