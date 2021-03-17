import { Component } from 'react';
import style from './App.module.css';
import Header from './components/Header';
import Menu from './components/Menu';
import Main from './components/Main';

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

class App extends Component {
  render() {
    return (
      <div className={style.app}>
      <Header />

      <div className={style.container}>
        <Menu />

        <Main />
      </div>

    </div>
    );
  }
}

export default App;
