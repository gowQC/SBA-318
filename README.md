# SBA-318

This project is a continuation of ALAB-318.2.1. Branching off the original work, this project allows for the querying and manipulation of two more sets of data: workouts and grades.
In addition to the original tasks data, these three pseudo-databases are capable of being accessed and modified by a variety of HTTP methods. Below will be some documentation on how the URL structure should look in a browser (assuming it is run locally on a desktop) and what options the route will provide for its user. The first piece of custom middleware created will time the user to complete workouts and tasks on the to-do list within a certain amount of time (the code uses five minutes, but in a real world application we can make the difference 24 hours to simulate a daily routine). The second piece of custom middleware logs what HTTP method is occuring and where within the routes it is happening.

# Default Routes

- http://localhost:3000

Default page that will suggest that the user appends '/help' to the end of the URL to get to the next page.

- http://localhost:3000/help

This page presents all the options available for the user to navigate through.

# TodoList Routes

- http://localhost:3000/todoList

* Shows user the current data of 'todoList'
* Presents a navigational link that directs towards 'http://localhost:3000/modifyList'
* Supports GET and PUT requests

- http://localhost:3000/todoList/:listItem

* Filters for only the one item in the index of the entire 'todoList' array
* Displays error text if the 'listItem' variable is either invalid or too large of an index value
* Supports GET requests

- http://localhost:3000/modifyList

* Displays small form underneath the current data of 'todoList'
* Form allows for the mutation of one task at a time, then redirects user to 'http://localhost:3000/todoList'
* Supports GET requests

- http://localhost:3000/downloadButton

* Able to redirect here to simulate a reward for completing all tasks from the todoList data, but users can navigate here on their own through the search bar.
* Clicking the link redirects users to '# http://localhost:3000/download'
* Supports GET requests

- http://localhost:3000/downloadButton/download

* Downloads a gold star image for user with only support for GET request

# Grades Routes

- http://localhost:3000/grades

* Shows user the current data of 'grades'
* Presents a navigational link that directs towards 'http://localhost:3000/grades/modifyGrades'
* Supports GET, POST, and PUT methods
* GET methods allow for ?courseName={string} query

- http://localhost:3000/grades/modifyGrades

* Displays two forms underneath the current data of 'grades' - PUT and POST forms
* Forms are able to either mutate or add data, then redirects user to 'http://localhost:3000/grades' to view the changes
* Supports GET requests

- http://localhost:3000/grades/:courseName

* Filters for one value as a string that must match one of the 'grades' array's objects' course_name values.
* Console logs error text if the 'courseName' variable is not found
* Supports GET requests

# Workouts Routes

- http://localhost:3000/workouts

* Shows user the current data of 'workouts'
* Presents a navigational link that directs towards 'http://localhost:3000/workouts/modifyWorkouts'
* Supports GET, POST, PUT, and DELETE requests

- http://localhost:3000/workouts/modifyWorkouts

* Displays three forms underneath the current data of 'grades' - PUT, POST, and DELETE forms
* Forms are capable of mutating, adding, or deleting data, then redirects user to 'http://localhost:3000/workouts' to view the changes
* Supports GET requests
