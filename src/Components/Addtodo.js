import React, { useState } from "react";
import ListTodo from "./ListTodo";

const Addtodo = () => {
  

  const editer = (a) => {
    let x = "";
    document.getElementById("input").value = list[a];
    document.getElementById("editbutton").style.backgroundColor=("green")
    document.getElementById("editbutton").style.color=("white")
    document.getElementById("addbutton").style.backgroundColor=("red")
    document.getElementById("addbutton").style.color=("red")
    document.getElementById("editbutton").onclick = () => {
      x = document.getElementById("input").value;

     
      setList(list.fill(x, a, a + 1));
      document.getElementById("editbutton").style.backgroundColor=("red")
    document.getElementById("editbutton").style.color=("red")
    document.getElementById("addbutton").style.backgroundColor=("green")
    document.getElementById("addbutton").style.color=("white")
      setAdd("")
      
    };
  };

  const effacer = (x) => {
    setList(list.filter((el, i) => i !== x));
    document.getElementById("editbutton").style.backgroundColor=("red")
    document.getElementById("editbutton").style.color=("red")
    document.getElementById("addbutton").style.backgroundColor=("green")
    document.getElementById("addbutton").style.color=("white")
  };
  
  const [list, setList] = useState([]);
  const [add, setAdd] = useState("");
  

  return (
    <div>
      <header
        style={{
          fontWeight:700,
          fontSize:"20px",
          backgroundColor: "RGB(234,172,157)",
          paddingBottom: "20px",
          color: "white",
          paddingTop: "20px",
          marginBottom: "40px",
        }}
      >
        TODO list Checkpoint
      </header>
      <input
     
        value={add}
        onChange={(e) => setAdd(e.target.value)}
        style={{ marginBottom: "15px" }}
        placeholder="Ajouter TODO"
        id="input"
      ></input>
      <button style={{ color:"white" ,backgroundColor:"green" ,border:"0px",height:"22px"}}
        id="addbutton"
        onClick={() => {
          setList([...list, add]);
          setAdd("");
        }}
      >
        Add new ToDo
      </button>
      <button id="editbutton" value={add} style={{ color:"red" ,backgroundColor:"red" ,border:"0px" ,height:"22px"}}>Save change</button>

      <ListTodo TodoItem={list} rem={effacer} ed={editer}></ListTodo>
      
    </div>
  );
};

export default Addtodo;
