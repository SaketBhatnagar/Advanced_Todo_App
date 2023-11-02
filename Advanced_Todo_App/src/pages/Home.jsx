import React, { useContext } from "react";
import AddTodo from "../components/AddTodo";
import { TodoStore } from "../context/TodoContext";
import ShowAllTodos from "../components/ShowAllTodos";
import ReadOverlay from "./ReadOverlay";
import DeleteOverlay from "./DeleteOverlay";
import UpdateOverlay from "./UpdateOverlay";

const Home = () => {
  const { todolist } = useContext(TodoStore);
  return (
    <section className="bg-slate-100  flex justify-center ">
      <article className="flex flex-col items-center gap-8 w-full py-9">
        <h1 className="text-4xl font-semibold">Advanced Todo App</h1>
        <AddTodo />
        <ReadOverlay />
        <ShowAllTodos />
        <DeleteOverlay />
        <UpdateOverlay />
      </article>
    </section>
  );
};

export default Home;
