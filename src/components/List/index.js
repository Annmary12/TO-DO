import React, { useState } from 'react'

// components
import Card from '../Card'
import ListItem from '../ListItem'

// style
import './List.css'

const List = ({ items, handleCheckBox, deleteTodo, getTodos }) => {
	const [isEdit, setIsEdit] = useState([])

	const showEditView = (index) => (event) => {
			event.stopPropagation()
    let isOpen = isEdit

    if(!isOpen[index]) {
      isOpen = isOpen.map(item => false)
    }
    isOpen[index] = !isOpen[index]
    setIsEdit(isOpen)
	}
	const closeEditView = () => setIsEdit([])

	return (
		<div className='list'>
	<Card>
		<ul>
			{ items && items.length > 0 && items.map((item, index) => (
				<ListItem 
					key={index}
					index={index}
					item={item} 
					handleChange={handleCheckBox} 
					deleteTodo={deleteTodo} 
					showEditView={showEditView} 
					closeEditView={closeEditView}
					getTodos={getTodos}
					isEdit={isEdit[index]} />
			))}
		</ul>
	</Card>
	</div>
	)
}

export default List
