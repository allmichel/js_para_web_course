//let idElementoAudio = 
function tocaSom(idElementoAudio){
    document.querySelector(idElementoAudio).play();
}

function tocaSomClap(){
    document.querySelector('#som_tecla_clap').play();
            
    }
  /* O uso do ponto(.) faz com que entre no elemento que está sendo buscado pelo querySelector.
  e a partir dele, o js vai mostrar uma série de opções(funcionalidade e propriedades) que serão 
  possíveis ser consultadas ou executadas 
  
  OBS: em  <- onclick = tocaSomPom() -> o js não atribui o <- tocaSomPom ->, mas 
  ele tenta executar automaticamente a função ao a pagina ser carregada. 
  Mas para o <- onclick -> atribuir esta função, ele precisa estar sem os parenteses.   
  */
//document.querySelector('.tecla_pom').onclick = tocaSomPom;

// Referencias => <- const ListaDeTeclas ->
const ListaDeTeclas =  document.querySelectorAll('.tecla');
let i = 0;

while (i<ListaDeTeclas.length) {
    
    const tecla = ListaDeTeclas[i];
    
    const instrumento = tecla.classList[1];
    //template string
    //obs: procurar por exercicios com template string
    const idAudio = `#som_${instrumento}`;

    console.log(idAudio);
    //                       Função anônima
    ListaDeTeclas[i].onclick = function(){
        tocaSom(idAudio);
    };

    i += 1;
    console.log(i);

    
}
