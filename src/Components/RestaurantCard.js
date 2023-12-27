import React from 'react'



const RestaurantCard = (props) => {

  console.log(props);
  return (
    
    <div style={{display:"inline-block", }}>
    <div style={{ margin:"20px", padding:"0px 20px",width:"350px",height:"330px", boxShadow:"0px 3px 8px rgb(100,100,100",lineHeight:"1.2"}}>
     
      <h1 style={{fontSize:"20px",padding:"20px"}}>{props.name}</h1>
      <h3 style={{opacity:"0.7"}}>Rating:{props.rating}</h3>
      <h4 style={{opacity:"0.7"}}>{props.address}</h4>
      <h4 style={{opacity:"0.7",}}>{props.outcode}{props.postcode}</h4>
      
      <h5 style={{opacity:"0.7",color:"green",fontSize:"20px"}}>{props.type_of_food}</h5>
      <a style={{color:"blue",textDecoration:"none"}} href="./">Visit menu</a>


    </div>
    </div>
    
  )
}


export default RestaurantCard;
