import React from 'react'
import { useGetFavorites } from '../hooks/useGetFavorites'
import { ListOfFavorites } from '../components/ListOfFavorites'
export const Favs = () => {
  const [data, setData] = React.useState([])
  const { loading, data: info, error } = useGetFavorites()

  React.useEffect(() => {
    if (!loading) setData(info.favs)
  }, [info])

  if (loading) {
    return <p>cargando...</p>
  }
  if (error) {
    console.log(error)
    return <p>ha ocurrido un error</p>
  }
  return (

    <div>
      {!loading
        ? <ListOfFavorites favs={data} />
        : ''}
    </div>
  )
}
