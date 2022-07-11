import {useEffect, useState } from "react"



function useFetch() {
  const [data, setData] = useState([])
  const [searchText, setSearchText] = useState('b')
  
  let url = `https://www.themealdb.com/api/json/v1/1/search.php?f=${searchText}`

  useEffect(() => {

    fetch(url).then(res=>{
      const json = res.json() 
      return json     
    }).then(data => {
      // const meals = data.meals.slice(0, 10)
      // console.log(meals)
      setData(data.meals)
    })
    
  }, [url, searchText])

  return {data, setSearchText, searchText }
}


export default useFetch;