import "./App.css";
import ButtonTodo from "./components/ButtonTodo/ButtonTodo";
import Title from "./components/Title/Title";
import TodoInput from "./components/TodoInput/TodoInput";
import TodoList from "./components/TodoList/TodoList";
import { useEffect } from "react";
import { useAddTodo } from "./hooks/useAddTodo";
import { useFilterTodo } from "./hooks/useFilterTodo";
import { useButtonChevron } from "./hooks/useButtonChevron";

export type Todo = {
  text: string;
  id: number;
  status: boolean;
};

function App() {
  const [arrayTodos, saveItem, deleteItem, statusItem] = useAddTodo();
  const [arrayFiltered, setArrayFiltered, todoFilter] = useFilterTodo(arrayTodos);
  const [buttonChevron, setButtonChevron] = useButtonChevron()
  useButtonChevron();

  useEffect(() => {
    setArrayFiltered(arrayTodos);
  }, [arrayTodos]);

  return (
    <>
      <Title />
      <TodoInput
        saveItem={saveItem}
        arrayTodos={arrayTodos}
        buttonChevron={buttonChevron}
        setButtonChevron={setButtonChevron}
      />
      <TodoList arrayFiltered={arrayFiltered} statusItem={statusItem} buttonChevron={buttonChevron}/>
      <ButtonTodo
        arrayFiltered={arrayFiltered}
        todoFilter={todoFilter}
        deleteItem={deleteItem}
      />
    </>
  );
}

export default App;
