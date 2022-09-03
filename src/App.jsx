import FileList from './components/FileList';
import TopBar from './components/TopBar';
import SideBar from './components/SideBar';
function App() {
  return (
    <div>
      <TopBar />
      <div className='flex'>
        <SideBar />
        <FileList />
      </div>
      
    </div>
  )
}

export default App
