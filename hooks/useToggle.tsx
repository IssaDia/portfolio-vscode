import { useState } from 'react'

const useToggle = () => {
  const [toggleValue, setToggle] = useState(false)
  const toggler = () => setToggle(!toggleValue)
  return [toggleValue, toggler]
}

export default useToggle
