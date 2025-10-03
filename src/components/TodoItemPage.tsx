import React, {useEffect, useState} from 'react';
import {ITodo} from "../types/types";
import axios from "axios";
import {useParams, useNavigate} from "react-router-dom";

const TodoItemPage = () => {
  const [todo, setTodo] = useState<ITodo | null>(null)
  const params = useParams<{ id: string }>()
  const navigate = useNavigate()

  useEffect(() => {
    fetchTodo()
  }, []);

  async function fetchTodo() {
    try {
      const response = await axios.get<ITodo>('https://jsonplaceholder.typicode.com/todos/' + params.id + '?_limit=10')
      setTodo(response.data)
    }
    catch (e) {
      alert(e)
    }
  }

  return (
    <div>
      <button onClick={() => navigate('/todos')} type="button">Back</button>
      <h1>Дело {todo?.title}</h1>
      <h2>Состояние дела {todo?.completed ? "Выполнено" : "Не выполнено"}</h2>
    </div>
  );
};

export default TodoItemPage;