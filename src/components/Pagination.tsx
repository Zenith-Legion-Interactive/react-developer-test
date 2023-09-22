import React , {useState} from 'react'
import { Link } from 'react-router-dom'

interface Props {
  currentPage: number,
  totalPages: number,
  onPageChange: (newPage: number) => void
}

const Pagination:React.FC<Props> = ({currentPage, totalPages, onPageChange}) => {
  const [visiblePages, setvisiblePages] = useState<number>(8)

  const handlePageChange = (newPage: number) => {
    onPageChange(newPage)
  }

  const pageNumbers = () => {
    const pages = []
    const start = Math.max(1, currentPage - Math.floor(visiblePages / 2))
    const end = Math.min(totalPages, start + visiblePages - 1)

    for (let i = start; i <= end;  i++) {
      pages.push(
        <Link to={`/users?page=${i}`}  key={i} onClick={() =>handlePageChange(i)} className={`p-2 ${currentPage == i ? 'font-bold' : '' }`} >
          {i}
        </Link>
      )
    }

    return pages
  }

  return (
    <div className='flex items-center justify-center my-4'>
      <button onClick={() => handlePageChange(currentPage - 1)}
        disabled={currentPage===1}
        className='px-3 py-1 mx-1 bg-white text-blue-500 hover:bg-blue-200'
      >
        Prev
      </button>
      {pageNumbers()}
      <button onClick={() => handlePageChange(currentPage + 1)}
        disabled={currentPage===totalPages}
        className='px-3 py-1 mx-1 bg-white text-blue-500 hover:bg-blue-200'
      >
        Next
      </button>

    </div>
  )
}

export default Pagination