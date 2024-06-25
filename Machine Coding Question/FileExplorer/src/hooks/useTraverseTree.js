const useTraverseTree = () => {

        const insertNode = (tree,folderId,itemName,isFolder) => {

            if(!tree.isFolder)
            return tree
            
            if(tree.id == folderId && tree.isFolder)
            {
                 tree.items.unshift({id: new Date().getTime(), name: itemName, isFolder,items:[]});
                return tree;
            }

            const updatedItems = tree.items.map((item) => insertNode(item,folderId,itemName,isFolder));

            return {...tree,items:updatedItems}
        }

        const deleteNode = (tree,id) => {
            
            if(tree.id == id)
            {
                return {};
            }

            const updatedList = tree.items.filter(item => {
                if(item.id == id)
                 {
                     return false;
                 }
                 if(item.isFolder) deleteNode(item);
            })
            return {...tree,items: updatedList}
        }
        return {insertNode, deleteNode}
}


export default useTraverseTree;