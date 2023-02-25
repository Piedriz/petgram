import React from 'react'
import { useNearScreen } from '../../hooks/useNearScreen'
import { Context } from '../../context/Context'
import { useMuationToogleLike } from '../../hooks/useMutationToggleLike'
import { FavButton } from '../FavButton'
import { ImgWrapper, Img, Article } from './styles'
import { Link } from 'react-router-dom'
import Swal from 'sweetalert2'
const DEFAULT_IMAGE = 'https://res.cloudinary.com/midudev/image/upload/w_150/v1555671700/category_hamsters.jpg'

export const PhotoCard = ({ liked, id, likes = 0, src = DEFAULT_IMAGE }) => {
  const { isAuth } = React.useContext(Context)
  const [show, ref] = useNearScreen()
  const { mutation } = useMuationToogleLike()

  const handleFavClick = () => {
    if (!isAuth) {
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'Primero debe iniciar sesión'
      })
      return
    }
    mutation({
      variables: {
        input: { id }
      }
    })
  }
  return (
    <Article ref={ref}>
      {show &&
        <>
          <Link to={`/detail/${id}`}>
            <ImgWrapper>
              <Img src={src} />
            </ImgWrapper>
          </Link>
          <FavButton liked={liked} likes={likes} onClick={handleFavClick} />
        </>}
    </Article>
  )
}
