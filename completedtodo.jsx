const [input, setInput]= useState("");
const [textarea, setTextarea] = useState("");


const [todos, setTodos] = useState(
  localStorage.todos ? JSON.parse(localStorage.todos) : []
);

useEffect(() => {
  localStorage.setItem("todos", JSON.stringify(todos));
}, [todos]);