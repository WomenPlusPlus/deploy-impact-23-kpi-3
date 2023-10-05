import "./Form.css"
import { useState } from "react";



const defaultFormData = {
  Circle: "",
  KPI: "",
  Periodicity: "",
  Range: "",
  DataType:" "

};
export default function Form (){

 const[ formData, setFormData] = useState(defaultFormData);
 const { Circle, KPI,Periodicity,Range,DataType} = formData;
 
 const onChange = (e:React.ChangeEvent<HTMLInputElement>)   => {
      setFormData((prevState)=>({
      ...prevState,
      [e.target.name]:e.target.value,

      }));
 };
   const onSubmit = (e:React.FormEvent<HTMLFormElement>)=> {
    e.preventDefault();
    console.log(formData);
     
     setFormData(defaultFormData);
     };



    return (
        <>
        <form onSubmit={onSubmit}>
            <div className="form">
              <div className="form-container">
                   <div className="input-container">
                    <label>KPI Form</label>
                    
                        <label>Circle:
                    <input type= "text" name="Circle" value={Circle } onChange={onChange}/>
                    </label>
                  <label>KPI: <input type="text" name = "KPI" value= {KPI} onChange={onChange}/>
                         </label>
                         <label>Periodicity:<input type="text" name="Periodicity" value={Periodicity} onChange={onChange}
                          />
                          </label>
                          <label>Range:<input type="text" name="Range"  value={Range}onChange={onChange}
                      /> 
                      </label>
                      <label>DataType:<input type="text" name="DataType" value={DataType} onChange={onChange}
                      /> </label>

                           </div>
       
              <div className="save-btn-container">
            <button className="btn-save-btn">Submit</button>
          </div>
          
          </div>
       </div>
          </form>
     </>
       
 );
    }
    
