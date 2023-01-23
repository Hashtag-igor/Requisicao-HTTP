//REQUISIÇÕES HTTP EM JAVASCRIPT

//GET com Fetch

fetch("https://jsonplaceholder.typicode.com/todos") //fetch() = pega a url/caminho;
.then((response) => response.json()) //then((response) = refere-se a url dentro do fetch || response.json() = transforma o conteúdo dela (que vem como texto), para formato json;
.then((data) =>{ //then((data) = refere-se ao conteúdo em formato json que foi transformado acima;
    console.log(data) //aqui vai mostrar os conteúdos vindos da url, em formato json;
})
.catch((error) => {  //catch() = responsável pela parte de ERRO do fetch;
    console.log(error)
})


/*____________________________________________________________________________________________________________________*/
//GET com Axios

axios.get("https://jsonplaceholder.typicode.com/todos") //axios.get() = funciona como no fetch, pega a url/caminho;
.then((response) =>{ //then((response) = refere-se a url dentro do fetch
    console.log(response.data) //O response.data = é porque o conteúdo está dentro de response e se chama data;
})
.catch((error) =>{
    console.logo(error)
})


/*____________________________________________________________________________________________________________________*/
//POST com Fetch

const data = {
    title: "Algum titulo",
    content: "Algum conteúdo",
    userId: 1,
}

fetch("https://jsonplaceholder.typicode.com/todos", { //valores da url + valores da variavel "data" acima
    method: "POST",  //qual será o metodo (get ou post)
    headers:{
        "Content-Type": "application/json",  //qual será o tipo de applicação, no caso json
    },
    body: JSON.stringify(data)  //data nesse caso é a variavel que foi criada antes do fetch. Vai transformar de javascript para string;
})

//Pegando o conteúdo que acabei de passar acima..
.then((response) => response.json())
.then((data) =>{
    console.log(data)
})
.catch((error) =>{
    console.log(error)
})


/*____________________________________________________________________________________________________________________*/
//POST com Axios

const dataAx = {
    title: "Algum titulo",
    content: "Algum conteúdo",
    userId: 1,
}

axios.post("https://jsonplaceholder.typicode.com/todos", dataAx)  //valores da url + valores da variavel "dataAx" acima;

//Pegando o conteúdo que acabei de passar acima..
.then((response) =>{
    console.log(response.data)
})
.catch((error) =>{
    console.log(error)
})