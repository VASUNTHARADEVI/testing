import React from "react";
import axios from "axios";
import { useState ,useEffect } from "react";
 function NewForm(){
 const [student,setStudent]=useState([])
    useEffect(() => {
        getData();
      }, []);
    
      const getData = () => {
        axios.get("http://localhost:3000/student").then((resp) => {
          setStudent(resp.data);
        });
      };
      return(<>
          <table>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>NAME</th>
                    <th>MAILID</th>
                </tr>
            </thead>
            <tbody>
                {student&&student.length>0 && student.map((stu)=>
                  <tr key={stu.id}>
                    <td>{stu.id}</td>
                    <td>{stu.name}</td>
                    <td>{stu.mailId}</td>
                  </tr>
                
                )}
            </tbody>
          </table>
      </>)
      
 }
 export default NewForm;