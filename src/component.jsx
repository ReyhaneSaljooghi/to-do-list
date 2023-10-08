import { findByLabelText } from '@testing-library/react';
import React from 'react';
import { useState } from 'react';
import Plusimg from "./Plus.png";
import Check from "./Check.png";

const MainDiv = () => {
  
 
  const [newtask,setnewTask]=useState("  add new task");
  const[tasks,settasks]=useState([]);
  function toggle(id){
    settasks(currenttasks =>
      currenttasks?.map(task =>{
        if(task.id==id){
        task.completed=!task.completed
        }
      })
    )
  }

  
  function handleSubmit(e){
    settasks(currtasks=>[...currtasks, {id: crypto.randomUUID(),title: newtask, completed:false}])
  }
  
    const styles = {
        maindiv: {
            fontSize: "18px",
            color: "black",
            backgroundColor: "whiteSmoke",
            padding: "0 20px",
            boxShadow: "1px 16px 88px -4px rgba(0,0,0,0.78)",           
            width: "55%",
            height: "88%",
            borderRadius: "1%",
            display:"flex",
            flexDirection:"column",
            justifyContent:"space-between",

          },
          title: {
            color:"#201859",
            opacity:"80%"
          },
          date: {
              opacity: "50%",
              display: "flex",
              justifyContent: "center",
              marginTop: "28px"
          },
          line: {
            borderBottom: "1px solid black",
            opacity: "25%",
            padding: "0",
            margin: "0",
            width: "100%"
          },
          plusButton: {
            borderRadius: "100%",
            backgroundColor: "#7379EA",
            height: "48px",
            width: "48px",
            border: "0px",
            margin:"0px",
            marginTop:"-10px",
            boxShadow: " 1px 13px 18px -4px rgba(115,121,234,0.78)",
            display:"flex",
            justifyContent:"center",
            alignItems:"center"
          },
          input:{
            height: "40px",
            width: "80%",
            backgroundColor:"lightgray",
            border:"0px",
            margin:"0px",
            padding:"0px",
            borderRadius: '5px', 
            overflow: 'hidden',
            

          },
          addDiv:{
            display:"flex",
            flexDirection:"column",
            justifyContent:"end",
            alignItems:"center",
            marginBottom:"10px"
          },
          task:{
            backgroundColor:"rgb(115, 121, 234, 0.2)",
            marginBottom:"5px",
            height:"45px",
            width:"85%",
            borderRadius: '5px', 
            overflow: 'hidden',
            display:"flex",
            flexDirection:"row",
            justifyContent:"space-between",
            padding:"5px",
            paddingTop:"18px",
            color:"rgba( 32, 24,89, 0.7)"
          
          },
          checkbox:{
        
            height: "20px",
            width: "20px",
            backgroundColor:"white",
            border:"0px"

          }

    };
    return(
     <div style={styles.maindiv}>
      <div>
         <h2 style={styles.title}>My Tasks</h2>
         <h1></h1> <div style={styles.line}></div>
         <div style={styles.date} >{new Date().toLocaleDateString('en-En',{ year: 'numeric', month: 'long', day: 'numeric' })}</div>
         <ul>
          {tasks.map(task=>{
            return(
              <div style={styles.task} key={task.id}>
                <label>
                {task.title}
                </label>
                <button style={styles.checkbox} onClick={task=>toggle(task.id)}>
                  {
                    !task.completed?(<div></div>):( <img width="15px" height="15px"src={Check}/>)
                  }
            
                </button>
                {/* <input style={styles.checkbox} type="checkbox" /> */}
              </div>
            );
          })}
         </ul>
      </div>
     <div style={styles.addDiv}>
          <input style={styles.input} value={newtask}  type="text" onChange={e => setnewTask(e.target.value)}/>
          <button type='submit'style={styles.plusButton} onClick={newtask=>handleSubmit(newtask)}><img width="15px" height="15px"src={Plusimg}/></button>
     </div>
  
     </div>
    );
};

export default MainDiv;