import React from 'react'
import React, { useState } from 'react';

function todo() {
    const [todo, setTodo] = useState([]);
    const [inp, setInp] = useState("");
  
    const handleForm = (e) => {
      e.preventDefault();
      setTodo([...todo, { name: inp, id: Math.round(Math.random() * 100000) }]);
      setInp("");
    };

    return (
        <>
        
   <Helmet>
        <title>todo list</title>
        <link rel="canonical" href="https://www.tacobell.com/" />
      </Helmet>;

      
          <form onSubmit={handleForm}>
            <input
              type="text"
              onChange={(e) => setInp(e.target.value)}
              value={inp}
            />
            <button>Add</button>
          </form>
          <div>
            {todo.map((x, i) => (
              <div key={x.id}>
                {x.name}{" "}
                <button onClick={() => setTodo(todo.filter((item) => item.id !== x.id))}>
                  x
                </button>
              </div>
            ))}
          </div>
        </>
      );
    }
    
    export default Todo;