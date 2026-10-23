import TodoList from "./todo/todo.list";
const Home = ()=> {

    const name =" dădwadaw";
    const age:number =18;
    const isRich: boolean = false;

    const clubs=["Dawdwa","Wdawdwa","dwadw","Dwadwa"]
    const students=
    [
        { name: "Dawd", age: 30},
        {name:"Dawdwa",age:233}
    ]
    // jsx
    return (
        <div>
        <h1> my name is {name} and {age} and rich ={isRich} </h1>
        {/* {age >= 18 && <div> ban dad dadaw </div> }*/}
         {clubs}      
         {JSON.stringify(students)}
         {/* reder list*/}
         {students.map((item,i) =>{
         
            return (<div>{item.name} -{item.age}</div>);
         })}
        
        <TodoList />
    
    
       </div>
      
    );
}
export default Home;