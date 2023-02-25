import { GlobalStyles } from './GlobalStyles'
import { Home } from './pages/Home'
import { NotFoundPage } from './pages/NotFoundPage'
import { Favs } from './pages/Favs'
import { User } from './pages/User'
import { NotRegisterUser } from './pages/NotRegisterUser'
import { Detail } from './pages/Detail'
import { Logo } from './components/Logo'
import { NavBar } from './components/NavBar'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
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
          <Route path='/*' element={<NotFoundPage />} />
          <Route path='/login' element={isAuth ? <Navigate to='/' /> : <NotRegisterUser />} />
          <Route path='/pet/:id' element={<Home />} />
          <Route path='/detail/:detailId' element={<Detail />} />
          <Route path='/favs' element={!isAuth ? <Navigate from='/favs' to='/login' /> : <Favs />} />
          <Route path='/user' element={!isAuth ? <Navigate from='/user' to='/login' /> : <User />} />
        </Routes>
        <NavBar />
      </BrowserRouter>
    </>
  )
}

export default App
