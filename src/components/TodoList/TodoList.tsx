import { Todo } from "../../interface";
import styles from "./TodoList.module.css";

const TodoList = ({ arrayFiltered, statusItem, buttonChevron }) => {
  return (
    <>
      <div className={styles.mainContainer}>
        {arrayFiltered.map((item: Todo, id: number) => {
          return (
            <div
              className={
                buttonChevron === true ? styles.close : styles.container
              }
              key={id}
            >
              <label className={styles.label} htmlFor={item.text}>
                <input
                  name={item.text}
                  id={item.text}
                  className={styles.input}
                  type="checkbox"
                  onChange={() => statusItem(item.id)}
                />
                <div className={styles.text}>{item.text}</div>
              </label>
            </div>
          );
        })}
      </div>
    </>
  );
};
export default TodoList;
