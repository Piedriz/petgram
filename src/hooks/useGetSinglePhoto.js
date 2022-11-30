import { gql, useQuery } from '@apollo/client'

export const useGetSinglePhoto = (id) => {
  const query = gql`
  query getSinglePhoto($id: ID!) {
    photo(id: $id) {
      id
      categoryId
      src
      likes
      liked
      userId
    }
  }
`
  const { loading, error, data } = useQuery(query, {
    variables: {
      id
    }
  })

  return { loading, error, data }
}
