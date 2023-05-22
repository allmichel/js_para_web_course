function tocaSom(idElementoAudio){
    document.querySelector(idElementoAudio).play();
}
// Referencias => <- const ListaDeTeclas ->
const ListaDeTeclas =  document.querySelectorAll('.tecla');
// criada a variavel contadora
let i = 0;

// o <- length -> conta o numeros de elementos da lista. Logo, ao invés de usar <- (i<9) -> usa-se o length
while (i<ListaDeTeclas.length) {

    // a <- tecla -> está atribuindo os elementos da <- ListaDeTeclas ->
    const tecla = ListaDeTeclas[i];
    
    // clasList lista as classes. Ex:
    // ListaDeTeclas[0].classlist
    // resultado = DOMTokenList [ "tecla", "tecla_pom" ]
 
    //1 pq ele vai sempre pegar o elemento 1 da classe(ex: tecla_pom)
    const instrumento = tecla.classList[1];
    //template string
    //Ele vai concatenar o id <- #som-> com por exemplo, a <- tecla_pom ->
    const idAudio = `#som_${instrumento}`;
    
    console.log(idAudio);
    //                       Função anônima

    ListaDeTeclas[i].onclick = function(){
        tocaSom(idAudio);
    };

    i += 1;
    console.log(i);

    
}