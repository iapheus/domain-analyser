import './App.css'
import './index.css'
import SideDrawer from './components/SideDrawer'
import RoutedPage from './views/RoutedPage'
import ALikeHeader from './components/ALikeHeader'
import { useState } from 'react'

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  return (
    <div>
      <ALikeHeader isSidebarOpen={isSidebarOpen} />
      <SideDrawer isSidebarOpen={isSidebarOpen} setIsSidebarOpen={setIsSidebarOpen} />
      <div className='mt-14 ml-16'>
        <RoutedPage/>
      </div>
    </div>
  )
}

export default App
