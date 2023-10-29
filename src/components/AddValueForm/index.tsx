import React from 'react';
import {Button, DatePicker, Spin, InputNumber, Form} from 'antd';
import {SFormItemLabel, SFormItem, SCardForm, SSpace} from './styled';
import ProgressBar from '../dataviz/ProgressBar'

export interface AddValueFormDataProps {
	id: number,
	periodicity: 'MONTHLY' | 'QUARTERLY' | 'YEARLY',
	unit: string,
	unitMin: string | null,
	unitMax: string | null,
	target?: string | null,
	value?: string | null,
}

export interface AddValueFormProps {
	data: {
		kpiValue: AddValueFormDataProps | undefined,
		kpiSumTarget: {
			total_kpi_value: number,
			target_value: number,
		},
	} | null,
	initialValues?: Record<string, string>,
	loading?: boolean,
	onSubmit: (values: any) => void,
}

type FieldType = {
	period?: string;
	value: string
};

const periodFields = {
	DAILY: undefined,
	WEEKLY: 'week',
	MONTHLY: 'month',
	QUARTERLY: 'quarter',
	YEARLY: 'year',
}

export const AddValueForm = ({
															 initialValues = {},
															 loading,
															 data,
															 onSubmit,
														 }: AddValueFormProps) => {
	const onFinish = (values: any) => {
		onSubmit({
			date: values['period']?.format('YYYY-MM-DD'),
			value: values['value'],
		});
	};

	const onChange = (v: string | null) => {
		console.log({v})
	}
	return (
		<SCardForm bordered>
			{
				loading && (
					<SSpace size="large" align="center" direction="horizontal">
						<Spin size="large"/>
					</SSpace>
				)
			}
			{data && !loading && (
				<Form
					initialValues={initialValues}
					name="add-value-kpi"
					labelCol={{span: 4}}
					wrapperCol={{span: 16}}
					onFinish={onFinish}
					colon={false}
				>
					<SFormItem<FieldType>
						label={<SFormItemLabel>Period</SFormItemLabel>}
						name="period"
						rules={[{required: true, message: `Please enter your period!`}]}
					>
						<DatePicker
							size="large"
							style={{width: '100%'}}
							picker={(periodFields[data.kpiValue?.periodicity || 'MONTHLY']) as 'week' | 'month' | 'quarter' | 'year' | 'time' | 'date' | undefined}
						/>
					</SFormItem>

					<SFormItem<FieldType>
						label={<SFormItemLabel>Value</SFormItemLabel>}
						name="value"
						rules={[{required: true, message: 'Please input your KPI value'}]}
					>
						<InputNumber
							size="large"
							style={{width: '100%'}}
							min={data.kpiValue?.unitMin ? data.kpiValue?.unitMin : undefined}
							max={data.kpiValue?.unitMax ? data.kpiValue?.unitMax : undefined}
							defaultValue={data.kpiValue?.value || '0'}
							onChange={onChange}
						/>
					</SFormItem>

					<div style={{ display: 'flex', width: '80%', justifyContent: 'flex-end' }}>
						<ProgressBar
							percent={+((data.kpiSumTarget.total_kpi_value / data.kpiSumTarget.target_value) * 100).toFixed(2)}
							data={((data.kpiSumTarget.total_kpi_value / data.kpiSumTarget.target_value) * 100).toFixed(2)+'%'}
						/>
					</div>

					<SFormItem wrapperCol={{offset: 18}}>
						<Button type="primary" htmlType="submit" size="large">
							Submit
						</Button>
					</SFormItem>
				</Form>
			)}
		</SCardForm>
	)
};
