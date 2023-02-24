import { useQuery, gql } from '@apollo/client'
export const useGetFavorites = () => {
  const GET_FAVS = gql`
    query getFavs {
        favs{
        id
        categoryId
        src
        likes
        userId
        }
    }
  `
  const { loading, data, error } = useQuery(GET_FAVS, {
    fetchPolicy: 'network-only'
  })
  return { loading, data, error }
}
