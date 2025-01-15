import React from 'react';
import Input from './input.js';
import Todos from './todos.js';
import './index.css';
import { deleteTodo } from './slice.js';
import { useSelector, useDispatch } from 'react-redux';

const App = () => {
  const listTodo = useSelector((state) => state.todos.todos); 
  const dispatch = useDispatch();


  const deleteListItem = (index) => {
    dispatch(deleteTodo(index)); 
  };

  return (
    <>
      <h1 className="heading">Todos List</h1>
      <div>
        <Input />
      </div>
      <div className="listof-todos">
        {listTodo.map((listTodo, i) => (
          <Todos item={listTodo} key={i} index={i} deleteItem={deleteListItem} />
        ))}
      </div>
    </>
  );
};

export default App;




// import React, {useState} from 'react';
// import Input from './input.js';
// import "./index.css"
// import Todos from "./todos.js";

// const App = () => {
//   const [listTodo , setListTodo] = useState([]);
//   const addinlist = (input, date) =>{
//     const todos = {input , date}
//     setListTodo([...listTodo,todos]);
//   }
  
//   const deleteListItem = (key)=>{
//     let newListTodo = listTodo.filter((item,index) => index !== key)
//     setListTodo(newListTodo);
//   }

//   return (
//     <>
//     <h1 className='heading'>Todos List</h1>
//     <div>
//       <Input onAddtodo={addinlist} />
//     </div>
//       <div className='listof-todos'>
//         {listTodo.map((listTodo , i) => {
//          return(
//          <Todos item={listTodo} key={i} index={i} deleteItem={deleteListItem}/>
//         )})}
//       </div>
//     </>
//   )
// }

// export default App


