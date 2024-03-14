import React from 'react'

function Checkbox() {

const [checked, setChecked] = useState(false)

  const toggleCheck = () => {
    setChecked(!checked)
  }

  const checkedClass = checked ? 'checked' : '';

  const containerClass = 'checkbox'`checkbox ${checkedClass}`.trim()

  return (
    <div>Checkbox</div>
  )
}

export default Checkbox