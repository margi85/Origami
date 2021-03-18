import './Main.scss';
import Post from '../Post';

const Main = ({
  posts
}) => {
  console.log(posts);
  return (
    <main className="main-container">
      <h1>Sooooooooooooome Heading</h1>

      <div className="posts">
        {posts.map(x =>
          <Post 
          key={x.id}
          content={x.content}
          author={x.author}
          />
        )}
      </div>

    </main>

  );
}

export default Main;
