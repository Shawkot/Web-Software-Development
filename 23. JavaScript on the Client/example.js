
// creating h1 tag or element
const header = document.createElement('h1');

// creating content node
const h1Content = document.createTextNode('This is header h1');

// attaching the content to the tag 'h1'
header.appendChild(h1Content);
const element = document.createElement("p");
const text = document.createTextNode("Hello world!");
element.appendChild(text);

// attaching the whole element to the body of the html document

document.querySelector('body').appendChild(header);
document.querySelector("body").appendChild(element);