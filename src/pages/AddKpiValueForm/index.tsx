import { AddValueFormDataProps} from '../../components/AddValueForm/';
import {Content} from 'antd/es/layout/layout';
import { Typography } from 'antd';
import {useEffect, useState} from 'react';
import {AddValueForm} from '../../components/AddValueForm';
import {useLocation} from 'react-router-dom';

const { Title } = Typography;
export const AddKpiValueFormPage = () => {
	const { pathname} = useLocation();
	const kpiId = pathname.split('/').at(-2);

	const [state, setState] = useState<{
		error: string | null,
		data: AddValueFormDataProps | null,
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

	const submitAddValue = async (formValues: any)=> {
		setSubmissionState({
			error: null,
			data: null,
			loading: true,
		})
		try {
			const response = await fetch(`http://localhost:3200/kpi/${state.data?.id}/add-value?userId=${2}`, {
				method: 'PUT',
				body: JSON.stringify(formValues),
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
				const valuesToFetch = [`kpi/${kpiId}/constraints`];
				const data = await Promise.all(
					valuesToFetch.map(v => fetch(
							`http://localhost:3200/${v}`
						)
							.then(async (r) => await r.json())
					)
				);
				setState({
					...state,
					data: data[0] as unknown as AddValueFormDataProps,
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
			<AddValueForm
				loading={state.loading || submissionState.loading}
				data={state.data}
				onSubmit={submitAddValue}
			/>
		</Content>
	)
}