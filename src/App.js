import {Route ,BrowserRouter as Router,Switch } from 'react-router-dom';
import Join from './JoinNow';
import Signin from './Signin';
import Home from'./home.js';

import Curriculum from './Curriculum';
import Testimonial from './Testimonial';
import Members from './Members';


function App(){
  return(
      <div>
        

      <Router>
  <Switch>
  <Route exact path='/'><Home/></Route>
    
  <Route path='/JoinNow'> <Join/>  </Route> 
  <Route path='/Signin'> <Signin/> </Route>
  <Route  path='/Curriculum'> <Curriculum/> </Route>
  <Route path='/Testimonial'> <Testimonial/> </Route>
  <Route path='/Members'> <Members/> </Route>
  

  </Switch>
</Router>

</div>
  );
}

export default App;