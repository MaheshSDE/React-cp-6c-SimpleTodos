// Write your code here
import './index.css'

const TodoItem = props => {
  const {userDetails, deleteUser} = props
  const {title, id} = userDetails

  const onDelete = () => {
    deleteUser(id)
  }

  return (
    <li className="list-items-container">
      <p className="description">{title}</p>
      <button type="button" className="button" onClick={onDelete}>
        Delete
      </button>
    </li>
  )
}
export default TodoItem
