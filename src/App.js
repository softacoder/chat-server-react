// version9
import React, { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
import ChatInterface from "./ChatInterface";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");
  const [data, setData] = useState([]);
  const [searchText, setSearchText] = useState("");

  const fetchLatestMessages = async () => {
    try {
      const res = await axios.get(
        "https://jan-softa-cyf-chat-server.glitch.me/messages/latest"
      );
      setData(res.data);
    } catch (error) {
      setError(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  const fetchMessagesBySearch = async () => {
    try {
      const res = await axios.get(
        `https://jan-softa-cyf-chat-server.glitch.me/messages/search?text=${searchText}`
      );
      setData(res.data);
    } catch (error) {
      setError(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchLatestMessages();
  }, []);

  const handleSearch = () => {
    if (searchText.trim() === "") return;
    setIsLoading(true);
    setError("");
    fetchMessagesBySearch();
  };

  const handleDeleteMessage = () => {
    const idToDelete = document.getElementById("deleteId").value;
    if (!idToDelete || isNaN(idToDelete)) {
      alert("Please enter a valid ID to delete.");
      return;
    }

    // const url = `/messages/delete/${idToDelete}`;
    const url = `https://jan-softa-cyf-chat-server.glitch.me/messages/delete/${idToDelete}`;
    axios
      .delete(url)
      .then((response) => {
        if (!response.data.success) {
          throw new Error("Error deleting message");
        }
        window.location.reload();
      })
      .catch((error) => {
        console.error("Error deleting message:", error);
      });
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>CYF Chat App</h1>
        <div className="chat-container">
          <div className="chat-messages">
            <input
              type="text"
              placeholder="Search messages..."
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
            />
            <button onClick={handleSearch}>Search</button>
            <ul>
              {data.map((message) => (
                <li key={message.id}>
                  <strong>{message.from}:</strong> {message.text}
                </li>
              ))}
            </ul>
          </div>
          <div className="chat-interface">
            <ChatInterface onDeleteMessage={handleDeleteMessage} />
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;

// version8
// import React, { useEffect, useState } from "react";
// import "./App.css";
// import axios from "axios";
// import ChatInterface from "./ChatInterface";

// function App() {
//   const [isLoading, setIsLoading] = useState(true);
//   const [error, setError] = useState("");
//   const [data, setData] = useState([]);
//   const [searchText, setSearchText] = useState(""); // State for search input

//   const fetchLatestMessages = async () => {
//     try {
//       const res = await axios.get(
//         "https://jan-softa-cyf-chat-server.glitch.me/messages/latest"
//       );
//       setData(res.data);
//     } catch (error) {
//       setError(error.message);
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   const fetchMessagesBySearch = async () => {
//     try {
//       const res = await axios.get(
//         `https://jan-softa-cyf-chat-server.glitch.me/messages/search?text=${searchText}`
//       );
//       setData(res.data);
//     } catch (error) {
//       setError(error.message);
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   useEffect(() => {
//     fetchLatestMessages();
//   }, []);

//   const handleSearch = () => {
//     if (searchText.trim() === "") return;
//     setIsLoading(true);
//     setError("");
//     fetchMessagesBySearch();
//   };

//   const handleDeleteMessage = () => {
//     const idToDelete = document.getElementById("deleteId").value;
//     if (!idToDelete || isNaN(idToDelete)) {
//       alert("Please enter a valid ID to delete.");
//       return;
//     }

//     const url = `/messages/delete/${idToDelete}`;
//     axios
//       .delete(url)
//       .then((response) => {
//         if (!response.data.success) {
//           throw new Error("Error deleting message");
//         }
//         // Refresh the page to see the updated messages list
//         window.location.reload();
//       })
//       .catch((error) => {
//         console.error("Error deleting message:", error);
//       });
//   };

//   if (isLoading) {
//     return <div>Loading...</div>;
//   }

//   if (error) {
//     return <div>Error: {error}</div>;
//   }

//   return (
//     <div className="App">
//       <header className="App-header">
//         <h1>CYF Chat App</h1>
//         <div className="chat-container">
//           <div className="chat-messages">
//             <input
//               type="text"
//               placeholder="Search messages..."
//               value={searchText}
//               onChange={(e) => setSearchText(e.target.value)}
//             />
//             <button onClick={handleSearch}>Search</button>
//             <ul>
//               {data.map((message) => (
//                 <li key={message.id}>
//                   <strong>{message.from}:</strong> {message.text}
//                 </li>
//               ))}
//             </ul>
//           </div>
//           <div className="chat-interface">
//             <ChatInterface onDeleteMessage={handleDeleteMessage} />
//           </div>
//         </div>
//       </header>
//     </div>
//   );
// }

// export default App;

// version7 it has no html content
// import React, { useEffect, useState } from "react";
// import "./App.css";
// import axios from "axios";
// import ChatInterface from "./ChatInterface"; // Import the new component

// function App() {
//   const [isLoading, setIsLoading] = useState(true);
//   const [error, setError] = useState("");
//   const [data, setData] = useState([]);
//   const [searchText, setSearchText] = useState(""); // State for search input

//   const fetchLatestMessages = async () => {
//     try {
//       const res = await axios.get(
//         "https://jan-softa-cyf-chat-server.glitch.me/messages/latest"
//       );
//       setData(res.data);
//     } catch (error) {
//       setError(error.message);
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   const fetchMessagesBySearch = async () => {
//     try {
//       const res = await axios.get(
//         `https://jan-softa-cyf-chat-server.glitch.me/messages/search?text=${searchText}`
//       );
//       setData(res.data);
//     } catch (error) {
//       setError(error.message);
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   useEffect(() => {
//     fetchLatestMessages();
//   }, []);

//   const handleSearch = () => {
//     if (searchText.trim() === "") return;
//     setIsLoading(true);
//     setError("");
//     fetchMessagesBySearch();
//   };

//   const handleDeleteMessage = () => {
//     const idToDelete = document.getElementById("deleteId").value;
//     if (!idToDelete || isNaN(idToDelete)) {
//       alert("Please enter a valid ID to delete.");
//       return;
//     }

//     const url = `/messages/delete/${idToDelete}`;
//     axios
//       .delete(url)
//       .then((response) => {
//         if (!response.data.success) {
//           throw new Error("Error deleting message");
//         }
//         // Refresh the page to see the updated messages list
//         window.location.reload();
//       })
//       .catch((error) => {
//         console.error("Error deleting message:", error);
//       });
//   };

//   if (isLoading) {
//     return <div>Loading...</div>;
//   }

//   if (error) {
//     return <div>Error: {error}</div>;
//   }

//   return (
//     <div className="App">
//       <header className="App-header">
//         <input
//           type="text"
//           placeholder="Search messages..."
//           value={searchText}
//           onChange={(e) => setSearchText(e.target.value)}
//         />
//         <button onClick={handleSearch}>Search</button>
//         <ul>
//           {data.map((message) => (
//             <li key={message.id}>
//               <strong>{message.from}:</strong> {message.text}
//             </li>
//           ))}
//         </ul>
//         <ChatInterface onDeleteMessage={handleDeleteMessage} />
//       </header>
//     </div>
//   );
// }

// export default App;

// version6
// import React, { useEffect, useState } from "react";
// import "./App.css";
// import axios from "axios";

// function App() {
//   const [isLoading, setIsLoading] = useState(true);
//   const [error, setError] = useState("");
//   const [data, setData] = useState([]);
//   const [searchText, setSearchText] = useState(""); // State for search input

//   const fetchLatestMessages = async () => {
//     try {
//       const res = await axios.get(
//         "https://jan-softa-cyf-chat-server.glitch.me/messages/latest"
//       );
//       setData(res.data);
//     } catch (error) {
//       setError(error.message);
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   const fetchMessagesBySearch = async () => {
//     try {
//       const res = await axios.get(
//         `https://jan-softa-cyf-chat-server.glitch.me/messages/search?text=${searchText}`
//       );
//       setData(res.data);
//     } catch (error) {
//       setError(error.message);
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   useEffect(() => {
//     fetchLatestMessages();
//   }, []);

//   const handleSearch = () => {
//     if (searchText.trim() === "") return;
//     setIsLoading(true);
//     setError("");
//     fetchMessagesBySearch();
//   };

//   if (isLoading) {
//     return <div>Loading...</div>;
//   }

//   if (error) {
//     return <div>Error: {error}</div>;
//   }

//   return (
//     <div className="App">
//       <header className="App-header">
//         <input
//           type="text"
//           placeholder="Search messages..."
//           value={searchText}
//           onChange={(e) => setSearchText(e.target.value)}
//         />
//         <button onClick={handleSearch}>Search</button>
//         <ul>
//           {data.map((message) => (
//             <li key={message.id}>
//               <strong>{message.from}:</strong> {message.text}
//             </li>
//           ))}
//         </ul>
//       </header>
//     </div>
//   );
// }

// export default App;

// version5
// import React, { useEffect, useState } from "react";
// // import logo from "./logo.svg";
// import "./App.css";
// import axios from "axios";

// function App() {
//   const [isLoading, setIsLoading] = useState(true);
//   const [error, setError] = useState("");
//   const [data, setData] = useState([]);

//   const fetchLatestMessages = async () => {
//     try {
//       const res = await axios.get(
//         "https://jan-softa-cyf-chat-server.glitch.me/messages/latest"
//       );
//       setData(res.data);
//     } catch (error) {
//       setError(error.message);
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   const fetchMessagesBySearch = async (searchText) => {
//     try {
//       const res = await axios.get(
//         `https://jan-softa-cyf-chat-server.glitch.me/messages/search?text=${searchText}`
//       );
//       setData(res.data);
//     } catch (error) {
//       setError(error.message);
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   useEffect(() => {
//     fetchLatestMessages();
//   }, []);

//   if (isLoading) {
//     return <div>Loading...</div>;
//   }

//   if (error) {
//     return <div>Error: {error}</div>;
//   }

//   return (
//     <div className="App">
//       <header className="App-header">
//         {/* <img src={logo} className="App-logo" alt="logo" /> */}
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//         {/* Display fetched data */}
//         <ul>
//           {data.map((message) => (
//             <li key={message.id}>
//               <strong>{message.from}:</strong> {message.text}
//             </li>
//           ))}
//         </ul>
//       </header>
//     </div>
//   );
// }

// export default App;

// version4
// import React, { useEffect, useState } from "react";
// import logo from "./logo.svg";
// import "./App.css";
// import axios from "axios";

// function App() {
//   const [isLoading, setIsLoading] = useState(true);
//   const [error, setError] = useState("");
//   const [data, setData] = useState([]);

//   const fetchApi = async () => {
//     try {
//       const res = await axios.get(
//         "https://jan-softa-cyf-chat-server.glitch.me/messages/latest"
//       );
//       setData(res.data);
//     } catch (error) {
//       setError(error.message);
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   useEffect(() => {
//     fetchApi();
//   }, []);

//   if (isLoading) {
//     return <div>Loading...</div>;
//   }

//   if (error) {
//     return <div>Error: {error}</div>;
//   }

//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//         <ul>
//           {data.map((message) => (
//             <li key={message.id}>
//               <strong>{message.from}:</strong> {message.text}
//             </li>
//           ))}
//         </ul>
//       </header>
//     </div>
//   );
// }

// export default App;

// version3
// import React, { useEffect, useState } from "react";
// // import logo from "./logo.svg";
// import "./App.css";
// import axios from "axios";

// function App() {
//   const [isLoading, setIsLoading] = useState(true);
//   const [error, setError] = useState("");
//   const [data, setData] = useState([]);

//   const fetchApi = async () => {
//     try {
//       // const res = await axios.get("http://localhost:9090/messages");
//       const res = await axios.get(
//         "https://jan-softa-cyf-chat-server.glitch.me/messages"
//       );
//       setData(res.data);
//     } catch (error) {
//       setError(error.message);
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   useEffect(() => {
//     fetchApi();
//   }, []);

//   if (isLoading) {
//     return <div>Loading...</div>;
//   }

//   if (error) {
//     return <div>Error: {error}</div>;
//   }

//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//         <ul>
//           {data.map((message) => (
//             <li key={message.id}>
//               <strong>{message.from}:</strong> {message.text}
//             </li>
//           ))}
//         </ul>
//       </header>
//     </div>
//   );
// }

// export default App;

// version2
// import React, { useEffect, useState } from "react";
// import logo from "./logo.svg";
// import "./App.css";
// import axios from "axios";

// function App() {
//   const [isLoading, setIsLoading] = useState(true);
//   const [error, setError] = useState("");
//   const [data, setData] = useState([]);

//   const fetchApi = async () => {
//     try {
//       const res = await axios.get("http://localhost:9090/messages");
//       const res = await axios.get(
//         "https://jan-softa-cyf-chat-server.glitch.me"
//       );
//       setData(res.data);
//     } catch (error) {
//       setError(error.message);
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   useEffect(() => {
//     fetchApi();
//   }, []);

//   if (isLoading) {
//     return <div>Loading...</div>;
//   }

//   if (error) {
//     return <div>Error: {error}</div>;
//   }

//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//         { }
//         <ul>
//           {data.map((message) => (
//             <li key={message.id}>
//               <strong>{message.from}:</strong> {message.text}
//             </li>
//           ))}
//         </ul>
//       </header>
//     </div>
//   );
// }

// export default App;

// original
// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
