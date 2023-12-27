import React from 'react'
import RestaurantCard from './RestaurantCard'
import restaurantList from "./RestaurantList.json";
import { useState } from 'react';



const Main = () =>{

  const [restaurantData , setRestaurantData] = useState(restaurantList); 
  //Sorting Functions

  const onSeachChange =(e)=>{

    // here (e.target.value) se pata chal jayega ki what user is typing
   //  console.log(e.target.value);

     const searchKey = e.target.value;
     const filteredList = restaurantList.filter((data)=>
      data.name.toLowerCase().includes(searchKey.toLowerCase())
     );

     console.log(filteredList);

     setRestaurantData(filteredList);

  };

  // for Rating logic

  const onRatingChange =(e)=>{
    console.log(e.target.value);

    const inputRating= e.target.value;
     const filteredList = restaurantList.filter((data)=>
      data.rating >= inputRating
     );

     setRestaurantData(filteredList);

  }



  // console.log(restaurantList);
  // const ResturantDetails = {
  //   name: "CH chinease",
  //   address: "2233 djhs",
  //   type_of_food: "chinease",

  // };

  return(

  <>
 <section>

{/* for search box here we need an event as "keyup" event but her in react we use the "change" event */}

<div style={{display:"flex",justifyContent:"space-evenly"}}>
<input type="text" 
placeholder='search Restaurant...' 
onChange={onSeachChange} style={{margin:"30px 50px 75px", padding:"10px"}}/>


    {/* apply logic for Rating part  */}


   <span style={{marginTop:"30px",marginLeft:"500px"}}>Minimum Rating:</span><input type="number" step="1" min={1} max={5} onChange={onRatingChange} style={{height: "30px",width:"70px",marginTop:"30px" }}/>

   </div>


{/* //all the logic part & variable  come under jsex here we apply loop on the restaurantlist  */}

      {
      restaurantData.map((resturantDetails , index) => {


        return(
          <RestaurantCard
          // key = {resturantDetails._$oid._$oid}
                   {...resturantDetails} 
         />

        );
      
             
           

        })
        }
      
    </section>


    </>
  );
};

export default Main;
