// version2
import React from "react";
import axios from "axios";

function ChatInterface({ onDeleteMessage }) {
  const handleDelete = () => {
    onDeleteMessage();
  };

  const handleSendMessage = async (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);
    const from = formData.get("from");
    const text = formData.get("text");

    try {
      await axios.post("https://jan-softa-cyf-chat-server.glitch.me/messages", {
        from,
        text,
      });
      window.location.reload();
    } catch (error) {
      console.error("Error sending message:", error);
    }
  };

  return (
    <div className="chat-interface">
      <h2>Send a message</h2>
      <form onSubmit={handleSendMessage}>
        <p>
          Name: <input type="text" name="from" placeholder="Your Name" /> <br />
          Message:{" "}
          <input type="text" name="text" placeholder="The message..." />
          <br />
        </p>
        <button type="submit">Send</button>
      </form>
      <br />
      <a href="/">See all messages</a>

      {/* Delete Message Form */}
      <form>
        <p>
          Delete Message:{" "}
          <input
            type="number"
            id="deleteId"
            name="id"
            placeholder="Delete message by ID..."
          />
        </p>
        <button type="button" onClick={handleDelete}>
          Submit
        </button>
      </form>

      <style jsx>
        {`
          .chat-interface {
            background-color: #f9f9f9;
            padding: 20px;
            border: 1px solid #ccc;
            border-radius: 5px;
            box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
            text-align: center;
          }

          h2 {
            color: #555;
          }

          form {
            margin-top: 20px;
          }

          input[type="text"] {
            padding: 5px;
            margin-bottom: 10px;
            width: 100%;
            border: 1px solid #ccc;
            border-radius: 4px;
          }

          button {
            padding: 8px 15px;
            background-color: #007bff;
            color: #fff;
            border: none;
            border-radius: 4px;
            cursor: pointer;
          }

          a {
            text-decoration: none;
            color: #007bff;
            display: block;
            margin-top: 10px;
          }
        `}
      </style>
    </div>
  );
}

export default ChatInterface;

// original
// import React from "react";

// function ChatInterface({ onDeleteMessage }) {
//   const handleDelete = () => {
//     onDeleteMessage();
//   };

//   return (
//     <div className="chat-interface">
//       <h1>CYF Chat</h1>
//       <h2>Send a message</h2>
//       <form action="/messages" method="post">
//         <p>
//           Name: <input type="text" name="from" placeholder="Your Name" /> <br />
//           Message:{" "}
//           <input type="text" name="text" placeholder="The message..." />
//           <br />
//         </p>
//         <button type="submit">Send</button>
//       </form>
//       <br />
//       <a href="/messages">See all messages</a>

//       {/* Delete Message Form */}
//       <form>
//         <p>
//           Delete Message:{" "}
//           <input
//             type="number"
//             id="deleteId"
//             name="id"
//             placeholder="Delete message by ID..."
//           />
//         </p>
//         <button type="button" onClick={handleDelete}>
//           Submit
//         </button>
//       </form>

//       <style jsx>
//         {`
//           .chat-interface {
//             // background-color: #f9f9f9;
//             padding: 20px;
//             border: 1px solid #ccc;
//             border-radius: 5px;
//             box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
//             text-align: center;
//           }

//           h1 {
//             color: #333;
//           }

//           h2 {
//             color: #555;
//           }

//           form {
//             margin-top: 20px;
//           }

//           input[type="text"] {
//             padding: 5px;
//             margin-bottom: 10px;
//             width: 100%;
//             border: 1px solid #ccc;
//             border-radius: 4px;
//           }

//           button {
//             padding: 8px 15px;
//             background-color: #007bff;
//             color: #fff;
//             border: none;
//             border-radius: 4px;
//             cursor: pointer;
//           }

//           a {
//             text-decoration: none;
//             color: #007bff;
//             display: block;
//             margin-top: 10px;
//           }
//         `}
//       </style>
//     </div>
//   );
// }

// export default ChatInterface;
