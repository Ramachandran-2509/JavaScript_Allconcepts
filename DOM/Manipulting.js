// Create new elements




// difference between innerHTML and innerText
// innerHTML allows HTML content, while innerText only allows text.
// innerHTML is more powerful, but also more dangerous, 
// as it can be used to inject malicious
// innerText is safer, as it only allows text content and does not allow HTML tags.
// Text can only be used to set or get the text content of an element.


// difference between appendChild and append
// appendChild is used to add a node as the last child of a specified parent node.
// append can add both nodes and strings, and it can also add multiple nodes at once.

// appendChild is more traditional and widely supported, while append is more modern and flexible.
// append is a newer method that can take multiple arguments and can also accept strings,
// while appendChild only accepts a single node as an argument.
// appendChild is used to add a node as the last child of a specified parent node.
// append can add both nodes and strings, and it can also add multiple nodes at once.


// function addElement() {
//     // your logic here
//         const newElement = document.createElement('li');
      // newElement.innerText ="Item-4"
//         newElement.innerHTML =" <a>Link</a> Item-4";
//         newElement.textContent = "Item-4";
//    console.log(newElement);

// }

function addElement() {

    let newElement = document.createElement('li');
    newElement.style.color = "red"; // setting style

    let input=document.querySelector("input")

    newElement.innerText = input.value;
    
    // select Ol
    let ol = document.querySelector('ol');  
    // append new element to ol
    ol.appendChild(newElement);  // appendChild is used to add a node as the last child of a specified parent node.
    // ol.append(newElement);  // append can add both nodes and strings, and it can also add multiple nodes at once.

    // ol.insertBefore(newElement, ol.children[2]); // insertBefore is used to insert a new node before a specified existing node in the DOM.
    // ol.replaceChild(newElement, ol.children[2]); // replaceChild is used to replace an existing child node with a new node.


    // ol.removeChild(ol.children[2]); // removeChild is used to remove a child node from the DOM.
    //  ol.remove(); // remove is used to remove the element from the DOM.


    //  ol.prepend(newElement); // prepend is used to add a new node as the first child of a specified parent node.
}