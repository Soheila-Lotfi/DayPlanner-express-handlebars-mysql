# DayPlanner-express-handlebars-mysql

By:

Soheila Lotfi

* **Instructions**

  * Create a full-stack application with Express, MySQL and Handlebars.

     * Create a `schema.sql` file. Inside of that file, do the following:

    1. Make a database called day_planner_db

    2. Inside of that database make a plan table which will contain a plan column and an id column. The id will be automatically incremented while also being the primary key.

    3. Run your `schema.sql` file within MySQL Workbench before moving onto the next steps.

  * In the server.js file, I create four routes: `get`, `post`, `put`, and `delete`.

    * Render the main `index.handlebars` when the `'/'` get route is hit with all of the plans from the plans table.

    * The application  have a set of routes on `'/api/plans'` for create, update, and delete operations on the plans table.

    * Show a delete button next to each plan. When one of the delete buttons is clicked, the code should send a DELETE request to  delete the associated plan from the database.

    * Additionally, show the form that the user can use to add a plan to be done.  When the submit button is clicked, the code will post to the `'/api/plans'` route, which will insert the plan from the form into the plans table and return the ID of the new plan.

    * Have another form that will update a plan in the plans table using PUT method.
