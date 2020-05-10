import React from "react";
import PropTypes from "prop-types";
import Todo from "./Todo";

const TodoList = ({ todos, onTodoClick }) => (
  <ul>
    {todos.map((todo, index) => {
      console.log(todos);
      return (
        // <Todo key={todo.id} {...todo} onClick={() => onTodoClick(0)} /> This works!
        // index, the second parameter of the map function, will automatically give you the item index
        <Todo key={todo.id} {...todo} onClick={() => onTodoClick(todo.id)} />
      );
    })}
  </ul>
);

TodoList.propTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      completed: PropTypes.bool.isRequired,
      text: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
  onTodoClick: PropTypes.func.isRequired,
};

export default TodoList;
