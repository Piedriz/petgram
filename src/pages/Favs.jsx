import React from 'react'
import { useGetFavorites } from '../hooks/useGetFavorites'
import { ListOfFavorites } from '../components/ListOfFavorites'
import { WrapperContainer } from '../components/WrapperContainer'
import { Hearts } from 'react-loader-spinner'
export const Favs = () => {
  const [data, setData] = React.useState([])
  const { loading, data: info, error } = useGetFavorites()

  React.useEffect(() => {
    if (!loading) setData(info.favs)
  }, [info])

  if (loading) {
    return (
      <WrapperContainer>
        <Hearts
          height='80'
          width='80'
          color='#f06a6a'
          ariaLabel='hearts-loading'
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

    <div>
      {!loading
        ? <ListOfFavorites favs={data} />
        : ''}
      {!loading && data.length < 1 ? <h2>Agrege su primer favorito</h2> : ''}
    </div>
  )
}
