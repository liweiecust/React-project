import React from 'react';
import ReactDOM from 'react-dom';
import Todo from './Todo';
import Home from './Home';
import About from './About';
import Inbox from './Inbox';
import {Router,Switch,Route,BrowserRouter,Link} from 'react-router-dom';
import {Provider} from 'react-redux';
import store from './store/store'
import Header from './Header';
import App from './App';
import Projects from './Projects';
import './App.css';
import MU from './Menu';
import App2 from './LayoutDemo';
import Vision from './Vision';

{/* <Router>
    <Route path="/" component={App}>
        <Route path="about" component={About}/>
        <Route path="inbox" component={Inbox}/>

    </Route>

</Router>    */}


ReactDOM.render(
    <Provider store={store}>
         <BrowserRouter> {/*browerHistory is no longer supported from react-router version 4.*/}
           
           <App>
               <Route path='/Home' component={Home}/>
               <Route path="/All Projects" component={Projects}/>
               <Route path="/Create MVT" component={Inbox}/>
               <Route path="/about" component={About}/>
               <Route path='/vision/:visionName' component={Vision}/>

           </App>
          
         
           
       </BrowserRouter>

    </Provider>
 
       
/* 
{/* <Route exact path="/" component={Home}/>
<Route path="/about" component={About}/>
<Route path="/inbox" component={Inbox}/> */
       

// {/* <div>
// <ul>
//     <li>
//         <Link to="/">Home</Link>
//     </li>
//     <li>
//         <Header/>
//     </li>
//     <li>
//         <Link to="/Inbox">Inbox</Link>
//     </li>
// </ul>

// </div> */}


, 
 document.getElementById("root"));

//  <Route path="/" component={About}>
//                 <Route path="about" component={About}/>
//                 <Route path="inbox" component={Inbox}/>

//             </Route>