const TodoList = () =>
{
    const todos=[
        {id: 1, title :"dad", completed: false},
        {id: 2, title:"Daw", completed: true},
        {id: 3, title:"dw", completed: false},
    ];
    return(
        <div>
            {todos.map((todo,index) =>{
                return(
                    <div key ={index}>
                        {todo.id} : {todo.title}
                    </div>
                )
            })}
        </div>
    );
}
export default TodoList;