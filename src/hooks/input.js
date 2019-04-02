import { useState } from 'react'

const useInput = initialValue => {
  const [value, setValue] = useState(initialValue)
  return {
    value,
    handleChange: event => {
      setValue(event.target.value)
    }
  }
}

export default useInput
