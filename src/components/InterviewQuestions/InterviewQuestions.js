import React from 'react';
import { Accordion } from "react-bootstrap";
const InterviewQuestions = () => {
   return (
      <div>
         <h1 className='text-center text-info'>
            React Interview Questions
         </h1>
       <Accordion className='m-3'>
         <Accordion.Item eventKey="0">
           <Accordion.Header>How React works?</Accordion.Header>
           <Accordion.Body>
             Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
             eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
             ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
             aliquip ex ea commodo consequat. Duis aute irure dolor in
             reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
             pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
             culpa qui officia deserunt mollit anim id est laborum.
           </Accordion.Body>
         </Accordion.Item>
         <Accordion.Item eventKey="1">
           <Accordion.Header>How useState works?</Accordion.Header>
           <Accordion.Body>
             Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
             eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
             ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
             aliquip ex ea commodo consequat. Duis aute irure dolor in
             reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
             pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
             culpa qui officia deserunt mollit anim id est laborum.
           </Accordion.Body>
         </Accordion.Item>
         <Accordion.Item eventKey="2">
           <Accordion.Header>What are the differences between props vs state?</Accordion.Header>
           <Accordion.Body>
             Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
             eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
             ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
             aliquip ex ea commodo consequat. Duis aute irure dolor in
             reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
             pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
             culpa qui officia deserunt mollit anim id est laborum.
           </Accordion.Body>
         </Accordion.Item>
       </Accordion>
     </div>
   );
};

export default InterviewQuestions;