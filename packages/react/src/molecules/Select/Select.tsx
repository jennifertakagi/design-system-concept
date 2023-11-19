import React,  { useState } from 'react'

type SelectOption = {
  label: string
  value: string
}

type SelectProps = {
  label?: string
  onOptionSelected?: (option: SelectOption, optionIndex: number) => void
  options?: SelectOption[]
}

const Select = ({ options = [], label = 'Please select an option ...', onOptionSelected: handler }: SelectProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(false)

  const onOptionSelected = (option: SelectOption, optionIndex: number) => {
    handler && handler(option, optionIndex);
  }

  const onLabelClick = () => {
    setIsOpen(!isOpen)
  }

  return <div>
    <button onClick={() => onLabelClick()}>
      {label}
    </button>

    {isOpen ? (
      <ul>
        {options.map((option, optionIndex) => {
          return <li onClick={() => onOptionSelected(option, optionIndex)} key={option.value}>{option.label}</li>
        })}
      </ul>
    ) : null}
  </div>
}

export default Select