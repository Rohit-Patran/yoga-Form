import {useNavigate} from "react-router-dom";
import axios from "axios";
import { useState } from "react";
import "../../src/index.css";
import "../Css/Form.css";

const Form = () => {
    const options = [
        {
          label : "Select Timing",
          value : "Select Timing"
        },
        {
          label : "6AM-9AM",
          value : "6AM-9AM"
        },
        {
          label : "7AM-8AM",
          value : "7AM-8AM"
        },
        {
          label : "8AM-9AM",
          value : "8AM-9AM"
        },
        {
          label : "5PM-6PM",
          value : "5PM-6PM"
        }
      ];
      const [data , setData] = useState({
        fullname : "",
        age : "",
        date : "",
        amount : "500",
        batch : ""
      });
      
      const handleChange = (event) => {
        setData({...data , [event.target.name] : event.target.value})
      };
    
      const [ message , setMessage ] = useState("");

      const navigate = useNavigate();

      const completePayment = (event) =>
      {
        event.preventDefault();
        var valid = null;
        for(let key in data)
        {
          if(data[key].length === 0 || data.age < 18 || data.age > 65)
          {
            valid = false;
            setMessage("Please check Input");
            break;
          }
          valid = true;
        }
        if(valid)
        {
          const URL = "/api/register-user"
          axios.post(URL , data)
          .then(res => {
            if(res.status === 200)
            {
              setMessage(res.data.message);
              console.log(res.data.message);
              setTimeout(() => {
                navigate("/success");
              } , 2000);
            }
          })
          .catch(error => {
            if(error.response.status === 400)
            {
              setMessage(error.response.data.message);
              setTimeout(() => {
                navigate("/Fail");
              }, 2000);
              }
          });
        }
        
      };
    
      const dateCalculate = (event) => 
      {
        const DATE = new Date().getDate();
        const MONTH = new Date().getMonth();
        const YEAR = new Date().getFullYear();
      
        const FINAL_DATE = `${YEAR}-${MONTH + 1}-${DATE}`;
        event.target.setAttribute("min",FINAL_DATE);
      };
    
      return (
        <div className="bg-blue-400">
          <form method="post" onSubmit={completePayment} className="flex flex-col items-center gap-y-2 h-screen justify-center">
            <p className="text-center font-bold text-white text-lg">Fill the Form to Join Yoga Program</p>
            {(message === "User subscribed and Payment Completed") ? <div className="text-green-700 italic font-bold">{message}</div> : <div className="text-red-700 italic font-bold">{message}</div>}
            <input type="text" name="fullname" id="fullName" placeholder="Full Name" onChange={handleChange} value={data.fullname}/>
            <input type="text" name="age" id="age" placeholder="Age" onChange={handleChange} value={data.age}/>
            <label htmlFor="Month" className="text-white">Date</label>
            <input type="date" name="date" id="date" placeholder="Date" onFocus={dateCalculate} onChange={handleChange} value={data.date}/>
            <label htmlFor="amount" className="text-white">Fees Amount (INR)</label>
            <input className="text-white" type="text" name="amount" id="amount" value={data.amount} disabled={true} onChange={handleChange}/>
            <label htmlFor="batch" className="text-white">Select Batch</label>
            <select name="batch" onChange={handleChange}>
              {options.map((option) => (
                (option.label === "Select Timing")?<option value="Select Timing" selected = {true} disabled = {true}>Select Timing</option>:<option value={option.value}>{option.label}</option>
              ))};
            </select>
            <input type="submit" value="Subcribe" className="bg-green-400 text-white font-bold w-2/5 rounded-md block mx-auto py-1.5" />
          </form>
        </div>
      );
};

export { Form as default };

