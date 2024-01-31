import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const baseApi = createApi({
  reducerPath: "baseApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5000" }),

  tagTypes: ["todo"],

  endpoints: (builder) => ({
    getTodos: builder.query({
      query: (priority) => {
        const params = new URLSearchParams();
        if (params) {
          params.append("priority", priority);
        }

        return {
          // url: `/tasks?priority=${priority}`,
          url: `/tasks`,
          method: "GET",
          // params: { priority },
          params: params,
        };
      },
      providesTags: ["todo"],
    }),
    addTodo: builder.mutation({
      query: (data) => {
        return {
          url: "/task",
          method: "POST",
          body: data,
        };
      },
      invalidatesTags: ["todo"],
    }),
    updatedTodo: builder.mutation({
      query: (taskData) => {
        return {
          url: `/task/${taskData.id}`,
          method: "PUT",
          body: taskData.data,
        };
      },
      invalidatesTags: ["todo"],
    }),

    deleteTodo: builder.mutation({
      query: (id) => ({
        url: `/task/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["todo"],
    }),
  }),
});

export const {
  useGetTodosQuery,
  useAddTodoMutation,
  useUpdatedTodoMutation,
  useDeleteTodoMutation,
} = baseApi;
