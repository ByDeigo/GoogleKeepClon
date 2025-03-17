import Navbar from "./components/Navbar"
import CreateNotes from "./components/NotesComponents/CreateNotes"
import Sidebar from "./components/Sidebar"
import { MenuProvider } from "./contexts/MenuContext"
import { DisplayProvider } from "./contexts/DisplayContext"
import NotesContainer from "./components/NotesComponents/NotesContainer"

function App() {
  return (
    <div className="content">
      <MenuProvider>
        <DisplayProvider>
          <Navbar />
          <section className="main-content w-full">
            <Sidebar />
            <main className=" flex flex-col gap-5 p-4 grow col-start-2 col-end-2 ">
              <CreateNotes />
              <NotesContainer />
            </main>
          </section>
        </DisplayProvider>
      </MenuProvider>
    </div>

  )
}

export default App
