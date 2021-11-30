import {atom, useAtom} from 'jotai';
import { produce } from 'immer';

const todoListAtom = atom([
    { id: crypto.randomUUID(), content: "토끼는 전화해요", completed: false },
]);

function useTodoListAtom(){
    const [todoList, setTodoList] = useAtom(todoListAtom)

    function addTodo(content){
        if(content !== '') {
            const newTodo = {
                id : crypto.randomUUID(),
                content : content,
                completed : false,
            }
            setTodoList(old => [...old, newTodo])
        }
    }

    function changeTodo(targetId, newContent){
        setTodoList(produce(old => {
            const target = old.find(todo => todo.id === targetId);

            target.content = newContent;
        }))
    }

    function completeTodo(targetId){
        setTodoList(produce(old =>{
            const target = old.find(todo => todo.id === targetId);

            target.completed = ! target.completed;
        }))
    }
   
    function completeAll(){
        if(todoList.every(todo => todo.completed)){
            setTodoList(old => old.map(todo => ({...todo, completed : false}) ))
        } else {
            setTodoList(old => old.map(todo => ({...todo, completed : true}) ))
        }
    }


    // https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array

    function deleteTodo(targetId){
        setTodoList(old => old.filter(todo => todo.id !== targetId))
    }

    function clearCompleted(){
        setTodoList(old => old.filter(todo => todo.completed === false))
    }

    const loadSaved = setTodoList

    return { todoList, loadSaved, addTodo, changeTodo, completeTodo, completeAll, deleteTodo, clearCompleted };
}

export default useTodoListAtom;