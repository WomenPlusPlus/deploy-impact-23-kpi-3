import Card from "antd/es/card";
import Barchart from "./Barchart";
 
 
const data = [
    {
    name: "Jan",
    uv: 6000,
    pv: 2400,
    amt: 2000
},
{
    name: "Feb",
    uv: 4000,
    pv: 2000,
    amt : 1800
},
{
    name : "Mar",
    uv : 3000,
    pv : 1200, 
    amt : 1600
},
{
    name: "Apr",
    uv: 4200,
    pv: 1400,
    amt: 1000
},
{
    name: "May",
    uv: 5000,
    pv: 2200,
    amt : 1200
},
{
    name : "Jun",
    uv : 1000,
    pv : 2200,
    amt : 2600
}
  ]

export default function Evolution() {

return (
   
  <Card>
     <Barchart
      chartStyle={{ background: "white" , marginLeft : "200px", marginTop: "100px" , fontSize: "15px"}}
      data={data}  
      xKey="name"
      leftYKey="pv"
      rightYKey="uv"
      leftYColor="#FACC48"
      rightYColor="#FACC48"
    />
   </Card>
   
);
}
