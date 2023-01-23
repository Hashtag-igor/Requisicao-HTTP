import { useState } from 'react'
import { useNavigate } from "react-router-dom"

import "./NewPost.css"

import blogFetch from "../axios/config"

const NewPost = () => {
  const [title, setTitle] = useState()
  const [body, setBody] = useState()
  
  //useNavigate = Simula um redirect quando o usuario adiciona um post, ele é redirecionado para a Home;
  const navigate = useNavigate() 

  const createPost = async (e) =>{
    e.preventDefault()
    const post = {title, body, userId: 1}
    await blogFetch.post("/posts", {  //Vai passar a API "blogFetch" para a rota /posts e acrescentar + o conteúdo da variavel acima "post" junto;
      body: post,
    })

    //Quando terminar o form e enviar, será automaticamente enviado para a rota home;
    navigate("/")
  }

  return (
    <div className="new-post">
      <h2>Write a new post..</h2>
      <form onSubmit={(e) => createPost(e)}>
        <div className='form-control'>
          <label htmlFor="title">Titulo</label>
          <input type="text" name='title' id='title' placeholder='Digite o titulo' onChange={(e) => setTitle(e.target.value)}/>
        </div>
        <div className='form-control'>
          <label htmlFor="title">Conteúdo</label>
          <textarea name="body" id="body" placeholder='Digite o conteúdo' onChange={(e) => setBody(e.target.value)}></textarea>
        </div>
        <input type="submit" className='btn'/>
      </form>
    </div>
  )
}

export default NewPost