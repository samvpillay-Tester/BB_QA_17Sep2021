### #2 Write scripts
Code in Visual Studio Code
UI automation framework of choice: Cypress
Package installation via npm
Language of choice: TypeScript
Possible issue(s) with intellisense \ setup of chainable functions
-a number of errors are being reported in the IDE, so I have probably missed something
-the test suite currently runs locally, so presume this is just intellisense (and something I have missed to allow it)

Test selection:
Cover the minimum requirements to exercise CRUD operations
Include validation and minimal search result testing
No real tests included for the main screen 
-beyond searching for specific computers

Tests do not currently include:
-Data creation via a currently exposed POST end point to reduce reliance on UI interactions
-Cleanup of test data (again, due to lack of knowledge on any available API for data cleansing)
