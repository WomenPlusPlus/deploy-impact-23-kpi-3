import {Avatar, Button, Card, Checkbox, Form, Input, List} from 'antd';
import {Content} from 'antd/es/layout/layout';
import './style.scss';

const data = [
	{
		'gender': 'female',
		'name': {
			'title': 'Miss',
			'first': 'Annetta',
			'last': 'Van Leer',
		},
		'email': 'annetta.vanleer@example.com',
		'picture': {
			'large': 'https://randomuser.me/api/portraits/women/34.jpg',
			'medium': 'https://randomuser.me/api/portraits/med/women/34.jpg',
			'thumbnail': 'https://randomuser.me/api/portraits/thumb/women/34.jpg',
		},
		'nat': 'NL',
	},
	{
		'gender': 'male',
		'name': {
			'title': 'Mr',
			'first': 'Jaime',
			'last': 'Moya',
		},
		'email': 'jaime.moya@example.com',
		'picture': {
			'large': 'https://randomuser.me/api/portraits/men/11.jpg',
			'medium': 'https://randomuser.me/api/portraits/med/men/11.jpg',
			'thumbnail': 'https://randomuser.me/api/portraits/thumb/men/11.jpg',
		},
		'nat': 'ES',
	},
	{
		'gender': 'male',
		'name': {
			'title': 'Monsieur',
			'first': 'Micha',
			'last': 'Fernandez',
		},
		'email': 'micha.fernandez@example.com',
		'picture': {
			'large': 'https://randomuser.me/api/portraits/men/67.jpg',
			'medium': 'https://randomuser.me/api/portraits/med/men/67.jpg',
			'thumbnail': 'https://randomuser.me/api/portraits/thumb/men/67.jpg',
		},
		'nat': 'CH',
	},
	{
		'gender': 'female',
		'name': {
			'title': 'Miss',
			'first': 'Nalan',
			'last': 'Poyrazoğlu',
		},
		'email': 'nalan.poyrazoglu@example.com',
		'picture': {
			'large': 'https://randomuser.me/api/portraits/women/38.jpg',
			'medium': 'https://randomuser.me/api/portraits/med/women/38.jpg',
			'thumbnail': 'https://randomuser.me/api/portraits/thumb/women/38.jpg',
		},
		'nat': 'TR',
	},
	{
		'gender': 'male',
		'name': {
			'title': 'Mr',
			'first': 'Max',
			'last': 'Walker',
		},
		'email': 'max.walker@example.com',
		'picture': {
			'large': 'https://randomuser.me/api/portraits/men/64.jpg',
			'medium': 'https://randomuser.me/api/portraits/med/men/64.jpg',
			'thumbnail': 'https://randomuser.me/api/portraits/thumb/men/64.jpg',
		},
		'nat': 'NZ',
	},
	{
		'gender': 'male',
		'name': {
			'title': 'Mr',
			'first': 'Nathan',
			'last': 'Singh',
		},
		'email': 'nathan.singh@example.com',
		'picture': {
			'large': 'https://randomuser.me/api/portraits/men/70.jpg',
			'medium': 'https://randomuser.me/api/portraits/med/men/70.jpg',
			'thumbnail': 'https://randomuser.me/api/portraits/thumb/men/70.jpg',
		},
		'nat': 'CA',
	},
	{
		'gender': 'male',
		'name': {
			'title': 'Mr',
			'first': 'Farhan',
			'last': 'Christenhusz',
		},
		'email': 'farhan.christenhusz@example.com',
		'picture': {
			'large': 'https://randomuser.me/api/portraits/men/73.jpg',
			'medium': 'https://randomuser.me/api/portraits/med/men/73.jpg',
			'thumbnail': 'https://randomuser.me/api/portraits/thumb/men/73.jpg',
		},
		'nat': 'NL',
	},
	{
		'gender': 'female',
		'name': {
			'title': 'Mrs',
			'first': 'Carla',
			'last': 'Garcia',
		},
		'email': 'carla.garcia@example.com',
		'picture': {
			'large': 'https://randomuser.me/api/portraits/women/39.jpg',
			'medium': 'https://randomuser.me/api/portraits/med/women/39.jpg',
			'thumbnail': 'https://randomuser.me/api/portraits/thumb/women/39.jpg',
		},
		'nat': 'AU',
	},
	{
		'gender': 'male',
		'name': {
			'title': 'Mr',
			'first': 'Brennan',
			'last': 'Simmmons',
		},
		'email': 'brennan.simmmons@example.com',
		'picture': {
			'large': 'https://randomuser.me/api/portraits/men/1.jpg',
			'medium': 'https://randomuser.me/api/portraits/med/men/1.jpg',
			'thumbnail': 'https://randomuser.me/api/portraits/thumb/men/1.jpg',
		},
		'nat': 'IE',
	},
	{
		'gender': 'female',
		'name': {
			'title': 'Mrs',
			'first': 'Marie',
			'last': 'Sørensen',
		},
		'email': 'marie.sorensen@example.com',
		'picture': {
			'large': 'https://randomuser.me/api/portraits/women/73.jpg',
			'medium': 'https://randomuser.me/api/portraits/med/women/73.jpg',
			'thumbnail': 'https://randomuser.me/api/portraits/thumb/women/73.jpg',
		},
		'nat': 'DK',
	},
]

class FieldType {
}

function onFinishFailed() {

}

export const KpisDefinitionPage = () => {
	const onFinish = (values: any) => {
		console.log('Success:', values);
	};

	const onFinishFailed = (errorInfo: any) => {
		console.log('Failed:', errorInfo);
	};

	type FieldType = {
		username?: string;
		password?: string;
		remember?: string;
	};

	return (
		<Content style={{margin: '3rem', overflow: 'initial'}}>
			<div className="kpi-def-container">
				<div className="exiting-kpis-list">
					<h2>Existing KPIs</h2>
					<List
						dataSource={data}
						renderItem={(item) => (
							<List.Item key={item.email}>
								<List.Item.Meta
									title={<a href="https://ant.design">{item.name.last}</a>}
									description={item.email}
								/>
							</List.Item>
						)}
					>
					</List>
				</div>
				<div className='create-kpi-def-form'>
					<Form
						name="basic"
						labelCol={{span: 8}}
						wrapperCol={{span: 16}}
						style={{maxWidth: 600}}
						initialValues={{remember: true}}
						onFinish={onFinish}
						onFinishFailed={onFinishFailed}
						autoComplete="off"
					>
						<Form.Item<FieldType>
							label="Username"
							name="username"
							rules={[{required: true, message: 'Please input your username!'}]}
						>
							<Input/>
						</Form.Item>

						<Form.Item<FieldType>
							label="Password"
							name="password"
							rules={[{required: true, message: 'Please input your password!'}]}
						>
							<Input.Password/>
						</Form.Item>

						<Form.Item<FieldType>
							name="remember"
							valuePropName="checked"
							wrapperCol={{offset: 8, span: 16}}
						>
							<Checkbox>Remember me</Checkbox>
						</Form.Item>

						<Form.Item wrapperCol={{offset: 8, span: 16}}>
							<Button type="primary" htmlType="submit">
								Submit
							</Button>
						</Form.Item>
					</Form>
				</div>
			</div>
		</Content>
	)
}