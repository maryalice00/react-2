### Conceptual Exercise

Answer the following questions below:

- What is the purpose of the React Router?
its a library for React.js and enables navagation and routing in a react application

- What is a single page application?
A Single Page Application is a web application or website that interacts with the user by dynamically rewriting the current page rather than loading entire new pages from the server. 

- What are some differences between client side and server side routing?
client side is handled by the browser on the client side. Server side handles routing logic

- What are two ways of handling redirects with React Router? When would you use each?
redirect component: Use this component to specify a new location to redirect to. Useful for declarative redirects based on certain conditions.
history.push or history.replace: Use these methods to programmatically navigate or replace the current entry in the history stack. Useful for dynamic redirects or after certain actions.

- What are two different ways to handle page-not-found user experiences using React Router? 
Render a NotFound component: Create a component to render when no matching route is found.
Use a wildcard route (<Route path="*">): Catch all unmatched routes and render a NotFound component.

- How do you grab URL parameters from within a component using React Router?
Use the useParams hook from react-router-dom to access parameters from the URL within a component.

- What is context in React? When would you use it?
Context in React provides a way to share values (like themes, authentication state, etc.) across components without explicitly passing props at every level. It's used when data needs to be accessible by many components at different nesting levels.

- Describe some differences between class-based components and function
  components in React.
  syntax, state and lifecycle methods and use of "this" 

- What are some of the problems that hooks were designed to solve?
complexity of class components, reusability, readability and maintainability, funcitonal components as the primary building blocks 