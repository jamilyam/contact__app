import React, {useState} from 'react'

function ContactItem(props) {
  const [name, setName] = useState(props.item.name);
  const [lastName, setLast] = useState(props.item.lastName);
  const [number, setNumber]=useState(props.item.number);
  const [isEdit, setEdit] = useState(false);
 
  const handleDelete = (e) => {
    e.stopPropagation();
    props.removeContact(props.item.id)
  }
  const handleEditClick = (e) => {
    e.stopPropagation();
    setEdit(!isEdit)
  }
  const handleEditSubmit = (e) => {
    e.preventDefault();
    props.editContact({
      ...props.item,
      name,
      lastName,
      number
    })
    setEdit(false)
  }
  const handleEditInput = (e) => {
    setName(e.target.value);
  }
  const handleLastNameInput=(e)=>{
    setLast(e.target.value);
  }
  const handNumberInput = (e) => {
    setNumber(e.target.value);
  }

  return (
    <div className="contactItem">
      <div>
        {isEdit ? (
          <form 
            className = "edit-form"
            onClick = {e => e.stopPropagation()}
            onSubmit = {handleEditSubmit}>
            <input 
              className="edit-inp"
              onChange={handleEditInput}
              value={name} 
              type="text" 
              required
            />
            <input 
              className="edit-inp"
              onChange={handleLastNameInput}
              value={lastName} 
              type="text" 
              required
            />
            <input 
              className="edit-inp"
              onChange={handNumberInput}
              value={number} 
              type="text" 
              required
            />
            <div>
              <button 
                className="edit-form-btn" 
                type="submit"
              >Submit</button>
              <button 
                className="edit-form-btn"
                onClick={()=>setEdit(false)} 
                type="submit"
              >Cancel</button>
            </div>
          </form>
        ) : (
          <div>
            <input value={props.item.name} onChange={handleLastNameInput}/>
            <input value={props.item.lastName} onChange={handleLastNameInput}/>
            <input value={props.item.number} onChange={handNumberInput}/>
          </div>
        )
        }
          </div>
          <div>
            <button 
              className="btn-edit todo-item__btn"
              onClick={handleEditClick}
              >&#x270E;</button>
            <button 
              className="btn-del todo-item__btn"
              onClick={handleDelete}
            >&#x2716;</button>
          </div>
    </div>
  )
}
export default ContactItem;
