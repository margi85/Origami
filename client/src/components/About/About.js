import { Redirect, useHistory, withRouter, Switch, Route } from 'react-router-dom';

const About = ({
  match,
  history,
}) => {

  // if (Math.random() > 0.5) {
  //   return <Redirect to="/" />
  //   history.push('/');
  //   return null;
  // }
  console.log(match);
  return (
    <main className="main-container">
      <h1>About {match.params.name} Page</h1>
      <Switch>
        <Route path="/about/pesho1">
          <h2>Pesho is the best!</h2>
        </Route>
      </Switch>
    </main>

  )
}

export default About;
