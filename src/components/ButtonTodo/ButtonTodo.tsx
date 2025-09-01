import { Todo } from "../../interface";
import styles from "./ButtonTodo.module.css";

const ButtonTodo = ({todoFilter, deleteItem, arrayFiltered} ) =>{

const quantityTodo = () => {
  let count = 0;
  arrayFiltered?.forEach((item: Todo) => item.status === false && count++);
  return count;
};

   return( <div className={styles.container}>
      <p className={styles.text}>{quantityTodo()} items left</p>
      <button onClick={() => todoFilter("all")}>All</button>
      <button onClick={() => todoFilter(true)}>Active</button>
      <button className={styles.completed} onClick={() => todoFilter(false)}>Completed</button>
      <button onClick={deleteItem}>Clear completed</button>
    </div>
   )
}

export default ButtonTodo