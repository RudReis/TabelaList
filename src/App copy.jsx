/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import { useState } from "react";
import "./App.css";
import Todo from "./components/Todo";
import TodoForm from "./components/TodoForm";
import Search from "./components/Search";
import Filter from "./components/Filter";

import { CFooter, CLink } from "@coreui/react";
function App() {
  const [todos, setTodos] = useState([
    {
      id: 1,
      text: "Crirar funcionalidade X no sistema",
      category: "Trabalho",
      isCompleted: false,
    },
    {
      id: 2,
      text: "Ir para academia ",
      category: "Pessoal",
      isCompleted: false,
    },
  ]);

  // O estado que armazena a busca.
  const [search, setSearch] = useState("");
  // O estado que armazena a opção de filtro.
  const [filter, setFilter] = useState("All");
  // O estado que armazena a opção de ordenação.
  const [sort, setSort] = useState("Asc");

  // Adiciona uma nova tarefa à lista.
  const addTodo = (text, category) => {
    const newTodos = [
      ...todos,
      {
        id: Math.floor(Math.random() * 10000),
        text,
        category,
        isCompleted: false,
      },
    ];

    setTodos(newTodos);
  };

  //  Remove uma tarefa da lista.
  const removeTodo = (id) => {
    const newTodos = [...todos];
    const filteredTodos = newTodos.filter((todo) =>
      todo.id !== id ? todo : null
    );
    setTodos(filteredTodos);
  };

  //  Alterna o status de conclusão de uma tarefa.
  const completeTodo = (id) => {
    const newTodos = [...todos];
    newTodos.map((todo) =>
      todo.id === id ? (todo.isCompleted = !todo.isCompleted) : todo
    );
    setTodos(newTodos);
  };

  return (
    <>
      <div className="app">
        <h1>Lista de tarefas</h1>
        <Search search={search} setSearch={setSearch} />
        <Filter filter={filter} setFilter={setFilter} setSort={setSort} />
        <div className="todo-list">
          {todos
            .filter((todo) =>
              filter === "All"
                ? true
                : filter === "Completed"
                ? todo.isCompleted
                : !todo.isCompleted
            )
            .filter((todo) =>
              todo.text.toLowerCase().includes(search.toLowerCase())
            )
            .sort((a, b) =>
              sort === "Asc"
                ? a.text.localeCompare(b.text)
                : b.text.localeCompare(a.text)
            )
            .map((todo) => (
              <Todo
                todo={todo}
                key={todo.id}
                removeTodo={removeTodo}
                completeTodo={completeTodo}
              />
            ))}
        </div>
        <TodoForm addTodo={addTodo} />
      </div>
      <div className="footer">
        <CFooter>
          <div>
            <span>Feito por:</span>
            <CLink className="ml-2" href="https://google.com">
              Rud
            </CLink>
          </div>
        </CFooter>
      </div>
    </>
  );
}

export default App;
