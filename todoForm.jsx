import { useState } from 'react'

import './style.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import {v4 as uuidv4} from 'uuid'

const Todoform = ({ todos, setTodos }) => {
    const [input, setInput] = useState("");
    const [textarea, setTextarea] = useState("");
    const [priority, setPriority] = useState(null);    

    const onFormSubmit = (e) => {
        setTodos([...todos,  { id:uuidv4(), title:input, textarea:textarea, priority:priority, completed:false}]);
        setInput("");
        setTextarea("");
        };
 
    const priorities = ['Priority', 'Urgent', 'nonUrgent']

    return(
        <div className='containertodoForm'>
            
            <div className='headertodoForm'>
                <h1>Insert Task</h1>
            </div>
            <div  className='titletodoForm'>
                <input 
                type="title"
                 className="form-control" 
                 name="title" 
                 placeholder='Title'
                 value={input}
                 required
                 onChange= {(event) => setInput(event.target.value)} />
            </div>
            <div  className='texttodoForm'>
                <textarea
                 name="Description" 
                 className="form-control" 
                 cols="70" 
                 placeholder='Share a reply' 
                 rows="10"
                 value={textarea}
                 onChange= {(event) => setTextarea(event.target.value)}></textarea>
            </div>
            <div  className='lastdivtodoForm'>
            <select 
             className='prioritiestodoForm' 
             name="priorities" onChange={(event) => setPriority(event.target.value)}>
        {
            priorities.map((priority, i) => {
                return (
                <option value={priority} key={i} >{priority}</option>)
            })
        }
            </select>

            <button 
            type='submit' 
            className='insertbuttontodoForm' 
            onClick={onFormSubmit} >Insert</button>
            </div>
            
        </div>
       
    )

}

export default Todoform;