import { useState } from "react";
import { Todo } from "../interface";

export const useAddTodo = () =>{
 const [arrayTodos, setArrayTodos] = useState<Todo[]>([]);
 

 const saveItem = (todo: Todo) => {
   setArrayTodos([...arrayTodos, todo]);
 };

 const deleteItem = () => {
   setArrayTodos(arrayTodos.filter((item) => item.status !== true));
 };

const statusItem = (id: number) => {
  setArrayTodos(
    arrayTodos.filter((item) => {
      if (item.id === id) {
        item.status = !item.status;
      }
      return item;
    })
  );
};

return [
  arrayTodos,
  saveItem,
  deleteItem,
  statusItem
] as const;

}