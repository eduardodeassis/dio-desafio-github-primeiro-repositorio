console.log('To-do list');

var textoItem = document.getElementById('to-do-item');
const listItensWrapper = document.getElementById('list-items');
var item = 0; 

function adicionar() {
    var texto = textoItem.value;
    listItensWrapper.innerHTML+='<input type="checkbox" id="item'+item+'" value="teste'+item+'"><label for="item'+item+'">'+texto+'</label><br>';
    var itemWrapper = document.getElementById('item'+item);
    item+=1;
}