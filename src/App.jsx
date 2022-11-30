
import { GlobalStyles } from './GlobalStyles'
import { Home } from './pages/Home'
import { Logo } from './components/Logo'
import { PhotoCardWithQuery } from './components/GetSinglePhoto'
function App () {
  const urlParams = new window.URLSearchParams(window.location.search)
  const detailID = urlParams.get('detail')

  return (
    <>
      <GlobalStyles />
      <Logo />
      {
        detailID
          ? <PhotoCardWithQuery id={detailID} />
          : <Home />
      }

    </>
  )
}

export default App
