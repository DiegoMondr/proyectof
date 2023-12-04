//Blog.jsx
import React,{useState} from 'react';

const Blog = () => {
  const [posts, setPosts] = useState([
    {
      id: 1,
      title: 'Medir la motivacion',
      content:
        `El comportamiento de las personas puede servir de indicador para medir la 
        motivación. Es un indicador bastante fiable, que los profesores pueden utilizar para estimar 
        la motivación de los alumnos y poder actuar sobre ella`,
      author: 'Rodriguez Moneo',
      date: 'Septiembre 21, 2020'
    },
    {
      id: 2,
      title: 'Que  hacer con el dolor?',
      content:
        `A veces, por más que hayamos puesto lo mejor de nosotros, la 
        resultante fue dolor. Saber cómo afrontarlo nos permite no sufrir de 
        más, y hallar en nosotros sabidurías insospechadas...`,
      author: 'Virginia Gawel',
      date: 'Abril 15, 2023'
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
    
    export default Blog;