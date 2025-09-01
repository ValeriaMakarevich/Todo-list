import { useState } from "react";
import { Todo } from "../interface";

export const useFilterTodo = (arrayTodos: Todo[]) =>{

    const [arrayFiltered, setArrayFiltered] = useState<Todo[]>(arrayTodos);

    const todoFilter = (status) => {
      if (status === "all") {
        setArrayFiltered(arrayTodos);
      }
      if (status === true) {
        setArrayFiltered(
          [...arrayTodos].filter((item) => item.status === true)
        );
      }
      if (status === false) {
        setArrayFiltered(
          [...arrayTodos].filter((item) => item.status === false)
        );
      }
    };

return [arrayFiltered, setArrayFiltered, todoFilter] as const

}