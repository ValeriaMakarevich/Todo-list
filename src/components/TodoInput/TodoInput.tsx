import { useState } from "react";
import styles from './TodoInput.module.css';








const TodoInput = ({saveItem, arrayTodos, buttonChevron, setButtonChevron}) => {
  const [value, setValue] = useState<string>("");
 

  const getValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue((e.target as HTMLInputElement).value);

    // console.log((e.target as HTMLButtonElement).value);
  };

  const enter = (e) => {
    if (e.keyCode === 13) {
      console.log(value);
      saveItem({ text: value, id: arrayTodos.length + 1, status: false });
      console.log(arrayTodos)
      setValue(""); // put the login here
    }
  };

  return (
    <div className={styles.container}> 
      <form
      className={styles.form}
        action=""
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <input
          type="text"
          placeholder="What needs to done?"
          className={styles.input}
          onChange={getValue}
          onKeyDown={enter}
          value={value}
        />
      </form>
      <button
        className={styles.button}
        onClick={() => {
          setButtonChevron(!buttonChevron);
          console.log(buttonChevron);
        }}
      >
        <img
          className={styles.chevron}
          src={
            buttonChevron === false
              ? "icons8-chevron-up-30.png"
              : "icons8-chevron-down-30.png"
          }
          alt=""
        />
      </button>
    </div>
  );
  
}
 export default TodoInput