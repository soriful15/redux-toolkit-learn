// import { useAppSelector } from "@/redux/hook";
import { useState } from "react";
import AddTodoModal from "./AddTodoModal";
import TodoCard from "./TodoCard";
import TodoFilter from "./TodoFilter";
import { useGetTodosQuery } from "@/redux/api/api";

type TTodo = {
  _id: string;
  title: string;
  description: string;
  priority: string;
  isCompleted?: boolean;
};

const TodoContainer = () => {
  const [priority, setPriority] = useState("");
  // console.log(priority);

  // local state
  // const { todos } = useAppSelector((state) => state.todos);

  // server State
  // const { data: todos, isError, isLoading } = useGetTodosQuery(undefined);
  const { data: todos, isLoading } = useGetTodosQuery(priority);

  console.log(todos);

  if (isLoading) {
    return <p>Loading....</p>;
  }

  return (
    <div>
      <div className="flex justify-between mb-5">
        <AddTodoModal></AddTodoModal>
        <TodoFilter priority={priority} setPriority={setPriority}></TodoFilter>
      </div>
      <div className="bg-primary-gradient w-full h-full rounded-xl p-[5px]">
        <div className="bg-white p-5 w-full h-full rounded-lg space-y-3">
          {!todos?.data && (
            <div className="bg-white p-5 flex justify-center items-center rounded-md font-semibold text-3xl">
              <p>There is no task Pending</p>{" "}
            </div>
          )}
          {/* {todos?.map((item) => ( */}
          {todos?.data?.map((item: TTodo) => (
            <TodoCard key={item._id} {...item}></TodoCard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TodoContainer;
