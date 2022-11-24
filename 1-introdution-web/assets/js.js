function addNewTask() {
    const list = document.getElementById('list')
    var text = document.getElementById('task_name').value
    if (text.length === 0) {
        alert('Tarefa não pode ser em branco');
        return;
    }
    var listItem = document.createElement('li')
    const textElement = document.createTextNode(text)
    listItem.className = 'list-item'
    listItem.appendChild(textElement)
    list.appendChild(listItem)
}
