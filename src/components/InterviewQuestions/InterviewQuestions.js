import React from 'react';
import { Accordion } from "react-bootstrap";
const InterviewQuestions = () => {
   return (
     <div>
       <h1 className="text-center text-info">React Interview Questions</h1>
       <Accordion className="m-3">
         <Accordion.Item eventKey="0">
           <Accordion.Header>How React works?</Accordion.Header>
           <Accordion.Body>
             React is a declarative paradigm that facilitates reasoning about
             your application and strives to be both efficient and versatile. It
             creates basic views for each state of your application, and when
             your data changes, React will rapidly update and render the
             appropriate component.React makes use of the virtual DOM (V.DOM) -
             a representation of the DOM that does not change anything on the
             screen. We edit the DOM whenever we wish to update the content of
             JavaScript, however it is rather costly. The V.DOM is simply a DOM
             representation, but it is lightweight and independent of
             browser-specific implementation details. It has the same features
             as a true DOM object, but is faster because it is faster and less
             memory intensive. React use JSX and JSX(JavaScript and XML) but
             Babel compile it into JavaScript code.
           </Accordion.Body>
         </Accordion.Item>
         <Accordion.Item eventKey="1">
           <Accordion.Header>How useState works?</Accordion.Header>
           <Accordion.Body>
             useState is a Hook that enables state variables in functional
             components. You supply the initial state to this function, and it
             returns a variable with the current state value (which may or may
             not be the starting state) and another function to update this
             value.In React, there are two kinds of components: class components
             and functional components. Class components are React-derived ES6
             classes. Component with state and lifecycle methods. Functional
             components are functions that only receive parameters as component
             attributes and return valid JSX. In class components, there are no
             state or lifecycle methods. Hooks, however, are now available in
             React 16.8. React Hooks are functions that add state variables to
             functional components as well as instrument class lifecycle
             routines. As previously stated, useState enables you to add state
             to function components. UseState within a function component
             creates a single piece of state linked with that component. It's
             very effective for local component state, but bigger projects may
             necessitate additional state management solutions.
           </Accordion.Body>
         </Accordion.Item>
         <Accordion.Item eventKey="2">
           <Accordion.Header>
             What are the differences between props and state?
           </Accordion.Header>
           <Accordion.Body>
             The Data is passed from one component to another with props.The
             Data is passed within the component only with state. Props is
             Immutable (cannot be modified). State is Mutable ( can be
             modified). Props can be used with state and functional
             components.State can be used only with the state components/class
             component (Before 16.0).Props are read-only. State is both read and
             write.
           </Accordion.Body>
         </Accordion.Item>
       </Accordion>
     </div>
   );
};

export default InterviewQuestions;