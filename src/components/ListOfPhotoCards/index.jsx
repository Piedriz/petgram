import React from 'react'
import { PhotoCard } from '../PhotoCard'
import { useGetPhotos } from '../../hooks/useGetPhotos'
import { ThreeDots } from 'react-loader-spinner'
import { WrapperContainer } from '../WrapperContainer'
import { AllPhotoList } from './styles'
export const ListOfPhotoCards = ({ categoryId }) => {
  // const [data, setData] = React.useState([])
  const { data, loading, error, refetch } = useGetPhotos(categoryId)

  React.useEffect(() => {
    refetch()
  }, [])

  if (loading) {
    return (
      <WrapperContainer>
        <ThreeDots
          height='80'
          width='80'
          textAlign='center'
          radius='9'
          color='#f514b1'
          ariaLabel='three-dots-loading'
          visible
        />
      </WrapperContainer>
    )
  }
  if (error) {
    console.log(error)
    return <p>ha ocurrido un error</p>
  }
  return (
    <AllPhotoList>
      {data.photos.map((photo) => (
        <PhotoCard liked={photo.liked} likes={photo.likes} src={photo.src} key={photo.id} id={photo.id} />
      ))}
    </AllPhotoList>
  )
}
