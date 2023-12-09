import React, { useState } from "react";
import Form from "./components/Form/Form.jsx";
import MessagesTable from "./components/MessagesTable/MessagesTable.jsx";

const App = () => {
  const [messages, setMessages] = useState([]);
  return (
    <>
      <Form messages={messages} setMessages={setMessages} />;
      {messages.length > 0 && <MessagesTable messages={messages} />}
    </>
  );
};

export default App;
