import React from 'react';
import {Button, Checkbox, Form, Input, Select, Card, Switch} from 'antd';
import { Radio } from 'antd';
import styled from 'styled-components'

export interface DefineKpiFormProps {
	circles: Array<{label: string, value: string}>,
	frequencies: Array<{label: string, value: string}>,
	units: Array<{label: string, value: string}>,
}

const SCardForm = styled(Card)`
	min-width: 100%;
	max-width: 100%;
`

const onFinish = (values: any) => {
	console.log('Success:', values);
};

const onFinishFailed = (errorInfo: any) => {
	console.log('Failed:', errorInfo);
};

type FieldType = {
	circles?: string;
	title?: string;
	periodicity?: string;
	unit?: string;
	archived: boolean;
};


export const DefineKpiForm = ({circles, frequencies, units}: DefineKpiFormProps) => {
	const selectCircles = (values: string[]) => {
		console.log(values);
	}
	const filterOption = (input: string, option?: { label: string; value: string }) =>
		(option?.label ?? '').toLowerCase().includes(input.toLowerCase());

	return (
		<SCardForm bordered>
			<Form
				name="define-kpi"
				labelCol={{span: 4}}
				wrapperCol={{span: 16}}
				onFinish={onFinish}
				onFinishFailed={onFinishFailed}
			>
				<Form.Item<FieldType>
					label="Circles"
					name="circles"
					rules={[{required: true, message: 'Please select your circles!'}]}
				>
					<Select
						size="large"
						mode="multiple"
						allowClear
						style={{width: '100%'}}
						placeholder="Please select circle"
						defaultValue={['hr']}
						onChange={selectCircles}
						options={circles}
					/>
				</Form.Item>

				<Form.Item<FieldType>
					label="KPI title"
					name="title"
					rules={[{required: true, message: 'Please input your KPI title'}]}
				>
					<Input
						size="large"
					/>
				</Form.Item>

				<Form.Item<FieldType>
					label="KPI Periodicity"
					name="periodicity"
					rules={[{required: true, message: 'Please input your KPI periodicity'}]}
				>
					<Radio.Group defaultValue="a" buttonStyle="solid" size="large">
						{
							frequencies.map((f) => (<Radio.Button key={f.value} value={f.value}>{f.label}</Radio.Button>))
						}
					</Radio.Group>
				</Form.Item>

				<Form.Item<FieldType>
					label="Unit"
					name="unit"
					rules={[{required: true, message: 'Please select your unit!'}]}
				>
					<Select
						size="large"
						showSearch
						placeholder="Select a person"
						optionFilterProp="children"
						filterOption={filterOption}
						options={units}
					/>
				</Form.Item>

				<Form.Item<FieldType>
					label="Archived"
					name="archived"
				>
					<Switch />
				</Form.Item>

				<Form.Item wrapperCol={{offset: 16}}>
					<Button type="primary" htmlType="submit">
						Submit
					</Button>
				</Form.Item>
			</Form>
		</SCardForm>
	)
};
