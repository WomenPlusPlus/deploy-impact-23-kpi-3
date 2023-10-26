import React from 'react';
import {Button, DatePicker, Spin, InputNumber, Form} from 'antd';
import {SFormItemLabel, SFormItem, SCardForm, SSpace} from './styled'

export interface AddValueFormDataProps {
	periodicity: 'DAILY' | 'WEEKLY' | 'MONTHLY' | 'QUARTERLY' | 'YEARLY',
	unit: string,
	unitMin: string | null,
	unitMax: string | null,
	target?: string | null,
	value?: string | null,
}
export interface AddValueFormProps {
	data: AddValueFormDataProps | null,
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
																loading,
																data,
																onSubmit,
															}: AddValueFormProps) => {
	const onFinish = (values: any) => {

		console.log({
			p: values['period']?.format('YYYY-MM-DD HH:mm:ss'),
			v: values['value'],
		})
		// onSubmit(formValues);
	};

	const onChange = (v: string | null) => {
		console.log({v})
	}
	return (
		<SCardForm bordered>
			{
				loading && (
					<SSpace size="large" align="center" direction="horizontal">
						<Spin size="large" />
					</SSpace>
				)
			}
			{data && !loading && (
				<Form
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
							picker={(periodFields[data?.periodicity]) as "week" | "month" | "quarter" | "year" | "time" | "date" | undefined}
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
							min={data.unitMin ? data.unitMin : undefined}
							max={data.unitMax ? data.unitMax : undefined}
							defaultValue={data.value || '0'}
							onChange={onChange}
						/>
					</SFormItem>

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
