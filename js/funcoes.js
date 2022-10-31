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
            "<td>" + x[p].getAttribute("codigo")+"</td>"+
            "<td> <img src='imgs/" + x[p].getElementsByTagName("imagem")[0].childNodes[0].nodeValue +"' width='150'></td>" +  
            "<td>" + x[p].getElementsByTagName("titulo")[0].childNodes[0].nodeValue + "</td>" +
            "<td>" + x[p].getElementsByTagName("corpo")[0].childNodes[0].nodeValue.substr(0,150) + "</td>" +
        "</tr>");
    }
}