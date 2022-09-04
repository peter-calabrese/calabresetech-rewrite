import FileList from './components/FileList';
import TopBar from './components/TopBar';
import SideBar from './components/SideBar';
import WebpageRenderer from './components/WebpageRenderer';

import { useState } from 'react';
function App() {
  const [renderPage, setRenderPage] = useState('Home');

  return (
    <div>
      <TopBar />
      <div className='flex'>
        <SideBar />
        <FileList setFileToRender={setRenderPage} />
        <div className='h-screen bg-text-editor-bg w-full'>
          <WebpageRenderer value={renderPage} />
        </div>
      </div>

    </div>
  )
}

export default App
