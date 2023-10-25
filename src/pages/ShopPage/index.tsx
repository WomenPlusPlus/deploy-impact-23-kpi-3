import {Content} from 'antd/es/layout/layout';
import {useEffect, useState} from 'react';
import {Alert, Spin, Typography} from 'antd';
import {SCardViz, SpinnerViz} from './styled';
import Barchart from '../../components/dataviz/Barchart';

const {Title} = Typography;

export const ShopPage = () => {

    const [barchartData, setBarchartData] = useState<{
        error: string | null;
        data: Array<any> | null;
        loading: boolean;
    }>({
        error: null,
        data: null,
        loading: true,
    });

    useEffect(() => {
        const fetchBarchartData = async () => {
            try {
                const response = await fetch('http://localhost:3200/shop/electronics-turnover');
                if (!response.ok) {
                    throw new Error('HTTP error! Status: ' + response.status);
                }
                const data = await response.json();
                setBarchartData({
                    data,
                    loading: false,
                    error: null,
                });
            } catch (error: any) {
                setBarchartData({
                    data: null,
                    loading: false,
                    error: error.message as string,
                });
            }
        };

        fetchBarchartData();

    }, []);

    return (
        <Content style={{margin: '3rem', overflow: 'initial'}}>
            <div>
                <Title level={2}>Electronics turnover</Title>
            </div>
            <SCardViz bordered>
                {barchartData.loading ? (
                    <SpinnerViz>
                        <Spin size="large"/>
                    </SpinnerViz>
                ) : barchartData.error ? (
                    <Alert
                        style={{width: '300px', height: '250px', fontSize: '20px'}}
                        message="Error"
                        description={`ERROR! We couldn't fetch the data. 
						  Refresh the page or try again later`}
                        type="error"
                        showIcon
                    />
                ) : (
                    <Barchart
                        width={600}
                        height={400}
                        data={barchartData.data}
                        xKey="formatted_date"
                        leftYKey="turnover"
                        leftYColor="#FACC48"
                    />
                )}
            </SCardViz>

        </Content>
    );
};
