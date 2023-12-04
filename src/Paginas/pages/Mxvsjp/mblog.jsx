//Mblog.jsx
import React, {useState} from 'react';

const Mblog = () => {
            const [posts, setPosts] = useState([
              {
                id: 1,
                title: 'Filosofias',
                content:
                  `Cuando hablamos de esta doctrina filosófica, una cuestión 
                  que resalta de ella es cómo esta sincretizada con componentes populares de su entorno`,
                author: 'Amaury García Rodríguez',
                date: 'Enero 13, 2020'
              },
              {
                id: 2,
                title: 'Paralelismos de Mexico y japon',
                content:
                  `Ambos son pueblos con una larga tradición histórica, un claro ejemplo de paralelismo cultural 
                  entre ellos son los budas en piedra del país nipón, y las cabezas olmecas de la nación mexicana”, 
                  explicó en la mesa redonda “La escultura Olmeca y el Buda en piedra de Japón”, que se realizó el 13 
                  de abril en el Auditorio “Alfonso Medellín Zenil`,
                author: 'Carlos Hugo Hermida Rosales',
                date: 'Abril 17, 2018'
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
    
    export default Mblog;