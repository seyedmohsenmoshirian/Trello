import './App.css';
import React, { Component } from 'react';

// image import
import Trello from './Trello.png';

// import React from 'react';
import Trello1 from './Trello1.png';







class App extends React.Component{
  render(){
  return(
  <div
      style={{
        backgroundImage: "linear-gradient(purple,#B041FF)",
        height:"620px",
        position:"relative",
        fontFamily: "fantasy"
      }}
    >
      <div style={{position:"absolute",
                  left:"70px",
                  top:"15px",
                fontSize:"30px"}}
                  >Trello
      </div>
      <div>
        <img style={{width:"28px",
        height:"28px",
        position:'absolute',
        left:"35px",
        top:"20px"}} src={Trello}/>
      </div>  
      <div style={{fontSize:"45px",position:"absolute",top:"200px",left:"100px",fontFamily:'fantasy'}}>Trello helps teams move work forward. </div> 
      <div style={{fontSize:"25px",position:"absolute",top:"270px",left:"100px",right:"400px",fontFamily:'-moz-initial'}}>Collaborate, manage projects, and reach new productivity peaks.<br/> From high rises to the home office, the way your team works is <br/>unique—accomplish it all with Trello. </div> 
      <div>
        <img style={{width:"400px",
        height:"500px",
        position:'absolute',
        left:"850px",
        top:"100px"}} src={Trello1}/>
      </div>  
      
      <div style={{fontFamily:"cursive"
      ,position:"absolute"
      ,top:"17px",
      fontSize:"25px",
      left:"1000px"}}>Log in</div>


      <form >
      <label>
      <input type="email" placeholder="Email"    style={{backgroundColor:"#0099FF",borderRadius:"5px",height:"50px",width:"380px",borderColor:"#1569CF",borderStyle:"solid",fontFamily:"cursive",position:"absolute",left:"100px",top:"360px"}}/>
      </label>
      
      <input type="submit" value="sign up-its free!" style={{height:"44px",background:"#0099FF",borderRadius:"5px",fontFamily:"cursive",borderColor:"blue",position:"absolute",left:"490px",top:"365px"}} />
      </form>


      <form style={{position:"absolute",top:"18px",left:"1100px"}}>
      <input type="submit" value="sign up" style={{height:"44px",background:"#0099FF",borderRadius:"5px",fontFamily:"cursive",borderColor:"blue"}}   />

      </form>

<div ></div>
      
  </div>
  
  
  )
  }
  }
  export default App;

  