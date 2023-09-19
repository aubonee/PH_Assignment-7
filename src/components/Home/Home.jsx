import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useEffect } from "react";
import { useState } from "react";

import Cart from "../Cart/Cart";


const Home = () => {
  const[allcourses,setallcourses]=useState([]);
 const [selectedcourse, setselectedcourse] = useState([]);
 const [remaining, setRemaining] = useState(20);
 const [totalcreditHour, settotalcreditHour] = useState(0);
 
 useEffect(()=>{
    fetch("./courses.json")
    .then(res=>res.json())
    .then(data=>setallcourses(data));
   
},[])

//console.log(allcourses);
 const handleSelectcourse = (course) => {
  const isExist = selectedcourse.find((item) => item.id == course.id);
  let creditHour=course.credit_hours;
 
   
  if (isExist) {
  
   toast.warning('Already added!', {
    position: 'top-right',
    
   
  });
  }
   else {
    selectedcourse.forEach((item) => {
      
      creditHour = creditHour + item.credit_hours;
    });
    
    const totalRemaining=20-creditHour;
    
    
    if(creditHour>20){
     
      toast.warning('Sorry , Credit limit finished!', {
        position: 'top-right',
       
      });
    
    }
    else{
      
      settotalcreditHour(creditHour);
      setRemaining(totalRemaining);
      setselectedcourse([...selectedcourse, course]);
    }
   
}

 }




    return (
      
     <div className="body w-11/12 flex flex-row gap-2 mx-auto">
      <ToastContainer/>
      
       <div className="w-9/12 mx-auto Card-Container grid grid-cols-3  gap-x-5 gap-y-10">
      
           {allcourses.map((course) => (
              <div key={course.id} className="card bg-[#FFF] pt-5 shadow-sm text-left ">
              <figure className="px-3 ">
                <img src={course.thumbnail} alt="course thumbnail" className=" m-0 rounded-xl h-[180px]" />
                
              </figure>
              <div className="card-body p-3  my-0 w-full items-center">
                <h2 className="w-full card-title">{course.title}</h2>
                <p className="w-full card-desc">{course.description}</p>
                <div className="w-full my-1 price-credit m-0  flex justify-between ">
                    <div className="price flex">
                      <div className="price-icon"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M12 1V23" stroke="#1C1B1B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M17 5H9.5C8.57174 5 7.6815 5.36875 7.02513 6.02513C6.36875 6.6815 6 7.57174 6 8.5C6 9.42826 6.36875 10.3185 7.02513 10.9749C7.6815 11.6313 8.57174 12 9.5 12H14.5C15.4283 12 16.3185 12.3687 16.9749 13.0251C17.6313 13.6815 18 14.5717 18 15.5C18 16.4283 17.6313 17.3185 16.9749 17.9749C16.3185 18.6313 15.4283 19 14.5 19H6" stroke="#1C1B1B" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg></div>
                      <div className="price-text">Price : {course.price}</div>
                   </div>
                   <div className="credit flex">
                      <div className="credit-icon"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M12 6.042C10.3516 4.56336 8.2144 3.74694 6 3.75C4.948 3.75 3.938 3.93 3 4.262V18.512C3.96362 18.172 4.97816 17.9989 6 18C8.305 18 10.408 18.867 12 20.292M12 6.042C13.6483 4.56328 15.7856 3.74685 18 3.75C19.052 3.75 20.062 3.93 21 4.262V18.512C20.0364 18.172 19.0218 17.9989 18 18C15.7856 17.9969 13.6484 18.8134 12 20.292M12 6.042V20.292" stroke="#1C1B1B" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg></div>
                      <div className="credit-text">Credit : {course.credit_hours}hr</div>
                   </div>
                  
                </div>
                <div className="w-11/12">
                  <button onClick={()=>handleSelectcourse(course)} className="w-full btn text-white bg-[#2F80ED] ">Select</button></div>
              </div>
                        </div>
           ))}
         </div>
         <div className="">
          <Cart 
           selectedcourse={selectedcourse}
           remaining={remaining}
           totalcreditHour={totalcreditHour}
          ></Cart></div>
     </div>

      
    );
}


export default Home;