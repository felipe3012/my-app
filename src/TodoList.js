import React from "react";
import './TodoList.css';

function TodoList(props) {
    return (
       <section className="lista__tareas">
           { props.children }
       </section>
    );
}

export { TodoList };