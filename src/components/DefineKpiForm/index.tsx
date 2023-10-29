import React from 'react';
import {Button, DatePicker, Form, Input, Select, Card, Space, Spin} from 'antd';
import {Radio} from 'antd';
import {SFormItemLabel, SFormItem, SCardForm, SSpace} from './styled'

export interface DefineKpiFormDataProps {
	circles: Array<{ label: string, value: string }>,
	frequencies: Array<{ label: string, value: string }>,
	units: Array<{ label: string, value: string }>,
}
export interface DefineKpiFormProps {
	data: DefineKpiFormDataProps | null,
	loading?: boolean,
	onSubmit: (values: any) => void,
}

type FieldType = {
	circles?: string;
	title?: string;
	periodicity?: string;
	unit?: string;
	// archived_at: string;
	// closed_at: string;
};


export const DefineKpiForm = ({
																loading,
																data,
																onSubmit,
															}: DefineKpiFormProps) => {
	const filterOption = (input: string, option?: { label: string; value: string }) =>
		(option?.label ?? '').toLowerCase().includes(input.toLowerCase());
	const onFinish = (values: any) => {
		const formValues = {
			...values,
			// archived_at: values['archived_at']?.format('YYYY-MM-DD HH:mm:ss') || null,
			// closed_at: values['closed_at']?.format('YYYY-MM-DD HH:mm:ss') || null,
		};
		onSubmit(formValues);
	};

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
					name="define-kpi"
					labelCol={{span: 4}}
					wrapperCol={{span: 16}}
					onFinish={onFinish}
					colon={false}
				>
					<SFormItem<FieldType>
						label={<SFormItemLabel>Circles</SFormItemLabel>}
						name="circles"
						rules={[{required: true, message: 'Please select your circles!'}]}
					>
						<Select
							size="large"
							mode="multiple"
							allowClear
							style={{width: '100%'}}
							placeholder="Please select circle"
							options={data.circles}
						/>
					</SFormItem>

					<SFormItem<FieldType>
						label={<SFormItemLabel>Title</SFormItemLabel>}
						name="title"
						rules={[{required: true, message: 'Please input your KPI title'}]}
					>
						<Input
							size="large"
						/>
					</SFormItem>

					<SFormItem<FieldType>
						label={<SFormItemLabel>Periodicity</SFormItemLabel>}
						name="periodicity"
						rules={[{required: true, message: 'Please input your KPI periodicity'}]}
					>
						<Radio.Group
							buttonStyle="solid"
							size="large"
							style={{width: '100%'}}
						>
							{
								data.frequencies.map((f) => (<Radio.Button key={f.value} value={f.value}>{f.label}</Radio.Button>))
							}
						</Radio.Group>
					</SFormItem>

					<SFormItem<FieldType>
						label={<SFormItemLabel>Unit</SFormItemLabel>}
						name="unit"
						rules={[{required: true, message: 'Please select your unit!'}]}
					>
						<Select
							size="large"
							showSearch
							placeholder="Select a unit"
							optionFilterProp="children"
							filterOption={filterOption}
							options={data.units}
						/>
					</SFormItem>
{/*

					<SFormItem<FieldType>
						label={<SFormItemLabel>Archived At</SFormItemLabel>}
						name="archived_at"
					>
						<DatePicker
							size="large"
							showTime={{format: 'HH:mm'}}
							format="YYYY-MM-DD HH:mm"
							style={{width: '100%'}}
						/>
					</SFormItem>

					<SFormItem<FieldType>
						label={<SFormItemLabel>Closed At</SFormItemLabel>}
						name="closed_at"
					>
						<DatePicker
							size="large"
							showTime={{format: 'HH:mm'}}
							format="YYYY-MM-DD HH:mm"
							style={{width: '100%'}}
						/>
					</SFormItem>
*/}

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
