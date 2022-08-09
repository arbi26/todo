import './style.css'
import 'bootstrap/dist/css/bootstrap.min.css'
// import {Routes, Route, useNavigate} from 'react-router-dom'
// import Todoform from './todoForm';
// import Todolist from './todolList';

function Sidebar (){

    // const navigate = useNavigate();

    // const navigatetoInsert = () => {
    //     navigate("/insert")
    // }

    // const navigatetoTodo = () => {
    //     navigate ("/list")
    // }


    return(
        <div className=" sidebar">
        <div className="headersidebar">
            <div className="sidebarbutton" >   
            <button className="sidebarbutton btn btn-outline-warning" > Insert Task </button>
            </div>
            <div className="sidebarbutton">
            <button className="sidebarbutton btn btn-outline-warning"  > To Do </button>
            </div>
            <div className="sidebarbutton">
            <button className="sidebarbutton btn btn-outline-warning"> Done </button>
            </div>
        
        {/* <Routes className='div2'>
            <Route  path='/insert' element={<Todoform />}/>
        </Routes>
        <Routes className='col-7'>
            <Route path='/list' element={<Todolist/> }/>
        </Routes>  */}
        </div>

        </div>
        
    )
}

export default Sidebar;