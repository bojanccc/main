import App from "../App";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { TodoList } from '../components/TodoList/todoList';
import React from "react";
import { Provider } from 'react-redux'
import { store } from '../redux/store'

describe('Todo App', () => {

  it("renders app", () => {
    const app = render(<Provider store={store}><App /></Provider>);
    expect(app).not.toBeUndefined();
  });

  it("renders initial items", () => {
    render(<Provider store={store}><TodoList /></Provider>)

    expect(screen.getByText("Buy milk")).toBeDefined();
    expect(screen.getByTestId('checkedIcon0')).toBeInTheDocument();
    expect(screen.getByTestId('editIcon0')).toBeInTheDocument();
    expect(screen.getByTestId('deleteIcon0')).toBeInTheDocument();

    expect(screen.getByText("Buy bread")).toBeDefined();
    expect(screen.getByTestId('uncheckedIcon1')).toBeInTheDocument();
    expect(screen.getByTestId('editIcon1')).toBeInTheDocument();
    expect(screen.getByTestId('deleteIcon1')).toBeInTheDocument();

  });
});