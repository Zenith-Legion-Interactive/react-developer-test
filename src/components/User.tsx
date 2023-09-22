import axios from 'axios'
import {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'

type Location = {
  city: string
  country: string
  state: string
   
}

type UserObject = {
  id: string
  firstName: string
  lastName: string
  dateOfBirth: string
  gender: string
  phone: string
  email: string
  location:Location
  picture: string
  registerDate:string
  title:string
  updatedDate:string 
  
}

const User = () => {
  const { id } = useParams()

  const [userDetails, setUserDetails] = useState<UserObject>()
  const [isLoading, setIsLoading] = useState<boolean>(false)

  const getUserDetails = async() => {
    try {
      setIsLoading(true)
      const response = await axios.get(`https://dummyapi.io/data/v1/user/${id}`, {
        headers: {
          'app-id': '65080fec01538513690ca63e'
        }
      })

      console.log('data here ', response.data)
      return response.data  
    } catch (error) {
      console.error(error)
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    const getProfile = async() => {
      const profile = await getUserDetails()
      setUserDetails(profile) 
    }
    getProfile()
   
  }, [])

  const readableDate = (ts:string | undefined) => {
    if (!ts) { return ''  }
    const dateObject = new Date(ts)
     
    const formatted = dateObject.toLocaleDateString("en-US", {
      year: "numeric", 
      month: "long", 
      day: "numeric", 
      
    })
    return formatted as string
  }

  return (
    <>

      { isLoading ? (
         <div className='text-2xl font-bold text-center h-full'>Loading User Profile... </div> 
      ) : ( <div className="bg-white overflow-hidden shadow rounded-lg border">
      <div className="px-4 py-5 sm:px-6">

          <div>
            <img src={userDetails?.picture} width={120} height={120} className='rounded-full mx-auto' />
          </div> 

          <h3 className="text-lg leading-6 font-medium text-gray-900">
          
            <span className='capitalize'>{userDetails?.title}</span>{' '}{userDetails?.firstName}{' '}{userDetails?.lastName} 
                  
          </h3>
        
      </div>
      <div className="border-t border-gray-200 px-4 py-5 sm:p-0">
          <dl className="sm:divide-y sm:divide-gray-200">
            
              <div className="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                  <dt className="text-sm font-medium text-gray-500">
                      Phone number
                  </dt>
                  <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                  <div>{userDetails?.phone}</div>
                  </dd>
              </div>
              <div className="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                  <dt className="text-sm font-medium text-gray-500">
                      Email
                  </dt>
                  <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                  <div>{userDetails?.email}</div>
                  </dd>
              </div>
              <div className="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                  <dt className="text-sm font-medium text-gray-500">
                      Date of Birth
                  </dt>
                  <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                  <div>{userDetails?.dateOfBirth && readableDate(userDetails.dateOfBirth)}</div>
                  </dd>
              </div>
              <div className="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                  <dt className="text-sm font-medium text-gray-500">
                    Location
                  </dt>
                  <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                  <div>
                    {userDetails?.location &&
                    userDetails.location.city + ', ' + 
                    userDetails.location.state + ' - ' +
                    userDetails.location.country}
                  </div>
                  </dd>
              </div>
              <div className="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                  <dt className="text-sm font-medium text-gray-500">
                      Gender
                  </dt>
                  <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                      <div>{userDetails?.gender}</div> 
                  </dd>
              </div>
              <div className="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                  <dt className="text-sm font-medium text-gray-500">
                      Last Update
                  </dt>
                  <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                  <div>{userDetails?.updatedDate && readableDate(userDetails.updatedDate)}</div>
                  </dd>
              </div>
              <div className="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                  <dt className="text-sm font-medium text-gray-500">
                      Registration Date
                  </dt>
                  <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                  <div>{userDetails?.registerDate && readableDate(userDetails.registerDate)} </div>
                  </dd>
              </div>
          </dl>
      </div>
</div>
      )

      } 
 
    </>
  )
}

export default User