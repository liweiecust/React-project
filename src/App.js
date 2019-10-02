import React from 'react';
import {render} from 'react-dom';
import {Router,Route,Link} from 'react-router-dom';
import Header from './Header';


class App extends React.Component{
    constructor(props){
        super(props);

    }

   render(){
       return(
           <div>
                <Header/> 
              
               {this.props.children}
            </div>

       )
   }
}
export default App;