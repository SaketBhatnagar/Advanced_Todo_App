import React, { useContext } from "react";
import AddTodo from "../components/AddTodo";
import { TodoStore } from "../context/TodoContext";

const Home = () => {
  const { todolist } = useContext(TodoStore);
  return (
    <section className="bg-slate-100 h-[100vh] overflow-hidden flex justify-center ">
      <article className="flex flex-col items-center gap-8 w-full py-9">
        <h1 className="text-4xl font-semibold">Advanced Todo App</h1>
        <AddTodo />
      </article>
    </section>
  );
};

export default Home;
