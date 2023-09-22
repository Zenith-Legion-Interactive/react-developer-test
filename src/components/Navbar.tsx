 
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <>
    <nav className="flex items-center justify-between flex-wrap bg-teal-500 p-6 rounded">
      <div className="flex items-center flex-shrink-0 text-white mr-6">
        
        
      </div>
      <div className="block lg:hidden">
       
      </div>
      <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
        <div className="text-xl lg:flex-grow">
          <Link to="/" className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
            Home
          </Link>
          <Link to="/users" className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
            Users
          </Link>
          
        </div>
         
      </div>
    </nav>
    </> 

  )
}

export default Navbar