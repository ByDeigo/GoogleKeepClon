import Navbar from "./Layout/Navbar"
import Sidebar from "./Layout/Sidebar"
import { MenuProvider } from "./contexts/MenuContext"
import { DisplayProvider } from "./contexts/DisplayContext"
import Main from "./Layout/Main"
import { NotesProvider } from "./contexts/NotesContext"



function App() {
  return (
    <MenuProvider>
      <DisplayProvider>
        <NotesProvider>
          <div className="pageContent">
            <Navbar />
            <section className="mainContentLayout w-full">
              <Sidebar />
              <Main />
            </section>
          </div>
        </NotesProvider>
      </DisplayProvider>
    </MenuProvider>
  )
}

export default App
