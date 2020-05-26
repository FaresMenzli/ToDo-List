import React from "react";

// {list =list.splice(0,1) 
// }
 const ListTodo = (props) => {
/* 
    const [Ilist , setIlist] =useState([]) ;


     const effacer =(index) =>{
        
      list= list.filter((el , i )=>
           i!==index
       )

       
        
    }  */
   

   //list.push(props.TodoItem);
     

   // }
     

    


   // let ind =  document.querySelector(".delete").parentNode.parentNode.getAttribute("n")
   // if (ind){}
    /*let del = document.querySelector(".delete")
     if (del){
    del.addEventListener("click",e=>{
       
        del.parentNode.parentNode.remove();
    }
        )}*/
  

  
  return (
    <div>
        
        
         
      <table style={{ margin: "auto" }}>
        {props.TodoItem.map((element ,index ) => (
          
          
          <tr >
             
            <td style={{borderRadius:"10px", backgroundColor: "white", width: "400px" }}>
              {element}
            </td>
            <td style={{ /*backgroundColor: "#DCDCDC" */}}>
              <input key={index}
                type="image"
                src="/delete.png"
                width="12px"
                alt="del"
                className="delete"
                 onClick={ ()=>props.rem(index) }

                      
        
                
              ></input>
              
            </td>
            <td >
            <input key={index} type="image"
                src="/pencil.png"
                width="12px"
                alt="pencil"
                className="pencil"
                onClick={ ()=>props.ed(index)}
                ></input></td> 
          </tr>
         
        ))}
        
        
      </table>
    
    </div>
  );
};

export default ListTodo;
