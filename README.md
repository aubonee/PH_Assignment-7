# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

# Add at least 3 Project features
1. Each course is displayed with relevant details, including course name,description , price, and credit hours.

2.  The shopping cart displays the name of the chosen courses.

3.  If a user attempts to select a course they've already chosen, they receive an alert or toast message informing them of the duplication.

4. If users select  courses,  the total credit hours will be updated in the cart.The system will not accept any course selection after 20 credit courses added in the cart. 



# Discuss how you managed the state in your assignment project.
I used these 4 usestate.

  #  allcourses State:
 I used the “allcourses” state to store an array of all available courses. Initially, this state is set to an empty array. When the component mounts or when new data is fetched, I update this state to include the list of available courses. This state allows me to dynamically render and display the courses to the user.
 
  # selectedcourse State:
The “selectedcourse” state is used to keep track of the courses that the user has selected to add to their shopping cart. It is initialized as an empty array. Whenever a user adds or removes a course from their cart, I update this state accordingly to reflect the user's selections.

 # remaining State:
I used the “remaining” state to enforce a maximum limit of 20 credit hours for course selection. It starts with an initial value of 20. When a user adds a course to the cart, I decrement this value by the credit hours of the added course. If the remaining credit hours become zero or negative I prevent the user from adding more courses by giving a toast.

 # totalcreditHour State:
The “totalcreditHour” state is used to calculate and display the total credit hours of the courses currently in the user's cart. It starts with an initial value of 0. Whenever a course is added to cart, I update this state to reflect the current total credit hours.


