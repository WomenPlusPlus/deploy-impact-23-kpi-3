import React from 'react';
import {Table, Spin} from 'antd';
import {SKpiTableCard, SSpace} from './styled';

import type { ColumnsType } from 'antd/es/table';

export interface KpisTableProps {
	loading?: boolean,
	rows?: Array<any> | null,
	columns?: ColumnsType<any>,
}

export const KpisTable = ({
														loading,
														rows,
														columns,
													}: KpisTableProps) => {

	return (
		<SKpiTableCard bordered>
			{
				loading && (
					<SSpace size="large" align="center" direction="horizontal">
						<Spin size="large"/>
					</SSpace>
				)
			}
			{rows && (
				<Table dataSource={rows} columns={columns} pagination={false} scroll={{ y: 'calc(100vh - 600px)' }} />
			)}
		</SKpiTableCard>
	)
};
