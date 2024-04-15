import * as React from "react";

export default function Guestbook() {
  return (
    <div className="wrapper">
      <div className="header">
        <p>Guestbook</p>
      </div>
      <input type="text" className="m-2 p-2 w-2/5" placeholder="Name" />
      <textarea placeholder="Message" className="m-2 p-2 w-2/5" />
      <button className="m-2 p-2 bg-blue-500 text-white rounded-lg">
        Submit
      </button>
    </div>
  );
}
