import React from 'react'

interface CustomPaginationProps {
  currentPage: number
  totalPages: number
  onPageChange: (page: number) => void
}

const CustomPagination: React.FC<CustomPaginationProps> = ({
  currentPage,
  totalPages,
  onPageChange,
}) => {
  const renderPageNumbers = () => {
    const pages = []
    const maxVisiblePages = 5

    // Always show first page
    pages.push(
      <button
        key={1}
        onClick={() => onPageChange(1)}
        className={`h-8 min-w-[32px] rounded-md ${currentPage === 1
            ? 'bg-[#194489] text-white'
            : 'text-gray-600 hover:bg-gray-100'
          }`}
      >
        1
      </button>
    )

    const start = Math.max(2, currentPage - 2)
    const end = Math.min(totalPages - 1, start + maxVisiblePages - 2)

    if (start > 2) {
      pages.push(
        <span key="ellipsis1" className="text-gray-600">
          ...
        </span>
      )
    }

    for (let i = start; i <= end; i++) {
      pages.push(
        <button
          key={i}
          onClick={() => onPageChange(i)}
          className={`h-8 min-w-[32px] rounded-md ${currentPage === i
              ? 'bg-[#194489] text-white'
              : 'text-gray-600 hover:bg-gray-100'
            }`}
        >
          {i}
        </button>
      )
    }

    if (end < totalPages - 1) {
      pages.push(
        <span key="ellipsis2" className="text-gray-600">
          ...
        </span>
      )
    }

    // Always show last page
    if (totalPages > 1) {
      pages.push(
        <button
          key={totalPages}
          onClick={() => onPageChange(totalPages)}
          className={`h-8 min-w-[32px] rounded-md ${currentPage === totalPages
              ? 'bg-[#194489] text-white'
              : 'text-gray-600 hover:bg-gray-100'
            }`}
        >
          {totalPages}
        </button>
      )
    }

    return pages
  }

  return (
    <div className="flex items-center gap-2">
      <button
        className={`h-8 min-w-[32px] rounded-md text-gray-600 ${currentPage === 1
            ? 'cursor-not-allowed opacity-50'
            : 'hover:bg-gray-100'
          }`}
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
      >
        &lt;
      </button>

      {renderPageNumbers()}

      <button
        className={`h-8 min-w-[32px] rounded-md text-gray-600 ${currentPage === totalPages
            ? 'cursor-not-allowed opacity-50'
            : 'hover:bg-gray-100'
          }`}
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
      >
        &gt;
      </button>
    </div>
  )
}

export default CustomPagination