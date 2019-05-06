import React, { Component } from 'react';
import Navbar from './MyAppBar.js';
import Card from './FoodCard.js';
import Map from './SimpleMap';

class App extends Component {
  constructor(){
    super();
    this.state = {
      foods : [ 
        {
          title : 'Fried rice with onion',
          date : '20 April 2019',
          description : 'Lorem ipsum sit dolor amet'
        },
        {
          title : 'Mendoan',
          date : '21 April 2019',
          description : 'Lorem ipsum sit dolor amet'
        },
      ]
    }
  }

  render() {
    return (
    <div>
     <Navbar/>
     <br/>
     <Map/>
     {this.state.foods.map((data)=>{
       return(
         <div>
           <Card title={data.title} date={data.date} description={data.description}/>
           <br/>
         </div>
       )
     })}
     
     </div>
    );
  }
}

export default App;
