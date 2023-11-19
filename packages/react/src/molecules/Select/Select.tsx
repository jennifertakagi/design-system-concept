import React,  { useEffect, useRef, useState } from 'react'

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
  const labelRef = useRef<HTMLButtonElement>(null);
  const [overlayTop, setOverlayTop] = useState<number>(0);

  const onOptionSelected = (option: SelectOption, optionIndex: number) => {
    handler && handler(option, optionIndex);
  }

  const onLabelClick = () => {
    setIsOpen(!isOpen)
  }

  useEffect(() => {
    setOverlayTop((
        labelRef.current?.offsetHeight || 0
    ) + 10)
  }, [labelRef.current?.offsetHeight])

  return <div className='dse-select'>
    <button  ref={labelRef} className='dse-select__label' onClick={() => onLabelClick()}>
      <span>{label}</span>
      <svg width='1rem' height='1rem' fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} viewBox="0 0 24 24" stroke="currentColor"><path d="M19 9l-7 7-7-7" /></svg>
    </button>

    {isOpen ? (
      <ul style={{ top: overlayTop }} className='dse-select__overlay'>
        {options.map((option, optionIndex) => {
          return <li onClick={() => onOptionSelected(option, optionIndex)} key={option.value}>{option.label}</li>
        })}
      </ul>
    ) : null}
  </div>
}

export default Select