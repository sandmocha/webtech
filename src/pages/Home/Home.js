import React from 'react';  
import './Home.css';

import { Button, Modal } from 'semantic-ui-react'



class Home extends React.Component { 
  

  render() {
    return (
      <div> <a href ="/Login"><button class="ui button" role="button">Login</button></a>
      <div> <a href ="/Profile"><button class="ui button" role="button">Profile</button></a>
      <br></br>
      <div class="ui icon input">
  <input type="text" placeholder="Search..." />
  <i aria-hidden="true" class="search icon"></i>
</div>
<div>
  <i class="huge icons">
<i aria-hidden="true" class="red dont big icon"></i>
  <i aria-hidden="true" class="black user icon"></i></i>
</div>


      </div>
      </div>

    );
  }
}

export default Home;
