import { useQuery, gql } from '@apollo/client'
export const useGetPhotos = (categoryId) => {
  const GET_PHOTOS = gql`
    query getPhotos($categoryId: ID) {
        photos(categoryId: $categoryId) {
        id
        categoryId
        src
        likes
        userId
        liked
        }
    }
  `
  const { loading, data, error } = useQuery(GET_PHOTOS, { variables: { categoryId } })
  return { loading, data, error }
}
