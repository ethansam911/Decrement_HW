      
import React, { Component } from 'react';

//Contact card is a component
class Decrement extends Component {
//Don't need this 
    /*    constructor(props)
    {
        super(props);
    }
*/
constructor(props)
{
  super(props)
  this.state = {number:0}
}

decrement = () => { 

  if(this.state.number<=0)
  {
      alert("Cannot decrease");   
  }
  else
  {
    this.setState({ number: this.state.number - 1 });
  }

}

  increment = () => 
  {
    console.log('clicked')
      this.setState({ number: this.state.number + 1 });
  }


  render() 
  {
    return (
      <div className="Decrement_Button">
      <h1>  Value Change </h1>
        <button onClick={this.increment} type="button">Increment</button> 
        <button  onClick={this.decrement} type="button">Decrement</button> 
      <p> {this.state.number}</p>
      </div>
    );
  }
}


export default Decrement;
