import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Category } from '../Category'
import { List, Item } from './styles'

export const ListOfCategories = () => {
  const [categories, setCategories] = useState([])
  useEffect(() => {
    getCategories()
  }, [])
  const getCategories = async () => {
    const response = await axios('https://petgram-server-edsf8xpy2.now.sh/categories')
    const data = await response.data
    setCategories(data)
  }
  return (
    <List>
      {categories.map((category) => (
        <Item key={category.id}><Category {...category} /></Item>
      ))}
    </List>
  )
}
