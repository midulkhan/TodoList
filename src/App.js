import "./styles.css";
import { useEffect, useState } from "react";
import { Header } from "./component/Header";
import { AddList } from "./component/AddList";
import { LoopList } from "./component/LoopList";

export default function App() {
  const [Todo, setTodo] = useState(
    JSON.parse(localStorage.getItem("TodoList ")) || []
  );

  useEffect(() => {
    localStorage.setItem("TodoList", JSON.stringify(Todo));
  }, [Todo]);

  const [editInfo, setInfo] = useState({
    id: "",
    Title: "",
    Details: ""
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const title = e.target.Title.value;
    const details = e.target.Details.value;

    if (editInfo.id) {
      const findData = Todo.map((todos) =>
        todos.id === editInfo.id
          ? {
              id: editInfo.id,
              Title: editInfo.Title,
              Details: editInfo.Details
            }
          : todos
      );
      setTodo(findData);
      setInfo({ id: "", Title: "", Details: "" });
    } else {
      const newTask = { id: Date.now(), Title: title, Details: details };
      setTodo((preTodo) => {
        return [...preTodo, newTask];
      });

      setInfo({ id: "", Title: "", Details: "" });
    }
  };

  const handleDelete = (id) => {
    let Filter = Todo.filter((items) => items.id !== id);
    setTodo(Filter);
  };

  const handleEdit = (id) => {
    let data = Todo.find((todo) => todo.id === id);
    const { Title, Details } = data;
    setInfo((prevInfo) => {
      return {
        ...prevInfo,
        Title,
        Details,
        id: data.id
      };
    });
  };

  return (
    <div className="App">
      <Header />
      <AddList
        handleSubmit={handleSubmit}
        EditData={editInfo}
        setInfo={setInfo}
      />

      <div className="list_group">
        {Todo.map((items) => (
          <LoopList
            key={items.id}
            id={items.id}
            itemTitle={items.Title}
            itemDetails={items.Details}
            onDelete={handleDelete}
            onEdit={handleEdit}
          />
        ))}
      </div>
    </div>
  );
}
