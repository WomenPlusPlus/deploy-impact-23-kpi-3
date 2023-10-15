import React from "react";
import { Table, Button} from "antd";
import {Link} from 'react-router-dom';

const KpiTable = () => {
  const DataSource = [
    {
      name: {
        title: "Ms.",
        first: " Laura",
        last: "Gorge",
      },
      email: "Laura.gorge@yahoo.com",
    },

    {
      name: {
        title: "MR.",
        first: "Lean",
        last: "Smith",
      },
      email: "Lean.Smith@yahoo.com",
    },
    {
      name: {
        title: "Ms.",
        first: "Juli",
        last: "jay",
      },
      email: "Julie.jay@yahoo.com",
    },
    {
      name: {
        title: "Mr.",
        first: " Laurent",
        last: "Mere",
      },
      email: "Laurent.Mere@yahoo.com",
    },
    {
      name: {
        title: "Ms.",
        first: "Vivi",
        last: "Umri",
      },
      email: "Vivi.Umri@yahoo.com",
    },
  ];
  const columns = [
    {
      title: " KPI Title",
      key: "name",
      dataIndex: ['name','first']
     
    },
    {
      title: "email",
      key: " email",
      dataIndex: "email",
      render: (text: string) => (
        <div>
          <span>{text}</span>

          <Button
          title="Add new Kpi"
          
            style={{
              background: "red",
              width: "100px",
              fontSize: "12px",
              marginLeft: "10px",
            }} 
            type="primary"
            href = " "
          >
            Add new Kpi
          </Button>
        
        </div>
      ),
    },
  ];

  return <Table dataSource={DataSource} columns={columns} />;
};

export default KpiTable;
