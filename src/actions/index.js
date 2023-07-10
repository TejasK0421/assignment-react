export const addTodo=(data)=>{
    return {
        type: "ADD_TODO",
        payload:{
            id : new Date().getTime().toString(),
            data : data
        }
    }
}

export const searchTodo=(data)=>{
    return {
        type: "SEARCH_TODO",
        data:data
    }
}

export const SetImages=(data)=>{
    return {
        type: "SET_IMAGES",
        data:data
    }
}

export const addtoTable=(data)=>{
    return {
        type: "Add_TO_TABLE",
        data:data
    }
}

export const removefromTable=(data)=>{
    return {
        type: "REMOVE_FROM_TABLE",
        data:data
    }
}

