Eat Da Burgar 
- This is a very simple app where a user is able to input a burger via text, and that burger will be added to a list of unneaten burgers. The user can then click a button to "eat" it, and will be added to a list on the right.

- What is actually happening when a user submits a burger is it gets submitted to a table in a database. When the page is reloaded, the data will be persistant.

- When a new burger is submitted into the table, it has the attribute "eaten" set to false.

- When the button attatched to the new burger is clicked, it then changes the "eaten" attribute to true, and as it cant be rendered in the "eaten" box anymore, it moves into the other column.