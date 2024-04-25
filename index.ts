#!/usr/bin/env node

import inquirer from "inquirer";

let todoos: string[] = [];

async function createTodo(todoos: string[]) {
    do {
        let ans = await inquirer.prompt({
            type: "list",
            name: "select",
            message: "select an operation",
            choices: ["Add", "update", "view", "delete"],
        });
    
        if (ans.select === "Add") {
            let addTodo = await inquirer.prompt({
                type: "input",
                message: "Add items in the list",
                name: "todo",
            });
            todoos.push(addTodo.todo);
           todoos.forEach(todo => {
             console.log(todo);
             
           });
        ;
        }
    
        if (ans.select == "update") {
            let updateTodo = await inquirer.prompt({
                type: "list",
                message: "update items in the list",
                name: "todo",
                choices: todoos.map(item => item),
            });
            todoos.forEach(todo => {
                console.log(todo)                
              });
            let addTodo = await inquirer.prompt({
                type: "input",
                message: "Add item in the list",
                name: "todo",
            }); 
            
            let newTodo = todoos.filter(val =>val !== updateTodo.todo);
            todoos = [...newTodo,addTodo.todo];               
        }
    
         if(ans.select === "view"){
            console.log("*** To Do List ***");
             todoos.forEach(todo => {
                console.log(todo);         
            });
                console.log("*/../*/../*")           
           
        }
         if(ans.select === "delete"){
            let deleteTodo = await inquirer.prompt({
                type: "list",
                message: "update items in the list",
                name: "todo",
                choices: todoos.map(item => item),
            });
            todoos.forEach(todo => {
                console.log(todo)                
              });
            let newTodo = todoos.filter(val =>val !== deleteTodo.todo);
            todoos = [...newTodo];
            console.log(todoos);            
            todoos.forEach(todo => {
                console.log(todo)                
              });
         }
    
       } while (true);
    }

createTodo(todoos);
