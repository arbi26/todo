 import './style.css'
 import 'bootstrap/dist/css/bootstrap.min.css'
 import {useState} from 'react'


 const Todolist = ({todos, setTodos, onCompletedToDo}) => {

   
    

    console.log(todos);
     const [show, setShow] = useState(true);

     return(
        <>
        {todos.map((todos, index, id) => 
         <div  className="containertodoForm">         
             <h1 className='headertodoForm'>To Do</h1>
             <div className='smallcontainertodoList'>
             <div key={index}  className='titlebuttontodoList'>
                 <h1 className='titletodoList'>{todos.title}</h1>
                 <button className="btn btn-outline-warning"> {todos.priority} </button>
                 <button className='buttonplustodoList' onClick={() => setShow(!show) }>{show === true ? "-" : "+"}</button>    
             </div>
             <div>
                {show  &&   <p className='paragraphtodoList'>{todos.textarea}</p>}
                {show &&  <button className='completedbutton' onClick={onCompletedToDo(id)}>Completed</button>} 

             </div>
             </div>
         </div>
        )}
         </>
         )
 }
 

 

 export default Todolist;