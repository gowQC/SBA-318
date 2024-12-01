# SBA-318

This project is a continuation of ALAB-318.2.1. Branching off the original work, this project allows for the querying and manipulation of two more sets of data: workouts and grades.
In addition to the original tasks data, these three pseudo-databases are capable of being accessed and modified by a variety of HTTP methods. Below will be some documentation on how the URL structure should look in a browser (assuming it is run locally on a desktop) and what options the route will provide for its user.

# Default Routes

- http://localhost:3000

Default page that will suggest that the user appends '/help' to the end of the URL to get to the next page.

- http://localhost:3000/help

This page presents all the options available for the user to navigate through.

# TodoList Routes

- http://localhost:3000/todoList

* Shows user the current data of 'todoList'
* Presents a navigational link that directs towards 'http://localhost:3000/modifyList'

- http://localhost:3000/todoList/:listItem

* Filters for only the one item in the index of the entire 'todoList' array
* Displays error text if the 'listItem' variable is either invalid or too large of an index value

- http://localhost:3000/modifyList

* Displays small form underneath the current data of 'todoList'
* Form allows for the completion of one task at a time, then redirects to 'http://localhost:3000/todoList'

- http://localhost:3000/downloadButton

* Able to redirect here to simulate a reward for completing all tasks from the todoList data, but users can navigate here on their own through the search bar.
* Clicking the link redirects users to '# http://localhost:3000/download'

- http://localhost:3000/download

* Downloads a gold star image for user on GET request

# Grades Routes

# Workouts Routes
