import React, { useRef, useState, useEffect } from "react";
import TodoItem from "./TodoItem";

const VirtualizedList = ({
  todos,
  itemHeight,
  addTodo,
  deleteTodo,
  toggleCompleted,
  incrementClicks,
  updateTodo,
}) => {
  const listRef = useRef(null);
  const [visibleItems, setVisibleItems] = useState([]);
  const [startIndex, setStartIndex] = useState(0);

  const calculateVisibleItems = () => {
    if (listRef.current) {
      const { scrollTop, clientHeight } = listRef.current;
      const newStartIndex = Math.floor(scrollTop / itemHeight);
      const endIndex = Math.min(
        todos.length,
        Math.ceil((scrollTop + clientHeight) / itemHeight)
      );

      setStartIndex(newStartIndex);
      setVisibleItems(todos.slice(newStartIndex, endIndex));
      console.log(newStartIndex, endIndex);
      console.log(scrollTop);
    }
  };

  useEffect(() => {
    calculateVisibleItems();

    const listElement = listRef.current;
    listElement.addEventListener("scroll", calculateVisibleItems);
    return () =>
      listElement.removeEventListener("scroll", calculateVisibleItems);
  }, []);

  return (
    <div
      ref={listRef}
      style={{
        overflowY: "auto",
        height: "400px",
        position: "relative",
        width: "100%",
      }}
    >
      <div
        style={{
          height: `${todos.length * itemHeight}px`,
          position: "relative",
          display: "flex",
          justifyContent: "center",
          alignItems: "center"
        }}
      >
        <div
          style={{
            position: "absolute",
            top: itemHeight * startIndex + "px",
          }}
        >
          {visibleItems.map((todo) => (
            <TodoItem
              key={todo.id}
              todo={todo}
              style={{
                height: `${itemHeight}px`,
              }}
              addTodo={addTodo}
              deleteTodo={deleteTodo}
              toggleCompleted={toggleCompleted}
              incrementClicks={incrementClicks}
              updateTodo={updateTodo}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default VirtualizedList;
