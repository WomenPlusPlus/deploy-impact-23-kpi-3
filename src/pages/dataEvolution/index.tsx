import Chart from "./chart";

 
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


export  const DataEvolution = () => (
  <div style={{ background: "#F4F0E0", height: "100%"}}>
   <h1 style={{fontSize: "40px" , textAlign: "start",marginLeft: "200px"}}> Data evolution</h1>
    <Chart
      chartStyle={{ background: "white" , marginLeft : "200px", marginTop: "100px" , fontSize: "15px"}}
      data={data}  
      xKey="name"
      leftYKey="pv"
      rightYKey="uv"
      leftYColor="#FACC48"
      rightYColor="#FACC48"
    />
  </div>
);
