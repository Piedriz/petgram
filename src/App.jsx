import { GlobalStyles } from './GlobalStyles'
import { Home } from './pages/Home'
import { Favs } from './pages/Favs'
import { User } from './pages/User'
import { NotRegisterUser } from './pages/NotRegisterUser'
import { Detail } from './pages/Detail'
import { Logo } from './components/Logo'
import { NavBar } from './components/NavBar'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Context } from './context/Context'
import { useContext } from 'react'

function App () {
  // const urlParams = new window.URLSearchParams(window.location.search)
  // const detailID = urlParams.get('detail')
  const { isAuth } = useContext(Context)
  return (
    <>
      <BrowserRouter>
        <GlobalStyles />
        <Logo />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/pet/:id' element={<Home />} />
          <Route path='/detail/:detailId' element={<Detail />} />
          <Route path='/favs' element={isAuth ? <Favs /> : <NotRegisterUser />} />
          <Route path='/user' element={isAuth ? <User /> : <NotRegisterUser />} />
        </Routes>
        <NavBar />
      </BrowserRouter>
    </>
  )
}

export default App
