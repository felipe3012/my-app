import React from "react";
import './TodoCreate.css';
import image from './work.png';

function TodoCreate() {
    return (
        <div className="tarea">
            <div className="tarea__form">
                <h2 className="tarea__form--title">Crear nueva tarea</h2>
                <p>Nombre de la tarea</p>
                <input className="input" placeholder="Escribe tu tarea !" />
                <button className="button__primary"> Crear Tarea </button>
            </div>
            <div className="tarea_img">
                <img src={image} className="image" alt="work"/>
            </div>
        </div>
    );
}

export { TodoCreate };