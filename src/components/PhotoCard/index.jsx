import React from 'react'
import { useLocalStorage } from '../../hooks/useLocalStorage'
import { useNearScreen } from '../../hooks/useNearScreen'
import { useMuationToogleLike } from '../../hooks/useMutationToggleLike'
import { FavButton } from '../FavButton'
import { ImgWrapper, Img, Article } from './styles'
import { Link } from 'react-router-dom'
const DEFAULT_IMAGE = 'https://res.cloudinary.com/midudev/image/upload/w_150/v1555671700/category_hamsters.jpg'

export const PhotoCard = ({ id, likes = 0, src = DEFAULT_IMAGE }) => {
  const key = `LIKE-${id}`
  const [liked, setLiked] = useLocalStorage(key, false)
  const [show, ref] = useNearScreen()
  const { mutation } = useMuationToogleLike()

  const handleFavClick = () => {
    !liked && mutation({
      variables: {
        input: { id }
      }
    })
    setLiked(!liked)
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
