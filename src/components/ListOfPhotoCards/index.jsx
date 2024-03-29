import React from 'react'
import { PhotoCard } from '../PhotoCard'
import { useGetPhotos } from '../../hooks/useGetPhotos'

export const ListOfPhotoCards = ({ categoryId }) => {
  const { data, loading, error } = useGetPhotos(categoryId)

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
        <PhotoCard likes={photo.likes} src={photo.src} key={photo.id} id={photo.id} />
      ))}
    </ul>
  )
}
