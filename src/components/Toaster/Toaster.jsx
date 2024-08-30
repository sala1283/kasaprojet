import React, { useState, useEffect } from 'react'
import ReactDOM from 'react-dom/client'
import './Toaster.scss'

const Toaster = ({ message, type, duration }) => {
  const [visible, setVisible] = useState(true)
  const [progress, setProgress] = useState(100)

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => Math.max(prev - 100 / (duration / 100), 0))
    }, 100)

    const timeout = setTimeout(() => {
      setVisible(false)
    }, duration)

    return () => {
      clearTimeout(timeout)
      clearInterval(interval)
    }
  }, [duration])

  const handleClose = () => {
    setVisible(false)
  }

  return (
    visible && (
      <div
        className={`toaster toaster-${type}`}
        style={{ animationDelay: `0s, ${duration / 1000 - 0.5}s` }}
      >
        <div>
          {message}
          <div
            className="toaster-progress"
            style={{
              width: `${progress}%`,
            }}
          ></div>
        </div>
        <button onClick={handleClose} className="toaster-btn">
          <i className="fa-solid fa-xmark"></i>
        </button>
      </div>
    )
  )
}

export const showToast = (message, type = 'info', duration = 5000) => {
  const toasterRoot = document.getElementById('toaster-root')
  const toasterElement = document.createElement('div')
  toasterRoot.appendChild(toasterElement)

  const root = ReactDOM.createRoot(toasterElement)

  const removeToaster = () => {
    root.unmount()
    toasterRoot.removeChild(toasterElement)
  }

  root.render(<Toaster message={message} type={type} duration={duration} />)

  setTimeout(removeToaster, duration + 500)
}

export default Toaster
