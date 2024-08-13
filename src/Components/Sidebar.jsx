
import React from "react";
function Sidebar() {
  return(
    <>
    <div class="container">
        <div class="sidebar">
            <div class="logo"> 

             <img src ="./images/pro.jpg" alt=""/>
             <h2>Deals of Arya</h2>
            </div>     
                
            
            <ul>
                
                <li>
                  <a href="/dashboard">
                  <div class="das"> 
                  <img src ="./images/pro.jpg" alt=""/>
                  <span>Dashboard</span>
                  </div>
                  </a>
                </li>
                <li> <a href="#">Masters</a></li>
                <li><a href="/masters">User Master</a></li>
                <li><a href="/leads">Lead Source Master</a></li>
                <li><a href="/">Leads</a></li>
                <li><a href="/clients">Clients</a></li>
                <li><a href="/task">Task management</a></li>
                <li><a href="/invoice">Invoice</a></li>
                <li><a href="/settings">Settings</a></li>
            </ul>
          </div>
        

      
          
        </div>
       
      </>

  
     
  );
}
export default Sidebar;