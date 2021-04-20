import React, {useState} from 'react'


export const Search = () => {
  const [value, setValue] = useState('')

  const onSubmit = (event) => {
      if (value.trim()) {
        console.log('Make request with', value)
      }else {
        console.log('Введите вопрос!')
      }
  }

  return (
    <div className="form-group">
      <form className="d-flex">
        <input
          className="form-control me-2"
          type="text"
          placeholder="Поиск"
          aria-label="Search"
          value={value}
          onChange={event => setValue(event.target.value)}
          required
        />
        <button className="btn btn-outline-light"
          type="search"
          onClick={onSubmit}
        >
        найти
        </button>
      </form>
    </div>
  )
}
