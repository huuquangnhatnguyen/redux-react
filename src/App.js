import React, { Suspense } from 'react';
import './App.scss';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import NotFound from './components/NotFound';
import Header from './components/Header';


const Photo = React.lazy(() => import('./features/Photo'));

function App() {
  return (
    <div className="photo-app">
      <Suspense fallback={<div>Loading ...</div>}>

        <BrowserRouter>
          <Header />

          {/* <ul>
            <li><Link to='/photos'>Go to Photo page</Link></li>
            <li><Link to='/photos/add'>Go to Add new photo page</Link></li>
            <li><Link to='/photos/123'>Go to Edit photo page</Link></li>
          </ul> */}
          <Switch>
            <Redirect exact from="/" to="/photos" />
            <Route exact path='/photos' component={Photo} />
            <Route component={NotFound} />
          </Switch>
        </BrowserRouter>
      </Suspense>
    </div>
  );
}

export default App;
