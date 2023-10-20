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
	const [submissionState, setSubmissionState] = useState<{
		error: string | null,
		data: {} | null,
		loading: boolean,
	}>({
		error: null,
		data: null,
		loading: false,
	});

	const submitKpiDefinition = async (formValues: any)=> {
		setSubmissionState({
			error: null,
			data: null,
			loading: true,
		})
		try {
			const response = await fetch('http://localhost:3200/kpi/create', {
			// const response = await fetch('https://7923-2001-861-5e61-e390-309d-9494-a058-10c9.ngrok-free.app/kpi/create', {
				method: 'PUT',
				body: JSON.stringify({
					...formValues,
					target_year: 2023,
				}),
				headers: { 'Content-Type': 'application/json' },
			});
			const data = response.json();
			setSubmissionState({
				error: null,
				data: data,
				loading: false,
			})
		} catch(e) {
			setSubmissionState({
				error: 'error',
				data: null,
				loading: false,
			})

		}
	}
	useEffect(() => {
		const getValues = async () => {
			try {
				const valuesToFetch = ['circles', 'periodicities', 'units'];
				const data = await Promise.all(
					valuesToFetch.map(v => fetch(
						`http://localhost:3200/${v}`
						// `https://7923-2001-861-5e61-e390-309d-9494-a058-10c9.ngrok-free.app/${v}`
						)
						.then(async (r) => await r.json())
					)
				);
				setState({
					...state,
					data: {
						circles: data[0].map((c: {name: string,id: string }) => ({label: c.name, value: c.id})),
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
				loading={state.loading || submissionState.loading}
				data={state.data}
				onSubmit={submitKpiDefinition}
			/>
		</Content>
	)
}