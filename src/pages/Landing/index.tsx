import {Content} from 'antd/es/layout/layout';
import {circles} from '../../utils/constants';
import {Card} from 'antd';
import './style.scss';

export const LandingPage = () => (
	<Content style={{margin: '3rem', overflow: 'initial'}}>
		<div className="circles-container">
			{
				circles.map((c) => (
					<Card title={c.label} bordered style={{ margin: '1rem' }}>
						<div style={{height: 100, minWidth: 300}}>
							{c.description}
						</div>
					</Card>
				))
			}
		</div>
	</Content>
);