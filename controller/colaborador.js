var botaoAdicionar = document.querySelector("#botaoDeAdicionar");

botaoAdicionar.addEventListener('click', function(event){
	
	event.preventDefault();

	criaLi();

	preencheTabela();

	fireEvent(document.getElementById('fechar-modal'), 'click');
})

function preencheTabela(){
	var form = document.querySelector('#form-adiciona');
	var tarefa = obtemTarefaDoFormulario(form);

	var tituloLista = document.querySelector('#titulo-lista');
	tituloLista.textContent = form.titulo.value;

	var titulo = document.querySelector('h5')
	titulo.textContent = form.titulo.value;

	var descriçao = document.querySelector('#descricao')
	descriçao.textContent = form.descricao.value; 

	var responsavel = document.querySelector('#responsavel');
	responsavel.textContent = form.responsavel.value;

	var prioridade = document.querySelector('#prioridade');
	prioridade.textContent = form.prioridade.value;

	var estimativa = document.querySelector('#estimativa');
	estimativa.textContent = form.estimativa.value;

	var data = document.querySelector('#data');
	data.textContent = form.data.value;

	var projetoAssociado = document.querySelector('#projeto');
	projetoAssociado.textContent = form.projetoAssociado.value;

	var tarefaAssociada = document.querySelector('#tarefaAssociada');
	tarefaAssociada.textContent = form.tarefaAssociada.value
};

function criaLi() {
	var ul = document.querySelector('#ul');

	var li = document.createElement("li");
	li.classList.add('list-group-item');
	li.setAttribute('id', 'titulo-lista');
	li.setAttribute('data-toggle', 'modal');
	li.setAttribute('data-target', '#ModalLongoExemplo');
	li.setAttribute('data-index', '1')
	ul.appendChild(li);

	return li;
};

 function obtemTarefaDoFormulario(form) {

	var tarefa = {
		titulo: form.titulo.value,
		descriçao: form.descricao.value,
		responsavel: form.responsavel.value,
		prioridade: form.prioridade.value,
		estimativa: form.estimativa.value,
		data: form.data.value,
		projetoAssociado: form.projetoAssociado.value,
		tarefaAssociada: form.tarefaAssociada.value
	}
	return tarefa;
};

function fireEvent(obj, evt) {
	var fireOnThis = obj;
	if (document.createEvent) {
		var evObj = document.createEvent('MouseEvent');
		evObj.initEvent( evt, true, false );
		fireOnThis.dispatchEvent( evObj );
	}
	else if( document.createEventObject ) { 
		var evObj = document.createEventObject();
		fireOnThis.fireEvent( 'on' + evt, evObj );
	}
};

document.getElementById("remove").onclick = function () {

	alert("Confirmar a exclusão desta tarefa ?");

    var el = document.querySelector("[data-index='1']");
    var pa = el ? el.parentNode : null;

    if (pa) {
        pa.removeChild(el);
    }

};