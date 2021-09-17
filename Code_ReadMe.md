### #2 Write scripts
Code in Visual Studio Code
UI automation framework of choice: Cypress
Package installation via npm
Langugage of choice: TypeScript
Possible issue(s) with inttelisense \ setup of chainable functions
-a number of errors are being repored in the IDE, so I have probably missed something
-the test suite currently runs locally, so presume thyis is just intellisense (and something I have missed to allow it)

Test selection:
Cover the minimum requirements to execise CRUD operation
Include validation and minimal search result testing
No real tests included for the main screen 
-beyond searching for specific computers

Tests do not currently include:
-Data creation via any form of API to reduce reliance on UI interactions
-Clean up of test data (again, due to the lack of API for data handling)
-API traffic visible in the network tab and could potentially be reverse engineered?
-- e.g. POST to http://computer-database.herokuapp.com/computers