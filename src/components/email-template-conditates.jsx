import * as React from "react";

export const EmailTemplateCondidates = ({ firstName, lastName,  Phone,Email }) => (
<div>
    
    <p><strong>My Name is : </strong>{firstName} {lastName}</p>
    
    <p >You&apos;ve received a message from someone interested in your portfolio or a collaboration opportunity:</p>
      <div>
        <p><strong>Name : </strong> {firstName} {lastName}</p>
        <p><strong>Email : </strong> {Email}</p>
        <p><strong>Phone Number : </strong> {Phone}</p>
        
        
      </div>
  </div>
);
