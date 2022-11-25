import { ListOfCategories } from './components/ListOfCategories'
import { GlobalStyles } from './GlobalStyles'
import { ListOfPhotoCards } from './components/ListOfPhotoCards'
import { Logo } from './components/Logo'
function App () {
  return (
    <>
      <GlobalStyles />
      <Logo />
      <ListOfCategories />
      <ListOfPhotoCards />
    </>
  )
}

export default App
