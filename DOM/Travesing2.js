// parents  child siblings

// node=> element node,  text node, attribute node, document node
// element node => HTML element
// text node => text inside element
// attribute node => attributes of element
// document node => entire HTML document

// function traverseDOM() {
//     let getParent=document.querySelector('.child1');
//     // console.log(getParent); // returns the child1 element
//     console.log(getParent.parentElement); // returns parent element of child1
//     console.log(getParent.parentNode); // returns parent element of child1

//     let getParent1=document.querySelector('.parent');
//     console.log(getParent.parentElement); // returns parent element of child1
//     console.log(getParent1.parentNode); // returns all child nodes including text nodes
// }

// child nodes

// function traverseChildNodes() {
//     let getParent=document.querySelector('.parent');
//     console.log(getParent.childElementCount); // returns the parent element
//     console.log(getParent.childNodes); // returns all child nodes including text nodes
//     console.log(getParent.children); // returns only element nodes (child elements)
//     console.log(getParent.firstChild); // returns first child node (text node)
//     console.log(getParent.firstElementChild); // returns first child node (text node)
//     console.log(getParent.lastChild); // returns last child node (text node)
//     console.log(getParent.lastElementChild); // returns last child element
// }


// siblings

function traverseSiblings() {
    let child1 = document.querySelector('.child1');
    console.log(child1.nextSibling); // returns next sibling node (text node)
    console.log(child1.nextElementSibling); // returns next sibling element (child2)    
    console.log(child1.previousSibling); // returns previous sibling node (text node)   
}
