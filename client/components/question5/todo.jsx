import { useState, useContext } from 'react';
import { ApiContext } from '../../utils/api_context';
export const Todo = ({ todo }) => {
  const api = useContext(ApiContext);
  const [checkboxChecked, setCheckboxChecked] = useState(todo.isComplete);

  const onCheckboxChange = async (e) => {
    setCheckboxChecked(e.target.checked);
    // put your API call here!
    // you wont actually need to do anything with the result of the API call
    // because we are optimistically updating the state.
    // When you refresh the page you should see your state persist.
    const id = todo.id;
    //console.log("Todo ID: ", id)
    //console.log("todo.jsx posts: ", '/todos/toggleComplete?=' + id)
    const test = await api.post('/todos/toggle' + id)
    //console.log("todo.jsx posts: ", '/todos/toggleComplete?=' + id)
  };

  return (
    <div className="p-4 border-2 border-gray-500 rounded">
      <input type="checkbox" checked={checkboxChecked} onChange={onCheckboxChange} /> {todo.content}
    </div>
  );
};
