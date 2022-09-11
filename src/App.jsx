import FileList from './components/VSCComponents/FileList';
import TopBar from './components/VSCComponents/TopBar';
import SideBar from './components/VSCComponents/SideBar';
import WebpageRenderer from './components/WebpageRenderer';
import TabBar from './components/VSCComponents/TabBar';
import { useEffect, useState } from 'react';
function App() {
  const [renderPage, setRenderPage] = useState('Homepage.jsx');
  useEffect(() => {
    document.title = renderPage + ' - calabrese.tech'
  }, [renderPage])
  return (
    <div className=''>
      <TopBar file={renderPage} />

      <div className='flex'>
        <SideBar />
        <FileList value={renderPage} setFileToRender={setRenderPage} />

        <div className='h-screen bg-text-editor-bg w-full'>
          <TabBar value={renderPage} setTabToOpen={setRenderPage} />
          <WebpageRenderer value={renderPage} setRedirect={setRenderPage}/>
        </div>
      </div>

    </div>
  )
}

export default App
