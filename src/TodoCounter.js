import React from "react";
import './TodoCounter.css';

function TodoCounter() {
    return (
        <div className="todocounter">
            <h1 className="todocounter__title">Tus tareas</h1>
            <p className="todocounter__tasks">Has completado 2 de 3 tareas</p>
        </div>
    );
}

export { TodoCounter };