import { Component } from 'react';

import * as postService from './services/postService';

import style from './App.module.css';
import Header from './components/Header';
import Menu from './components/Menu';
import Main from './components/Main';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      posts: [],
      selectedPost: null
    }

    this.onMenuItemClick = this.onMenuItemClick.bind(this);
  }

  componentDidMount() {
    postService.getAll()
      .then(posts => {
        this.setState({ posts })
      });
  }

  onMenuItemClick(id) {
    this.setState({ selectedPost: id })
  }

  getPosts() {
    if (!this.state.selectedPost) {
      return this.state.posts;
    } else {
      let result = [this.state.posts.find(x => x.id === this.state.selectedPost)];
      console.log(result);
      return result;
    }
  }

  render() {
    return (
      <div className={style.app}>
        <Header />

        <div className={style.container}>
          <Menu
            onMenuItemClick={this.onMenuItemClick}
          />

          <Main
            posts={this.getPosts()}
          />
        </div>

      </div>
    );
  }
}
export default App;

// function App() {
//   return (
//     <div className={style.app}>
//       <Header />

//       <div className={style.container}>
//         <Menu />

//         <Main />
//       </div>

//     </div>
//   );
// }
