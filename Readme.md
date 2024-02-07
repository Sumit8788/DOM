# What is Dom
 DOM stands for Document Object Model. It is a programming interface for web documents. 
 The DOM represents the structure of a document as a tree of nodes, with each node 
 representing a part of the document (such as an element, attribute, or text). 
 JavaScript can interact with the DOM to dynamically change the content, structure, and 
 style of a web page. This interaction allows web developers to create dynamic and 
 interactive web pages.

 # Selectors

1.getElementById(id): This method returns the element with the specified ID. IDs must be unique within the document. 
Example:
```Javascript
   var element = document.getElementById('myId');
```

2.getElementsByClassName(className): This method returns a collection of elements with the specified class name. It returns a live NodeList, which means it will update dynamically if elements with the specified class are added or removed from the document. 
Example:
```javascript
   var elements = document.getElementsByClassName('myClass');
```

3.getElementsByTagName(tagName): This method returns a collection of elements with the specified tag name. It also returns a live NodeList. 
Example:
```javascript
   var elements = document.getElementsByTagName('div');
```

4.querySelector(selector): This method returns the first element that matches the specified CSS selector. If no matching element is found, it returns `null`. It only returns the first match, even if there are multiple matching elements. 
Example:
```javascript
   var element = document.querySelector('.myClass');
```

5.querySelectorAll(selector): This method returns a static NodeList containing all elements that match the specified CSS selector. It returns all matching elements, not just the first one. 
Example:
```javascript
   var elements = document.querySelectorAll('div.myClass');
```

6.Other Selectors:
   -Attribute Selectors: You can select elements based on attributes using CSS attribute selectors, such as `[attribute]` (selects elements with the specified attribute), `[attribute=value]` (selects elements with the specified attribute and value), etc.
   -Pseudo-classes and Pseudo-elements: CSS also supports pseudo-classes (`:hover`, `:focus`, `:nth-child(n)`, etc.) and pseudo-elements (`::before`, `::after`, etc.) for selecting elements based on their state or position in the document.
```css
    h1:hover{

    }
```

# Changing HTML

Changing HTML typically refers to dynamically modifying the content, structure, or 
attributes of HTML elements using JavaScript. This is commonly done to create 
interactive web pages where the content can change based on user actions, data updates, 
or other events.

Here are some common ways to change HTML using JavaScript:

1.Manipulating Inner HTML: You can change the content inside an element by modifying its `innerHTML` property. This allows you to replace the entire content of an element with new HTML markup. 
Example:
```javascript
   document.getElementById('myElement').innerHTML = '<p>New content</p>';
```

2.Manipulating Text Content: If you want to change only the text content of an element without affecting its HTML structure, you can use the `textContent` property. 
Example:
```javascript
   document.getElementById('myElement').textContent = 'New text content';
```

3.Changing Attributes: You can modify the attributes of HTML elements using JavaScript. For example, to change the `src` attribute of an image element:
```javascript
   document.getElementById('myImage').src = 'new_image.jpg';
```

4.Adding and Removing Elements: You can dynamically add new elements to the DOM or remove existing elements. For example, to add a new paragraph element:
```javascript
   var newParagraph = document.createElement('p');
   newParagraph.textContent = 'New paragraph';
   document.getElementById('parentElement').appendChild(newParagraph);
```
# Changing CSS

Changing CSS refers to dynamically modifying the styles of HTML elements using JavaScript. This allows you to update the appearance of elements in response to user actions, events, or other dynamic conditions. Here are some common ways to change CSS using JavaScript:

1.Modifying Inline Styles: You can directly modify the `style` attribute of an element to change its inline styles. This is useful for making immediate changes to individual elements. 
Example:
```javascript
   document.getElementById('myElement').style.color = 'red';
   document.getElementById('myElement').style.fontSize = '20px';
```

2.Adding or Removing CSS Classes: You can add or remove CSS classes from elements to apply predefined styles. This is a more flexible approach, as it allows you to define styles in CSS and apply them dynamically. 
Example:
```javascript
   document.getElementById('myElement').classList.add('highlight');
   document.getElementById('myElement').classList.remove('highlight');
```

3.Setting CSS Properties: You can directly set specific CSS properties of an element using the `style.setProperty()` method. This allows you to dynamically change any CSS property of an element. Example:
```javascript
   document.getElementById('myElement').style.setProperty('background-color', 'yellow');
```

4.Using CSS Variables: If your CSS uses custom properties (CSS variables), you can modify these variables using JavaScript to change multiple styles at once.
Example:
```javascript
   document.documentElement.style.setProperty('--main-color', 'blue');
```

5.Animation and Transitions: You can control CSS animations and transitions through JavaScript by adding or removing classes that trigger these effects. This allows you to create dynamic animations based on user interactions. 
Example:
```javascript
   document.getElementById('myElement').classList.add('slide-in');
```

# Event listener

An event listener is a function in JavaScript that listens for a specific type of event 
on a target element and executes a callback function when that event occurs. Events can 
be user actions (like clicking a button or submitting a form), browser actions (like 
the page finishing loading), or other types of interactions.

Here's how to use an event listener:

1.Syntax:
```javascript
   target.addEventListener(type, listener);
```

-target: The DOM element to which the event listener is attached.
-type: The type of event to listen for (e.g., `'click'`, `'submit'`, `'keydown'`).
-listener: The function to be called when the event occurs. This function is often 
 referred to as the "event handler" or "callback function."

2.Example:
```javascript
   // Add a click event listener to a button element
   var button = document.getElementById('myButton');
   button.addEventListener('click', function() {
       console.log('Button clicked!');
   });
```

In this example, when the button with the ID 'myButton' is clicked, the anonymous 
function (the event listener) is executed, which logs 'Button clicked!' to the 
console.

3.Removing an Event Listener:
   You can also remove an event listener using the `removeEventListener` method. It requires the same arguments as `addEventListener`: the type of event and the listener function. Example:
```javascript
   var button = document.getElementById('myButton');
   var clickHandler = function() {
       console.log('Button clicked!');
   };
   button.addEventListener('click', clickHandler);

   // Later, remove the event listener
   button.removeEventListener('click', clickHandler);
```

# First Project : ToDo List

This is a simple ToDo List web application built using HTML, CSS, and JavaScript. It 
allows users to add tasks to a list, mark them as completed with a checkbox, and reset 
the list. The application provides a clean and user-friendly interface for managing 
tasks.

# Features

- Add tasks to the list
- Mark tasks as completed
- Reset the list

# Usage

1. Enter a task in the input field.
2. Click the "Add To List" button to add the task to the list.
3. Check the checkbox next to a task to mark it as completed.
4. Click the "Reset" button to clear all tasks from the list.

# Installation

No installation is required. Simply open the `index.html` file in your web browser to use the application.

# Credits

This project was created by Sumit Maske.
