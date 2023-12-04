//Bblog.jsx
import React, {useState}from 'react';

const Bblog = () => {
  const [posts, setPosts] = useState([
    {
      id: 1,
      title: 'Apertura a la Experiencia',
      content:
        `El estudio de la personalidad siempre ha suscitado gran interés por parte de investigadores, al mismo tiempo que ha despertado la curiosidad en personas no versadas. 
        Los seres humanos tendemos a categorizarnos a nosotros mismos y a nuestros semejantes en base a distintas actitudes y rasgos. 
        Es así como surgió una de las principales clasificaciones de personalidad de las que forma parte el rasgo que hoy nos ocupa: la apertura a la experiencia.`,
      author: 'Elena Sanz',
      date: 'Agosto 21, 2022'
    },
    {
      id: 2,
      title: 'Extremo Opuesto',
      content:
        `En el extremo opuesto se encuentran quienes viven siguiendo un estilo laissez faire. 
        Normalmente son personas más descuidadas en sus tareas, no tienen propósitos de vida tan bien definidos y son mucho más informales. 
        Su principal problema es que suelen dejar a mitad muchos de sus proyectos 
        ya que no suelen contar con el autocontrol y la tenacidad necesarios para llevarlos a buen puerto'`,
        author:'Rosario Linares',
        date: '07 JULIO 2023'
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
    
    export default Bblog;