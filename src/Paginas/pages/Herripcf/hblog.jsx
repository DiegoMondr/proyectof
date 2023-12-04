//Hblog.jsx
import React, { useState } from 'react';

const Hblog = () => {
  const [posts, setPosts] = useState([
    {
      id: 1,
      title: 'Aprovechamiento',
      content:
        `Muy buen resumen de las herramientas de calidad. 
        Me parece que son herramientas muy útiles que pueden ayudar a las empresas y organizaciones a mejorar su rendimiento.
        En particular, la herramienta de Ishikawa me parece muy interesante. 
        Me parece que es una herramienta muy visual que puede ayudar a los equipos a comprender mejor los 
        problemas y a desarrollar soluciones efectivas.`,
      author: 'JuanReadd',
      date: 'Agosto 1, 2020'
    },
    {
      id: 2,
      title: 'Herramientas',
      content:
        `Estoy de acuerdo con Juan. Las herramientas de calidad son muy útiles para identificar y resolver problemas.

        Yo he utilizado la herramienta de Pareto en mi trabajo y me ha sido muy útil para identificar las causas más 
        importantes de un problema. Esto me ha permitido centrar mis esfuerzos en resolver esas causas primero.
        
        En general, creo que las herramientas de calidad son una herramienta indispensable para cualquier persona o 
        organización que quiera mejorar su rendimiento.`,
      author: 'MitzuyMaríabener',
      date: 'Julio 15, 2018'
    }
  ]);

  const [newPost, setNewPost] = useState({
    title: '',
    content: '',
    author: 'Anonymous', // Set a default author
    date: new Date().toLocaleDateString() // Set current date as default
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setNewPost({ ...newPost, [name]: value });
  };

  const handlePost = () => {
    if (newPost.title && newPost.content) {
      const updatedPosts = [...posts, { ...newPost, id: posts.length + 1 }];
      setPosts(updatedPosts);
      setNewPost({ title: '', content: '', author: 'Anonymous', date: new Date().toLocaleDateString() });
    } else {
      alert('Please fill in both title and content fields.');
    }
  };

  return (
    <div className="Ablog" style={{
      backgroundColor: '#616161ac76',
      padding: '20px',
      borderRadius: '15px',
      margin: '20px',
      width:'80%',
      marginLeft:'10%',
      marginRight:'10%',


    }}>
      <h1 style={{
        color: '#6a0dad',
        fontSize: '70px',
        textAlign: 'center',
      }}
      >Comunity Blog</h1>
      
      <div className="posts">
        {posts.map((post) => (
          <div key={post.id} className="post">
            <h2 style={{
              color: '#6a0dad',
              fontSize: '30px',
              textAlign: 'center',
            }}>{post.title}</h2>
            <p style={{
              fontSize: '20px',
              textAlign: 'center',
              maxWidth:'50%',
              marginLeft:'25%',
              marginRight:'25%',
              backgroundColor:'lightgrey',
              padding:'20px',
              borderRadius: '15px',

            }}>{post.content}</p>
            <div style={{
              display:'flex',
              justifyContent:'space-around',
              alignItems:'center',
              flexDirection:'row'
            }}>
              <p>
              <strong>Author:</strong> {post.author}
            </p>
            <p>
              <strong>Date:</strong> {post.date}
            </p>
            </div>
            
          </div>
        ))}
      </div>
      <div className="new-post" style={{
        display:'flex',
        flexDirection:'column',
        justifyContent:'space-around',
        alignItems:'center',
        padding:'20px',
        borderRadius: '15px',
        backgroundColor:'lightgrey',
      }}>
        <input
          type="text"
          placeholder="Title"
          name="title"
          value={newPost.title}
          onChange={handleInputChange}
          style={{
            width:'50%',
            padding:'10px',
            borderRadius: '15px',
            border:'none',
            outline:'none',
          }}
        />
        <textarea
          placeholder="Content"
          name="content"
          value={newPost.content}
          onChange={handleInputChange}
          style={{
            width:'50%',
            padding:'10px',
            borderRadius: '15px',
            border:'none',
            outline:'none',
            margin:'10px'
            
          }}
        ></textarea>
        <button onClick={handlePost} style={{
          width:'50%',
          padding:'10px',
          borderRadius: '15px',
          border:'none',
          outline:'none',
          backgroundColor:'#6a0dad',
          color:'white',
          fontSize:'20px',
          fontWeight:'bold',
        }}>Post</button>
      </div>
    </div>
  );
};
    
    export default Hblog;