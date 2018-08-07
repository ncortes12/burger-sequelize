# burger

Would you like create tasty burgers and the digitally devour them...sure. Mostly this app demonstrates creating, reading and updating items dynamically from a `mySQL` database using handlebars to display the html

## Live Link
 https://safe-tor-49737.herokuapp.com/

## Usage


TO use the app visit the home page with the link that is provided below to create and devour burgers.

## Requirements
- Modularity in the form of separate files for server logic, configuration of database connection and ORM, models, routing and views
- User interface that displays burgers to eat, devoured burgers and a form to create new burgers
- Use `express`, `body-parser`, `express-handlebars` and `mySQL` npm packages in the `server.js` file
- Appropriate GET , POST  and PUT routes for serving HTML pages and making modifications to the mySQL database


## Technologies Utilized

- JavaScript
- jQuery
- node.js
- Express.js
- Handlebars
- mySQL
- HTML
- Bootstrap

## Code Explanation
- My `server.js` file sets up the Express server, specifying our port number both for use on a local host or heroku live site, the npm packages that need to be loaded, and also the routes, which we have externalized
- The handlebars files main and index are used to dynamically display information pulled from a mySQL database
- My `orm.js` file sets up all of the mySQL queries and accepts variable from the user interface to display and update the database
- My models folder `burgers.js` sets up a burger object that defines the callback function that is passed to `orm.js`
- My  routing files (`burger_controller.js`) determines the back-end logic (based on the request being made, the response that gets sent to the      browser);
- When the `Eat Me` button is displayed the burgers devoured state is change from false to true and the burger is resdisplayed in the devoured       burger list
- When a new burger is created using the form, its devoured state is set to false and the burger is displayed in the Burger to Eat list
- A modal is then toggled, displaying the the best match to the person who just took the survey

