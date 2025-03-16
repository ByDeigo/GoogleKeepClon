import Navbar from "./components/Navbar"
import CreateNotes from "./components/NotesComponents/CreateNotes"
import Sidebar from "./components/Sidebar"
import { MenuProvider } from "./contexts/MenuContext"
import NotesContainer from "./components/NotesComponents/NotesContainer"

function App() {
  return (
    <div className="content relative">
      <MenuProvider>
        <Navbar />
        <main className="main-content flex flex-col gap-5 p-4">
          <CreateNotes />
          <NotesContainer />
        </main>
        <Sidebar />
      </MenuProvider>
    </div>

  )
}

export default App
