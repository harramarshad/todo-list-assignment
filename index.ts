import inquirer from "inquirer";

let todoList: any[] = [];
let conditions = true;

console.log("\n Welcome to todoList application");

async function asyncWrap (conditions: any){
    let addTask =await inquirer.prompt([
        {
            name:"Task",
            type: "input",
            message:"Enter your new task : "

        }
    ]);
    todoList.push(addTask)
    console.log(`${addTask} Task added in todo list` );

    let addMoreTask = await inquirer.prompt([
      {
        name: "Add more",
        type: "confirm",
        message: "Wants to add more task?",
        default: "False",
      }
    
    ]);
    conditions = addMoreTask.addmore

};
console.log(" your todo list,", `${todoList}` );


