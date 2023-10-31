import { useContext } from "react";
import { TodoStore } from "../context/TodoContext";
import { MdDeleteForever } from "react-icons/md";
import { BiSolidEdit } from "react-icons/bi";
const ShowAllTodos = () => {
  const { todolist, handleReadOverlay } = useContext(TodoStore);
  //   console.log("from show todos : ", todolist);
  return (
    <section className=" w-[100%] flex justify-center items-center p-8">
      <article className="flex flex-wrap gap-6 w-[100%] ">
        {todolist.map(value => {
          // Destructuring from individual Todo object
          const {
            id,
            title,
            details,
            n_characters,
            n_words,
            n_sentences,
            createdAt,
          } = value;
          return (
            <div
              className="flex flex-col w-[90%] lg:w-[25%]  gap-6 p-4 rounded-md border-slate-300 border-2 shadow-lg hover:shadow-2xl group hover:border-blue-600"
              onClick={() => handleReadOverlay(id)}
            >
              <h3 className="text-3xl bg-slate-200 rounded-md p-2 font-semibold text-center">
                {title}
              </h3>
              <p className="text-base bg-slate-200 p-2 text-ellipsis whitespace-nowrap overflow-hidden">
                {details}
              </p>
              <div className="group-hover:flex hidden flex-col gap-8 justify-center items-center">
                <div className="text-sm flex gap-3  ">
                  <span className="text-center">
                    Characters : {n_characters}
                  </span>
                  <span className="text-center">Words : {n_words}</span>
                  <span className="text-center">Sentences : {n_sentences}</span>
                </div>
                <div className="flex justify-around  w-[100%]">
                  <button className="bg-red-500 p-2 rounded-lg hover:bg-red-700 ">
                    <MdDeleteForever className="text-2xl text-white" />
                  </button>
                  <button className="bg-yellow-500 p-2 rounded-lg hover:bg-yellow-700 ">
                    <BiSolidEdit className="text-2xl text-white" />
                  </button>
                </div>
              </div>
            </div>
          );
        })}{" "}
      </article>
    </section>
  );
};

export default ShowAllTodos;