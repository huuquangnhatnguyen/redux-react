import React, { Suspense} from 'react';
import'./App.scss';
import { BrowserRouter, Routes, Route, Redirect, Link} from 'react-router-dom';
import NotFound from './components/NotFound';

const Photo = React.lazy(() => import('./features/Photo'));

function App() {
  return (
    <div className="photo-app">
      <Suspense fallback={<div>Loading ...</div>}>
        <BrowserRouter>
          <ul>
            <li><Link to='/photos'>Go to Photo page</Link></li>
            <li><Link to='/photos/add'>Go to Add new photo page</Link></li>
            <li><Link to='/photos/123'>Go to Edit photo page</Link></li>
          </ul>
          <Routes>
            <Redirect exact from  ='/' to="/photos"/>
            <Route path='/photos' component={Photo}/>
            <Route component={NotFound}/>
          </Routes>
        </BrowserRouter>
      </Suspense>
    </div>
  );
}

export default App;
