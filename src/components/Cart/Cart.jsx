/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from "react";


  // eslint-disable-next-line no-unused-vars
  const Cart = ({selectedcourse, remaining,totalcreditHour}) => {
    console.log(selectedcourse);

    
    return (
     
      <div className="ml-3 cart bg-[#FFF] py-5  px-5 rounded-xl ">
        <h5 className="text-center text-[#2F80ED] text-md font-bold py-3">Credit Hour Remaining {remaining} hr</h5>
        <hr/>
        <h1 className="text-center text-md  font-bold py-3" >Course Name</h1>
        <div className="text-left text-gray-500 py-3 px-5">
          <ol className="list-decimal">
          {selectedcourse.map((course) => (
          
          <li key={course.id}>{course.title}</li>
         
        ))}
          </ol>
       
        </div>
        
        
        
         <hr />
         <h5 className="text-md  font-bold py-3">Total Credit Hour : {totalcreditHour} </h5>
      </div>
    );
  };

export default Cart;