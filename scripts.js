let listTasks = [];
let newTask = Number(prompt('Do you want include tasks? 1 - Yes / 2 - Not'));

function task() {
    //let newTask = prompt('Do you want include tasks? 1 - Yes / 2 - Not');
    let title = prompt('What is the name for your task?');
    let description = prompt('What are you going to do?');
    let date = prompt('What is the date?');
    let tasks = `Title: ${title}
        Description: ${description}
        Date: ${date}`;
    listTasks.push(tasks);
    // Function Read Arrays
    function readArrayElements(element, index, array) {
        alert(element + ', task #' + (index + 1));
    }
    listTasks.forEach(readArrayElements);
}

while (newTask === 1) {
    task();
    newTask = prompt('Do you want include tasks? 1 - Yes / 2 - Not');
    //alert(listTasks.forEach((element) => console.log(element)));
    console.log(listTasks);
}

/*function readArrayElements(element, index, array) {
    alert(element + ',' + (index + 1));
}
listTasks.forEach(readArrayElements);*/

/*let wantViewTask = Number(
    prompt('Do you want view any task? 1 - Yes / 2 - Not')
);

while (wantViewTask === 1) {
    let dropTask =
        Number(prompt('What is the task (task number) you want to delete?')) -
        1;
    listTasks.splice(dropTask, 1);
    console.log(listTasks);
    dropTask = dropTask - 1;
    wantDeleteTask = Number(
        prompt('Do you want delete any task? 1 - Yes / 2 - Not')
    );
}*/

let wantDeleteTask = Number(
    prompt('Do you want delete any task? 1 - Yes / 2 - Not')
);

while (wantDeleteTask === 1) {
    let dropTask =
        Number(prompt('What is the task (task number) you want to delete?')) -
        1;
    listTasks.splice(dropTask, 1);
    console.log(listTasks);
    dropTask = dropTask - 1;
    wantDeleteTask = Number(
        prompt('Do you want delete any task? 1 - Yes / 2 - Not')
    );
}
