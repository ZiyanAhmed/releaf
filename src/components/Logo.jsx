import './Logo.css'

const Logo = ({ size = 32, showText = true }) => {
  return (
    <div className="logo-container">
      <svg 
        width={size} 
        height={size} 
        viewBox="0 0 40 40" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
        className="logo-svg"
      >
        {/* Minimalistic leaf shape */}
        <path
          d="M20 8C20 8 12 12 12 20C12 24 14 28 18 30C16 32 14 34 14 36C14 36 16 34 20 32C24 34 26 36 26 36C26 34 24 32 22 30C26 28 28 24 28 20C28 12 20 8 20 8Z"
          fill="#10B981"
          fillRule="evenodd"
        />
        {/* Simple stem */}
        <path
          d="M20 32L20 38"
          stroke="#059669"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
      {showText && <span className="logo-text">ReLeaf</span>}
    </div>
  )
}

export default Logo

