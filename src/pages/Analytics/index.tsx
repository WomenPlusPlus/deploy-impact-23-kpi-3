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
				const response = await fetch('http://localhost:3200/kpi/economist-list?economistId=2');
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
				<Title level={2}>Circle Name here</Title>
			</div>
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
						title: 'Progress',
						dataIndex: 'kpi_value',
						key: 'kpi_value',
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
								<Button type="primary" style={{ borderRadius: 0, fontWeight: 600 }}>
									Add Value
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