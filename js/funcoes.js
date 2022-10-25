//cria uma variável para manipular um aquivo XML
xmlhttp = new XMLHttpRequest();
//lê um determinado arquivo xml no diretório do projeto
xmlhttp.open("GET","xml/conteudo.xml",false);
//envia o arquivo aberto para a leitura
xmlhttp.send();
//envia uma resposta do tipo XML
xmlDoc = xmlhttp.responseXML;

//cria um array a partir da quantidade de postagens
x = xmlDoc.getElementsByTagName("postagem");



function funcaoConteudo(){
    for(p=0; p<=2; p++){
    document.write(
        "<tr>" +
            "<td>" + x[p].getAttribute("codigo") + "</td>" +
            "<td>B</td>" +
            "<td>C</td>" +
            "<td>D</td>" +
        "</tr>");
    }
}