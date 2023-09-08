function solution(todo_list, finished) {
    return todo_list.filter((e,idx)=>!finished[idx]);
}