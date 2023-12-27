import React from 'react'


function Header(){

  // Header menu List
     let menuList =["Home","Quote","Resturant","Foods","contact"];
  
      return(
          <div className="header__container" style={{display:"flex",justifyContent:"space-between",backgroundColor:"#111827"}}>
  
            {/* Header logo & name */}
  
              <div style={{display:"flex", gap:"20px"}}>
  
              <img style={{cursor:"pointer", marginLeft:"40px"}} src="https://flowbite.com/docs/images/logo.svg"></img>
  
               <h1  style={{cursor:"pointer",color:"white", fontWeight:"bolder"}}>GeekFoods</h1>
               
               </div>
  
               {/* Header menu */}
              
              <ul style={{display:"flex", padding: "20px", gap: "40px", listStyle:"none", color:"white",}}>
                  {
                      menuList.map((list)=><li>{list}</li>)
  
                      //style={object of css}
  
                  }
                         </ul>
  
              <button style={{color:"white", height:"40px",width: "150px", marginTop:"20px",boxRadius:"10px", backgroundColor:"blue",fontWeight:"bolder",borderRadius:"10px", border:"1px solid black", }} >Get started </button>/
  
              </div>
  
  
              
  
  
              
  
              
          
          
      );
  }
  
  export default Header;