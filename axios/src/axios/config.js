import axios from "axios"

//Dentro do blogFetch podem ser passados varias informações que serão incluidas dentro dos posts da API;
//Pode passar por exemplo aém da baseURL, um token;
//Para ter acesso a onde fica essas informações, vá em: inspecionar > rede > clica no metodo passado > cabeçalho
//IMAGEM EXPLICATIVA ANEXADA NA PASTA "LEIA"

const blogFetch = axios.create({ //Cria a variável e atribuímos a ela axios.create, que será a estrutura base do serviço de API que consumiremos;
//baseURL é fixo para passar o CAMINHO DA API. Se você digitar outra coisa, NÃO VAI FUNCIONAR;
    baseURL: "https://jsonplaceholder.typicode.com",
    
//headers é fixo para adicionar dados no cabeçalho da requisição. Se digitar outra coisa fora disso, NÃO VAI FUNCIONAR. Para passar dados pro cabeçalho de uma requisição, coloque dentro do headers: {};
    headers: {
        token: "informacaoPrivilegiada00255123",
        algumaCoisa: "Teste",
    }
    
})

export default blogFetch;