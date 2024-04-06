import inquirer from "inquirer";
import chalk from "chalk";

let todoList: string [] =[];
let conditions = true;

console.log(chalk.magenta.bold("\n\twelcome to my T0-D0 list App\n\t"))
// while(conditions){
//     let addTask = await inquirer.prompt([
//         {
//             name : "task",
//             type : "input",
//             message : chalk.greenBright.bold("Enter new task:")
//         }
//     ]);
//     todoList.push(addTask.task);
//     console.log(chalk.gray(`${addTask.task}  added in to-do list successfully`))
//     let addMoreTask = await inquirer.prompt([
//     {
//         name: "addmore",
//         type : "confirm",
//         message:chalk.yellowBright("Do you want to add more task?"),
//         default : "false"

// }
// ]);
// conditions = addMoreTask.addmore

// }
// console.log(chalk.blue("Your updated To-do list:" ,todoList));

let main = async () => {
    while (conditions){
        let option = await inquirer.prompt([
            {
                name : "choice",
                type : "list",
                message: "select an option",
                choices :["Add Task","Delete Task","Update task","View To-Do List","Exit"]

        }
    ]);
    if(option.choice === "Add Task"){
        await addTask()
    }
    else if (option.choice === "Delete Task"){
        await deleteTask()
    }
    else if(option.choice ==="Update task" ){
        await updateTask()

    }
    else if(option.choice === "View To-Do List"){
        await viewTask()

    }else if(option.choice === "Exit"){
        conditions = false ;
    }
    }
}
// function to add new task to the list
let addTask = async() => {
    let newTask = await inquirer.prompt([
        {
            name : "task",
            type : "input",
            message : "Enter your new task:"
        }
    ]);
    todoList.push(newTask.task);
    console.log(`\n ${newTask.task}task added successfully in To-Do list`);
}
// function to view all to-do list task.
let viewTask =  () => {
    console.log("\n Your To-Do list:\n");
    todoList.forEach((task,index) => {
        console.log(`${index + 1} :${task}`)
    });
    console.log("\n");
}
// function to delete a task from list
let deleteTask = async () =>{
    await viewTask()
    let taskIndex = await inquirer.prompt([
        {
            name : "index",
            type: "number",
            message : "Enter the 'index no.' of the task you want to delete:"
        }
    ]);
    let deletedTask = todoList.splice(taskIndex.index -1, 1);
    console.log(`\n${deletedTask} this task has been deleted successfully from your to-do list\n`);
}
// function to update a task
let updateTask = async ()=>{
    await viewTask()
    let update_task_index = await inquirer.prompt([
        {
            name: "index",
            type: "number",
            message: "Enter the' index no.' of the task you want to update :"
        },
        {
            name : "new_task",
            type : "input",
            message : " Now Enter new task name"

        }
    ]);
    todoList[update_task_index.index -1] = update_task_index.new_task
    console.log(`\n Task at index no. ${update_task_index.index -1} updated successfully [for updated list check option: "view to-do list"

    ]`)
}
main();
