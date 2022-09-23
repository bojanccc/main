import React from "react";
import TodoListPage from "./pages/todoListPage/todoListPage";

import "./styles.scss";

export default function App() {

  return (
    <div className="todoListApp">
      <div className="forsta-logo" />
      <TodoListPage />
    </div>
  );
}
