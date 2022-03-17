var botaoAdicionar = document.querySelector("#botaoDeAdicionar");

botaoAdicionar.addEventListener('click', function(event){
	
	event.preventDefault();

	criaLi();

	preencheTabela();

	fireEvent(document.getElementById('fechar-modal'), 'click');
})

function preencheTabela(){
	var form = document.querySelector('#form-adiciona');
	var projeto = obtemProjetoDoFormulario(form);

	var nomeLista = document.querySelector('#titulo-lista');
	nomeLista.textContent = form.nome.value;

	var nome = document.querySelector('h5')
	nome.textContent = form.nome.value;
	
	var responsavel = document.querySelector('#responsavel');
	responsavel.textContent = form.responsavel.value;
	
	var time = document.querySelector('#time');
	time.textContent = form.time.value;
	
	var descriçao = document.querySelector('#descricao')
	descriçao.textContent = form.descricao.value; 

	var dataInicio = document.querySelector('#data-inicio');
	dataInicio.textContent = form.dataInicio.value;

	var dataTermino = document.querySelector('#data-termino');
	dataTermino.textContent = form.dataTermino.value;

};

function criaLi() {
	var ul = document.querySelector('#ul');

	var li = document.createElement("li");
	li.classList.add('list-group-item');
	li.setAttribute('id', 'titulo-lista');
	li.setAttribute('data-toggle', 'modal');
	li.setAttribute('data-target', '#ModalLongoExemplo');
	li.setAttribute('data-index', '1');
	ul.appendChild(li);

	return li;
};

function obtemProjetoDoFormulario(form) {

	var projeto = {
		nome: form.nome.value,
		responsavel: form.responsavel.value,
		time: form.time.value,
		descriçao: form.descricao.value,
		dataInicio: form.dataInicio.value,
		dataTermino: form.dataTermino.value
	}
	return projeto;
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