# Eat the Burger

![Burger home page](/public/assets/images/burger1.png)

# Description


*Eat the Burger* is an app that utilizes a dabatase so that a user is able to input a burger via text, and that burger will be added to a list of unneaten burgers. The user can then click a button to "eat" it, and will be added to a list on the right. It was made using Handlebars, MySQL, Sequalize ORM, and Javascript. 


# Demo

*Eat the Burger* is deployed on Heroku you can mess with it here: https://burger68.herokuapp.com/

# Walkthrough

*Eat the Burger* starts on the homepage, with a list of eaten and uneaten burgers (if there are any). You can type anything you want into the box


![burger typing](/public/assets/images/burger2.png)

When you submit the burger, it is then moved to the "uneaten" column. This happens as the burgers attribute "eaten" is set to false.

![burger column](/public/assets/images/burger3.png)

When the button attatched to the new burger is clicked, it then changes the "eaten" attribute to true, and as it cant be rendered in the "eaten" box anymore, it moves into the other column.

![burger column](/public/assets/images/burger4.png)

