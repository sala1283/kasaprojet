import { useRef, useState } from 'react'
import './Collapse.scss'

function Collapse({ title, content, children }) {
  const [isOpen, setIsOpen] = useState(false)
  const contentRef = useRef()

  const toggleCollapse = () => {
    setIsOpen(!isOpen)
  }

  return (
    <article className="collapse">
      <button className="collapsible" onClick={toggleCollapse}>
        {title}
        <i className={`fas fa-chevron-up ${isOpen ? 'rotate' : ''}`}></i>
      </button>
      <div
        className="collapse-content"
        ref={contentRef}
        style={{
          maxHeight: isOpen ? `${contentRef.current.scrollHeight}px` : 0,
          overflow: 'hidden',
          transition: 'max-height 0.3s ease',
          pointerEvents: 'none',
        }}
      >
        {children ? <>{children}</> : <p>{content}</p>}
        
      </div>
    </article>
  )
}

export default Collapse
