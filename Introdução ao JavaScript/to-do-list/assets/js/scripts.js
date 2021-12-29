console.log('To-do list');

const form = document.getElementById('task-form');
var textoItem = document.getElementById('to-do-item');
const listItensWrapper = document.getElementById('list-items');
var item = 0; 

form.onsubmit = function (e) {
	e.preventDefault();
	adicionar();
	form.reset();
};

function adicionar() {
    var texto = textoItem.value;   
    var idName = 'item'+item; 

    const taskContainer = document.createElement('div');
	const newTask = document.createElement('input');
	const taskLabel = document.createElement('label');
	const taskDescriptionNode = document.createTextNode(texto);

	newTask.setAttribute('type', 'checkbox');
	newTask.setAttribute('name', idName);
	newTask.setAttribute('id', idName);

	taskLabel.setAttribute('for', idName);
	taskLabel.appendChild(taskDescriptionNode);

	taskContainer.classList.add('list-items');
	taskContainer.appendChild(newTask);
	taskContainer.appendChild(taskLabel);

	listItensWrapper.appendChild(taskContainer);

    item+=1;
}