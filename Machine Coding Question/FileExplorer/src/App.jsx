import React, {useState} from 'react'


import Folder from './components/Folder';
import rawData from './data.json'
import useTraverseTree from './hooks/useTraverseTree';

const App = () => {
  const [explorerData,setExplorerData] = useState(rawData.data);
  const { insertNode, deleteNode } = useTraverseTree();
  const handleUpdateTree = (folderId,item,isFolder) =>
  {
    const updatedTree = insertNode(explorerData,folderId,item,isFolder);
    setExplorerData(updatedTree);
  }

  const handleDeleteFromTree = (id) => {
    const updatedTree = deleteNode(explorerData,id);
    console.log(updatedTree)
    setExplorerData(updatedTree)
  }

  return <Folder data={explorerData} handleUpdateTree={handleUpdateTree} handleDeleteFromTree={handleDeleteFromTree}/>
}

export default App