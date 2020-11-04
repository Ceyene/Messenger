import React from "react";
import "./styles.css";
import Check from "./img/doble-verificacion.png";
import Erase from "./img/borrar.png";

export default class Messenger extends React.Component {
  state = {
    name: "Cyn",
    messagesSent: [],
    messagesReceived: [
      {
        text: "Hola",
        read: false
      },
      {
        text: "Responde a este mensaje",
        read: false
      }
    ]
  };

  handleSubmit = (val) => {
    this.setState({
      text: "",
      messagesSent: [
        ...this.state.messagesSent,
        {
          text: val,
          read: false
        }
      ]
    });
  };

  deleteHandler = (id) => {
    return () => {
      const ToDoFiltered = this.state.messagesSent.filter(
        (message, index) => index !== id
      );
      this.setState({ messagesSent: ToDoFiltered });
    };
  };

  checkHandlerReceived = (id) => {
    return () => {
      const readMessage = [...this.state.messagesReceived];
      if (readMessage[id].read === true) {
        readMessage[id].read = false;
      } else {
        readMessage[id].read = true;
      }
      this.setState({ messagesReceived: readMessage });
    };
  };

  render() {
    return (
      <div className="contenedor">
        <h4 className="usuario">{this.state.name}</h4>
        <div className="container_mensajes">
          <ul className="mensajes_recibidos">
            {this.state.messagesReceived.map((message, index) => (
              <li className={message.read ? "read" : ""} key={index}>
                {message.text}
                <div>
                  <button className="mensaje_button">
                    <img
                      src={Check}
                      alt="Mensaje leído"
                      onClick={this.checkHandlerReceived(index)}
                    />
                  </button>
                </div>
              </li>
            ))}
          </ul>
          <ul className="mensajes_enviados">
            {this.state.messagesSent.map((message, index) => (
              <li className={message.read ? "read" : ""} key={index}>
                {message.text}
                <button
                  className="mensaje_button"
                  onClick={this.deleteHandler(index)}
                >
                  <img src={Erase} alt="Borrar mensaje" />
                </button>
              </li>
            ))}
          </ul>
        </div>

        <div className="formulario">
          <input
            type="text"
            value={this.state.text}
            onInput={(e) => this.setState({ text: e.target.value })}
          />
          <button onClick={() => this.handleSubmit(this.state.text)}>
            Enviar
          </button>
        </div>
      </div>
    );
  }
}
