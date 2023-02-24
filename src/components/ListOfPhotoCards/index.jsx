import React from 'react'
import { PhotoCard } from '../PhotoCard'
import { useGetPhotos } from '../../hooks/useGetPhotos'

export const ListOfPhotoCards = ({ categoryId }) => {
  // const [data, setData] = React.useState([])
  const { data, loading, error, refetch } = useGetPhotos(categoryId)

  React.useEffect(() => {
    refetch()
  }, [])

  console.log(data)

  if (loading) {
    return <p>cargando...</p>
  }
  if (error) {
    console.log(error)
    return <p>ha ocurrido un error</p>
  }
  return (
    <ul>
      {data.photos.map((photo) => (
        <PhotoCard liked={photo.liked} likes={photo.likes} src={photo.src} key={photo.id} id={photo.id} />
      ))}
    </ul>
  )
}
