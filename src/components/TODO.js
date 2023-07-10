import React, { useState } from "react";
import { addTodo } from "../actions";
import { useSelector, useDispatch } from "react-redux";
// import List from './List';

export default function TODO() {
  const [todo, setTodo] = useState("");
  // const [list, setlist] = useState([])
  const list = useSelector((state) => state.toDoReducer.list);
  const dispatch = useDispatch();

  const listSearch = useSelector((state) => state.toDoReducer.searchList);
  const searchBox = useSelector(
    (state) => state.toDoReducer.searchListSearched
  );

  return (
    <div>
      {/* <form onSubmit={handleSubmit}> */}
      <div className="inputBoxText">
        <input
          type="text"
          name="toDolist"
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
          placeholder="add To-Do List"
        />
        <ol></ol>
        <button
          className="todoButton"
          onClick={() => dispatch(addTodo(todo), setTodo(""))}
        >
          Enter To-Do list
        </button>
        {
          <table>
            <tr>
              <th>Item Name </th>
              <th>Created Date</th>
            </tr>
            {searchBox?.length > 0 ? (
              listSearch.length > 0 ? (
                listSearch.map((itemVal) => {
                  return (
                    <tr key={itemVal?.id}>
                      <td>{itemVal?.data}</td>

                      <td>{itemVal?.datetime}</td>
                    </tr>
                  );
                })
              ) : (
                <h1>No result Found</h1>
              )
            ) : (
              list.map((itemVal) => {
                return (
                  <tr key={itemVal?.id}>
                    <td>{itemVal?.data}</td>

                    <td>{itemVal?.datetime}</td>
                  </tr>
                );
              })
            )}
          </table>
        }
      </div>
      {/* </form> */}
    </div>
  );
}
