import { useState } from 'react'
import File from './File'

const Folder = ({ data, handleUpdateTree, handleDeleteFromTree }) => {
  const [isExpanded, setIsExpanded] = useState(true)
  const [isInputVisible,setIsInputVisible] = useState({visible: false, isFolder: null});

  const handleClick = (e,isFolder) => {
    e.stopPropagation();
    setIsExpanded(true)
    setIsInputVisible({visible:true,isFolder})
  }

  const handleAdd = (e) => {
    if(e.keyCode == 13 && e.target.value)
    {
      //Logic to add the file or folder
      handleUpdateTree(data.id,e.target.value,isInputVisible.isFolder);
      setIsInputVisible({...isInputVisible,visible:false});
    }
  }

  const handleDelete = (e) => {
    e.stopPropagation();
    handleDeleteFromTree(data.id);
  }

  if (data.isFolder) {
    return (
      <div className="folder">
        <div onClick={() => setIsExpanded(!isExpanded)}>
          <span>📂 {data.name}</span>
          <button onClick={(e) => handleClick(e,true)}>📂  ➕ </button>
          <button onClick={(e) => handleClick(e,false)}>📄 ➕</button>
          <button onClick={(e) => handleDelete(e)}>❌ </button>
        </div>
        {isInputVisible.visible && 
          <div className='folder'>
          {isInputVisible.isFolder ? "📁" : "📄" } 
          <input type="text" autoFocus onKeyDown={handleAdd} onBlur={()=> setIsInputVisible({...isInputVisible,visible:false})}/> 
          </div>}
        {isExpanded && (
          <div>
            {data.items.map((item) => (
              <Folder key={item.id} data={item} handleUpdateTree={handleUpdateTree} handleDeleteFromTree={handleDeleteFromTree}/>
            ))}
          </div>
        )}
      </div>
    )
  }
  return <File {...data} />
}

export default Folder
