import "./App.css"
import { Counter } from "./features/counter/Counter"
import { Quotes } from "./features/quotes/Quotes"
import { UserList } from "./features/users/user-list"
import logo from "./logo.svg"

const App = () => {
  return (
    <div className="App">
      <UserList/>
    </div>
  )
}

export default App
