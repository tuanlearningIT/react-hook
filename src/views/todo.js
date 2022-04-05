
const Todo = (props) => {
    // let listTodo = props.listTodo
    const { listTodo, title, handleDeleteParent } = props

    const handleDelete = (id) => {
        handleDeleteParent(id)

    }
    return (
        <div>
            <div className='listtodo-container' style={{ 'height': '72vh' }}>

                {title}
                <div className='content'>
                    {listTodo && listTodo.length > 0 &&
                        listTodo.map((item, index) => {
                            return (
                                <div key={item.id}>
                                    <ul >
                                        <li>
                                            {item.title}
                                            &nbsp;  <span onClick={() => handleDelete(item.id)}>X</span>
                                        </li>
                                    </ul>
                                </div>

                            )
                        })}
                    <hr />
                </div>
            </div>
        </div>
    )
}
export default Todo;