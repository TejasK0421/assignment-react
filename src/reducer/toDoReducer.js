const initialData = {
  list: [],
  searchList: [],
  ImagesFetchList: [],
  tableAdd: [],
};

const toDoReducer = (state = initialData, action) => {
  switch (action.type) {
    case "ADD_TODO":
      const date = new Date();

      let day = date.getDate();
      let month = date.getMonth() + 1;
      let year = date.getFullYear();
      let currentDate = `${day}-${month}-${year}`;
      const { id, data } = action.payload;
      // console.log(state)
      return {
        ...state,
        list: [
          ...state.list,
          {
            id: id,
            data: data,
            datetime: currentDate,
          },
        ],
      };

    case "SEARCH_TODO":
      var newlist = state?.list?.filter((ele) =>
        ele?.data?.includes(action?.data)
      );
      //   console.log(action.data)
      return {
        ...state,
        searchList: newlist,
        searchListSearched: action.data,
      };
    case "SET_IMAGES":
      const dataTable = action.data;
      return {
        ...state,
        ImagesFetchList: dataTable,
      };

    case "Add_TO_TABLE":
      const dataTemp = action.data;
      return {
        ...state,
        tableAdd: [...state.tableAdd, dataTemp],
      };

    case "REMOVE_FROM_TABLE":
      const remainingItem = state.tableAdd.filter(
        (item) => item.id !== action.data
      );
      return {
        ...state,
        tableAdd: [...remainingItem],
      };

    default:
      return state;
  }
};

export default toDoReducer;
