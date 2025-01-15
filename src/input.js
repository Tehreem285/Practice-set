import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from './slice';
import './index.css';

const Input = () => {
  const [input, setInput] = useState('');
  const [date, setDate] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = () => {
    if (input && date) {
      dispatch(addTodo({ input, date })); 
      setInput('');
      setDate('');
    } else {
      alert('Please fill both fields!');
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleSubmit();
    }
  };

  return (
    <div className="input-container" onKeyDown={handleKeyDown}>
      <div className="input-field">
        <input
          type="text"
          placeholder="Enter task"
          className="task-holder"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
      </div>
      <div className="input-field">
        <input
          type="text"
          placeholder="Enter Date & Time"
          className="task-holder"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
      </div>
      <div className="input-field">
        <input type="submit" value="+" className="input-btn" onClick={handleSubmit} />
      </div>
    </div>
  );
};

export default Input;





// import React from 'react';
// import "./index.css";
// import { useState } from 'react';


// const Input = (props) =>{
//     const [input, setinput] = useState("");
    
//     const [date, setdate] = useState("");
//     const handleSubmit = () => {
//         if (input && date !== '') {
//             props.onAddtodo(input, date); 
//             setinput('');
//             setdate('');      
//         }
//         else{
//             alert(" Please fill both fields")
//         }
//         } 
//         const keydown = (e) => {
//             if (e.key === 'Enter') {
//               handleSubmit();
//             }
//           };

//     return(
//         <>
//         <div className="input-container" onKeyDown={keydown}>
//           <div className="input-field">
//         <input type="text"
//          placeholder="Enter task" 
//          className="task-holder"
//          value={input}
//          onChange={(e) => setinput(e.target.value)} 
          
//        />
//           </div>
//           <div className="input-field">
//         <input type="text"
//          placeholder="Enter Date & Time" 
//          className="task-holder"
//          value={date}
//          onChange={(e) => setdate(e.target.value)} 
          
//        />

//           </div>
//           <div className="input-field">
//           <input type="submit" value="+" className='input-btn' onClick={handleSubmit}/>
//           </div>
//           </div>
//         </>
//     );
// }

  // export default Input;

