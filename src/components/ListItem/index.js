import React from 'react'

// styles
import './ListItem.css'

// components
import CheckBox from '../CheckBox'
import Form from '../Form/Edit'

// icon
import deleteIcon from '../../assets/icons/trash.svg'
import editIcon from '../../assets/icons/pencil.svg'

const ListItem = ({ item, handleChange, deleteTodo, showEditView, isEdit, index, closeEditView, getTodos }) => {
  if (isEdit) {
    return <Form 
      item={item} 
      getTodos={getTodos}
      closeEditView={closeEditView}
      />
  }
  return (<li className='list-item'>
    <span className='list-item--left'>
      <CheckBox name={item.description} checked={item.done} handleChange={handleChange} />
      <span className={`${item.done ? 'cancel' : ''}`}>{item.description}</span>
    </span>
    <span className='list-item icons'>
      <img src={editIcon} alt='deleteIcon' className='icon' onClick={showEditView(index)} />
      <img src={deleteIcon} alt='deleteIcon' className='icon' onClick={() => deleteTodo(item)} />
    </span>
  </li>
  )
}

export default ListItem
