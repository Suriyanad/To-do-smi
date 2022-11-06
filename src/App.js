import React, { useState } from 'react'
import './App.css';
const App = () => {
const [todo, settodo] = useState("");
const [todoos, settodoos] = useState([]);
const [editid, seteditid] = useState(0);
const handleSubmit = (e) => {
  e.preventDefault();
  if(editid){
    const edittodo = todoos.find((i) => i.id=== editid);
    const updatedTodoos = todoos.map((t) => t.id=== edittodo.id?
    (t = {id: t.id , todo}):
    {id: t.id , todo: t.todo}
     );
     settodoos(updatedTodoos);
     seteditid("");
     settodo("");
     return;

    }

  if(todo !== ''){
    settodoos([ {id:`${todo}-${Date.now()}` ,todo}, ...todoos ]);
    settodo("");
  }


};

const handleDelete = (id) => {
  const deltodo= todoos.filter((to) => to.id!== id);
  settodoos([...deltodo]);
};
const handleEdit = (id) => {
  const edittodo= todoos.find((i) => i.id=== id);
  settodo(edittodo.todo);
  seteditid(id);
};

  return ( 
    <div className="App"> 
      <div className="container">
        <h1>To-do List!</h1>
        <form className='todoform' onSubmit={handleSubmit}>
           <input type= 'text' value={todo} onChange={(e) => settodo(e.target.value) }/>
           <button type='submit'> {editid? "Edit" : "Go" } </button>
        </form>
        <ul className='todos'>
          {
            todoos.map((t) => (
              <li className='singletodo'>
              <span className='todotext' key={t.id}> {t.todo}</span>
              <button onClick={()=> handleEdit(t.id)}>Edit</button>
              <button onClick={()=> handleDelete(t.id)}>Delete</button>
              </li>

            ))
          }

         
         
        </ul>

      </div>
    </div>
  )
}

export default App