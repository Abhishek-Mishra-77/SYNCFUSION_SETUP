import React from 'react'

const Question = ({id, question, options}) => {
  return (
    <div className='text-xl'>
      <div className="question p-2">{id}. {question}</div>
      <div className="options p-2">
        <input type="radio" id={options.a} />
        <label htmlFor={options.a}> {options.a}</label> <br />
        <input type="radio" id={options.b} />
        <label htmlFor={options.b}> {options.b}</label> <br />
        <input type="radio" id={options.c} />
        <label htmlFor={options.c}> {options.c}</label> <br />
        <input type="radio" id={options.d} />
        <label htmlFor={options.d}> {options.d}</label> <br />
      </div>
    </div>
  )
}

export default Question
