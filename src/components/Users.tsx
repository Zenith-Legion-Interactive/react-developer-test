import axios from 'axios'
import { useEffect, useState } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import Pagination from './Pagination'
 
 
type UserData = {
  id: string
  firstName: string
  lastName: string
  picture: string
} 

const Users = () => {
  const [searchParams] = useSearchParams()
  const page  = searchParams.get('page')
  const pageNum = Number(page)
  
  const [users, setUsers] = useState<UserData[]>([])
  const [curPage, setCurPage] = useState<number>(1)
  
  const [totalPage, setTotalPage] = useState<number>(0)
  const [isLoading, setIsLoading] = useState<boolean>(false)

  const UserList = async() => {
    try { 
      setIsLoading(true)
      const response = await axios.get(`https://dummyapi.io/data/v1/user?page=${pageNum-1}`, {
        headers: {
          'app-id': '65080fec01538513690ca63e'
        } 
      })  
      
      const totalUsers = response.data.total 
      const usersPerBatch = response.data.limit 
      const pSize = Math.ceil( totalUsers / usersPerBatch)
      setTotalPage(pSize)
      
      console.log('users ', response.data.data)
     
      return response.data.data as UserData[] 

    } catch (error) {
      console.error('Error fetching use data: ', error) 
      return [] as UserData[]
    } finally {
      setIsLoading(false)
    }
 
  }

  useEffect(() => {
    const curPageNum = pageNum
    if (!isNaN(curPageNum) && curPageNum > 0) {
      setCurPage(curPageNum) 
    }   
   
  }, [page])

  useEffect(() => {
    const fetchProfile =async () => {
      const usersData = await UserList()
      setUsers(usersData)
      
    }
    fetchProfile()
  }, [curPage])

 
  const Go = (newP:number) => {
    setCurPage(newP)

  }

  console.log('cur ', curPage) 
  console.log('total ', totalPage) 
    
  return (
    <div>
      { isLoading ? (
        <div className='text-2xl font-bold text-center h-full'>Loading Users... </div>
      ): (
        users.length > 0 ? ( 
          users.map((user, i) => ( 
            
              <div className={`flex justify-between rounded items-center w-[450px] mx-auto m-1 p-0 ${i % 2 == 0 ? 'bg-teal-800' : 'bg-teal-700'}`}>
                 
                <img src={user.picture} width={60} height={60} />
                <div className='p-4'>
                  <Link to={`/user/${user.id}`} key={user.id} className='hover:underline text-white'>
                    <span className='font-bold text-white'>{user.firstName} { user.lastName}</span>
                  </Link>
                </div>  
              </div>  
          ))  
      ) : ( 
        <p></p>
      ) 
        
      )} 
      <Pagination currentPage={curPage} totalPages={totalPage} onPageChange={Go} /> 
    </div> 
  )
}

export default Users 