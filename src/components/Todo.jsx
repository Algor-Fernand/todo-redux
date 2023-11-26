import { useState } from "react";
export default function Todo() {
  const [todo, setTodo] = useState("");

  const handleChange = (e) => {
    setTodo(e.target.value);
  };
  return (
    <div>
      <input
        type="text"
        placeholder="add Todo"
        onChange={(e) => handleChange(e)}
        value={todo}
      />
      <button>Add</button>
    </div>
  );
}
