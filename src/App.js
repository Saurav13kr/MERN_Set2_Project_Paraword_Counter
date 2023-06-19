import React, { useState } from "react";

function App() {
  const [text, setText] = useState("");



  return (
    <div className="app">
      <h1> Responsive Paragraph Word Counter</h1>
      <form >
        <div >
          <textarea
            rows={10}
            value={text}
            onChange={(e) => {  
              setText(e.target.value);
            }}
      
          />
            <p> 

           </p>
          <label>Your Text</label>

          <div>Word Count: {text.length > 0? text.split(" ").length: 0}</div>
          <p> </p>
          <a href="https://github.com/Saurav13kr">GitHub</a>
          <p>  </p>
          <p>

          </p>
        </div>
      </form>
    </div>
  );
}

export default App;
