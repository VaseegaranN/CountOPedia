import { createRoot } from 'react-dom/client'
import Header from './Layout/Header.jsx'
import Footer from './Layout/Footer.jsx'
import Counter from './Layout/Counter.jsx'

createRoot(document.getElementById('root')).render(
  <div className='d-flex flex-column min-vh-100'>
    <Header/>
    <main className='flex-fill'>
      <Counter/>
    </main>
    <Footer/>
  </div>
)
