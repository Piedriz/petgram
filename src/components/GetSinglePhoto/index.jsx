import React from 'react'
import { PhotoCard } from '../PhotoCard'
import { useGetSinglePhoto } from '../../hooks/useGetSinglePhoto'
import { WrapperContainer } from '../WrapperContainer'
import { InfinitySpin } from 'react-loader-spinner'

export const PhotoCardWithQuery = ({ id }) => {
  const { loading, error, data } = useGetSinglePhoto(id)
  if (error) {
    return <h2>Internal Server Error</h2>
  }
  if (loading) {
    return (
      <WrapperContainer>
        <InfinitySpin
          width='200'
          color='#eb06cc'
        />
      </WrapperContainer>
    )
  }

  return (
    <PhotoCard {...data.photo} />
  )
}
