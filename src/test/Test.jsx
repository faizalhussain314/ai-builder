import React, { useState, useEffect } from "react";


const Test = () => {
  const [messageFromChild, setMessageFromChild] = useState("hi");

  const handleMessageFromChild = (event) => {
    setMessageFromChild(event.data);
  };

  const sendMessageToChild = () => {
    const iframe = document.getElementById("myIframe");
    iframe.contentWindow.postMessage("Hello from parent!", "*");
  };



  // const requestOptions = {
  //   method: 'POST',
  //   headers: { 'Content-Type': 'application/json' },
  //   body: JSON.stringify({ title: 'test request' })
  // };
  // fetch('https://stagging.webspacekit.com/new-react-webhook-file.php', requestOptions)
  //   .then(async response => {
  //     const isJson = response.headers.get('content-type')?.includes('application/json');
  //     const data = isJson && await response.json();
  //     console.log(data)
  //     // check for error response
  //     if (!response.ok) {
  //       // get error message from body or default to response status
  //       const error = (data && data.message) || response.status;
  //       return Promise.reject(error);
  //     }


  //   })
  //   .catch(error => {

  //     console.error('There was an error!', error);
  //   });

  const handleClick = async () => {
    try {
      const response = await fetch('/process-content', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ tempid: '1' })
      });
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      console.log('Response:', data);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <>
      <div>
        <div>
          <h4>Message from child: {messageFromChild}</h4>
        </div>
        <button onClick={sendMessageToChild}>Send Message to Child</button>
        <iframe id="myIframe" title="Child iFrame" src="http://localhost:8080/child.html"></iframe>
      </div>
      <div>
        <button onClick={handleClick}>Send POST Request</button>
      </div>
    </>
  );
};

export default Test;
