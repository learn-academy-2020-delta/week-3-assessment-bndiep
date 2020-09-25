# ASSESSMENT 3: Interview Practice Questions

Answer the following questions.

First, without external resources. Challenge yourself to answer from memory as if you were in a job interview.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely, there is always something more to learn. Write your researched answer in your OWN WORDS.


1. What is object destructuring?

  Your answer: Object destructuring is the process of making a key of an object's property its own variable by assigning its value to the path of the object. That path is a reference to the object, where the key: value pair can be found.

  Researched answer: It is a Javascript syntax that allows the user to unpack values from arrays, properties from objects, maps, or sets into their own variables. The left hand side of the syntax defines what values are being unpacked from the object. The user can also create an alias for the destructored object if they want to name the variable different from its key name.



2. What are React lifecycle methods? Provide three examples.

  Your answer: There are three features of a React lifecyle, but I only know of two on the top my head. There's mounting and unmounting. In React, there are methods that are used to update the state object and in turn the virtual DOM. I think there is a method called componentDidMount, but I only learned about it briefly.

  Researched answer: They are a series of events that happen from the creation of the React component to when it basically dies and is no long used. There are three cycles: mounting (the birth of your component), update (growth of your component), and unmount (the death of your component). The most common React Lifecycle methods are render(), componentDidMount(), componentDidUpdate(), and componentWillUnmount(). The render method is a required method with a class component in React. It renders the component to the user interface and occurs during the mounting and updating phase. componentDidMount() is called when the component is mounted and ready. It allows the usafe of setSate() to update the state and render before the browser updates the UI. componentDidUpdate() is invoked when the update happens. It basically updates the DOM when a state or prop changes. componentWillMount() is called just before the component is unmounted and destroyed. That component is not re-rendered and the user will not be able to setState().



3. What is the difference between a class and an object?

  Your answer: A class is a blueprint of an object. It can hold objects as well as methods, which are functions for objects. An object is non-primitive data type that allows the user to store a collection of data as key: value pairs. Those key: value pairs are known as the object's properties.

  Researched answer: A class is a template for defining objects that contains the names and variables that exist in an object, as well as its methods. A class can be seen as the type while an object is a variable of that type. A class can define the object's properties including a range of values or a default value. It can also be described as the object's behavior. An object is an instance of a class and has a state that has its values defined.



4. What is the difference between a HTML div and a span?

  Your answer: The div (division) tag acts like a container that for the contents nested inside it. The div separates those contents from other div tags. I know span is very similar but I can't recall the difference at the moment.

  Researched answer: The div tags are block-level elements and span are inline elements. Div tags defines a division or section in HTML document. Divs are best used to wrap sections of document. Spans should be used to wrap small portions of text or images. It is mainly used to group elements for styling purposes. For example, span can be used to highlight a specific word on the webpage. Divs can accept an align attribute while the span tag cannot.



5. What is React.Fragment (or <>) and why would you want to use it?

  Your answer: In React, the render can only accept one return (as should any function really). If React recognizes there are several elements attempting to be returned, an error will occur. To prevent this, any elements that will be rendered must be nested inside a React.Fragment. With everything nested inside that tag, render will recognize that as only one piece of code block being returned.

  Researched answer: React.fragment allows the user to group a list of children components without adding extra nodes to the DOM. It acts similiarly to a wrapper div tag. By having these fragments, the parent component can return multiple elements. If <React.fragment> is explicity used, it can have keys. This can be useful if the user needs to map over a property to an array of fragments like making a list.



6. What are three options for creating responsive design?

  Your answer: One way is creating a way for the elements in the website to adjust as the window size of the browser gets adjust. Images and text will move dynamically when the window expands or shrinks. Another general one is making sure the state objects change dynamically when a person interacts with the website like clicking a button or a link. And for the last option... I can't think of another one, but I will try to look up additional ways to create a responsive design.

  Researched answer: One way is to omptimize the application for mobile devices or small screens. This can be done by creating a separate component that will hold the properties that will change the elements on the page like making the nav bar fixed or changing the padding to look better on a smaller screen. Another way is using styled-components to style React components instead of mapping between components and styles. Basically, a new React component is made with styles attached to it. One last way is to create a responsive side navigation bar with CSS. If the user's screen is large, have the nav bar transformed vertically to the left of the page. When the page decreases in size, the nav bar will be transformed to the top of the screen horizontally. There are many CSS frameworks that can help achieve these responsive design choices like Bootstrap, Flexbox, Bulma.io, Antd, and Material-UI.



7. What are props in React?

  Your answer: Props are the properties that the React app contains. It can be accessed my passing props in the constructor and the super of the main class App. The addition of props also allow the child component to pass variables or arguments to the parent component.

  Researched answer: It is a keyword in React which stands for properties and is used to pass data from one component to another. The props are being bassed in a uni-directional flow, so that means it moves one way from parent to child. Props are like function arguments but are instead passed to React components. Props are passed to components by HTML attributes. Props can pass data from one component to another as parameters. Props being passed must be placed in curly braces if they are with JSX elements. Parent components that have a constructor function must have props passed to the constructor and the React.Component via the super() method. Also, React propps are read-only so an error will occur if the value is changed!



8. What is `this` in JavaScript?

  Your answer: A keyword that is use to reference the object that "this" is contained in. If an object contains a function and requires the use of another value in the same object, the specified value must be called with the keyword "this" in front of it.

  Researched answer: The `this ` keyword refers to the object it belongs to. In a method, `this` is the ownwe object. `this` by itself or in a function refers to the global object. In an event, `this` refers to the element that received the event. In strict mode, `this` is undefined by default. If not, then it acts as a gloabl object.



9. STRETCH: What is a ternary operator in JavaScript?

  Your answer: A ternary operator is used to simplify or shorten an if else statement. It starts off with the if condition without the keyword "if" and ends with a question mark. After the question mark, the true statement is written followed by a colon and then the else statement. If there is an else if statement, a comma is followed after the true statement and the next line starts with a colon followed by the else if statement. Repeat until the else statement is reached. Ternary operators are right-associative.

  Researched answer: It is a conditional operator that is the only JavaScript operator that takes 3 operands. First is a condition followed by a question mark. Second is an expression that will be executed if the condition is true followed by a colon. And third, the remaining else expression if the condition is false. The else condition doesn't not have to explicitly false but can be other false expressions such as null, NaN, 0, and an empty string. This can be useful if you would like for there to be a default value in place for the lack of an input value by the user. The ternary operator can also be chained similar to if...else if...else if...else.



10. STRETCH: What is an anonymous function in JavaScript?

  Your answer: It is a function that does not have a name or was declared without a name. They can also be declared by writing the function using a fat arrow. These are called arrow functions and are typically assigned to a variable to be recalled later.

  Researched answer: It is a function without a name and often cannot be called after its initial creation unless it is assigned to a variable in which it can be called by the variable name followed by parentheses. However, if not assigned to a variable, it can be called immediately after a trailing parentheses but cannot be called again. Anonymous functions can be arguments for other functions.



## Looking Ahead: Terms for Next Week
- Ruby - a dynamic, open source programming language that uses garbage collection (a form of automatic memory management). It uses an object-oriented approach.
- Object oriented programming - a programming model that organizes software design around objects rather than functions and logic. Best suited for programs that are large, complex, and often need to be updated or maintained.
- RSpec - a testing tool written in Ruby to test Ruby code that is created for behavior-driven development that combines TDD, Domain Driven Design, and Acceptance Test-Drive Planning.
- Instance variable - a variable in Ruby that starts with an @ symbol. The content is restricted to whatever the object itself refers to. It allows the user to use class whcih ave its own state. They do not need to be declared and is dynamically appeneded to an object when it is first referenced. 
- Ruby blocks - groupings of code that are put inside the do and end keywords or between curly braces. They are small anonymous functions that can be passed into methods.
- Ruby hashes - a collection of unique key-value pairs that are similar to an array. Indexing is done by arbitrary keys of an object type instead of the integer index.
- `getter` and `setter` methods in Ruby - getters are methods used to get the value of an instance variable. Setter methods are used to set the value of an instance variable of some class.
