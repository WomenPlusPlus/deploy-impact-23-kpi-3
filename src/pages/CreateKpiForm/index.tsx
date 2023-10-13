import {DefineKpiForm, DefineKpiFormDataProps} from '../../components/DefineKpiForm';
import {Content} from 'antd/es/layout/layout';
import { Typography } from 'antd';
import {useEffect, useState} from 'react';

const { Title } = Typography;
export const CreateKpiFormPage = () => {
	const [state, setState] = useState<{
		error: string | null,
		data: DefineKpiFormDataProps | null,
		loading: boolean,
	}>({
		error: null,
		data: null,
		loading: true,
	});
	useEffect(() => {
		const getValues = async () => {
			try {
				const valuesToFetch = ['circles', 'periodicities', 'units'];
				const data = await Promise.all(
					valuesToFetch.map(v => fetch(`http://localhost:3200/${v}`)
						.then(async (r) => await r.json())
					)
				);
				setState({
					...state,
					data: {
						circles: data[0].map((c: {circle_name: string,circle_id: string }) => ({label: c.circle_name, value: c.circle_id})),
						frequencies: data[1].map((f: string) => ({label: f, value: f})),
						units: data[2].map((u: {unit: string}) => ({label: u.unit.toUpperCase(), value: u.unit})),
					},
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
		<Content style={{margin: '3rem', overflow: 'initial' }}>
			<div>
				<Title level={2}>Add New KPI</Title>
			</div>
			<DefineKpiForm
				loading={state.loading}
				data={state.data}
			/>
		</Content>
	)
}