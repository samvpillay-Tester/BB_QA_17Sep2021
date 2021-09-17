### #1 Create test cases that cover the CRUD operations plus any identified edge cases. 
-Make sure you give the appropriate level of instructions for each test case. 
-You can use any format and approach you want. 
A short explanation regarding your test approach is to be provided along with the test cases.

All test cases to be performed with the pre-requisites:
Browser: Any supported desktop browser and device
(Mobile \ responsive test cases not included here)

Test Case ID: #BB_QA_Test_001
Test Scenario: To test the landing page of the site
Test Steps: (visual check only)
The user browses to 'https://computer-database.herokuapp.com/'
Once loaded, the user is directed to 'https://computer-database.herokuapp.com/computers'
The user can see the title of the page and site
The user can see a pre-populated paginated list of data
The user can see the data list has columns for
-Computer name
-Introduced
-Discontinued
-Company
The user can see controls to perform a search
The user can see controls to add data
The user can see a display of the number of pages and total of data
Prerequisites: None

Test Data: None - presume\confirm site has pre-populated data
Expected/Intended Results: Landing page diplsayed as epxected
Actual Results: As Expected
Test Status – Pass/Fail: Pass

Test Case ID: #BB_QA_Test_002
Test Scenario: To read an item of data \ load the page for that item
Test Steps: (read only check - minimal manual entry)
The user browses to 'https://computer-database.herokuapp.com/computers'
The user clicks on the name of first item of data
The site redirects to the edit details page for that item of data
The user can see the details match those from the /computers screen for the first item they selected
The user can see the site has taken them to a url /computers/{id}
The user hits the 'Cancel' button
The site redirects the user to the landing screen
Prerequisites: None

Test Data: None - presume\confirm site has pre-populated data
Expected/Intended Results: Landing page first item can be viewed on the edit screen
Actual Results: As Expected
Test Status – Pass/Fail: Pass

Test Case ID: #BB_QA_Test_003
Test Scenario: To create an item of data \ search for that item
Test Steps: (one data item for manual entry)
The user browses to 'https://computer-database.herokuapp.com/computers'
The user clicks on the button 'Add a new computer'
The site redirects to the /computers/new screen
The user can see no details populated
The user enters a chosen name
The user hits the 'Create This Computer' button
The site redirects the user to the landing screen
The user enters the chosen name into the search filter field
The user presses the 'Filter by name' button.
The site refreshes the data to display one or more data items of the chosen name
Prerequisites: None

Test Data: New computer name - presume\confirm site has pre-populated data
Expected/Intended Results: Data item created and returned in search results
Actual Results: As Expected
Test Status – Pass/Fail: Pass

Test Case ID: #BB_QA_Test_003
Test Scenario: To create an item of data \ update that item
Test Steps: (one data item for manual entry and updating)
The user browses to 'https://computer-database.herokuapp.com/computers'
The user clicks on the button 'Add a new computer'
The site redirects to the /computers/new screen
The user can see no details populated
The user enters a unique name (e.g. datetime stamp plus a prefix)
The user hits the 'Create This Computer' button
The site redirects the user to the landing screen
The user enters the unique name into the search filter field
The user presses the 'Filter by name' button
The site refreshes the data to display only one data item for the unique name
The user clicks the name of the item
The user can see the site has taken them to a url /computers/{id}
The user records the url
The user edits the computer name and other data
The user clicks the 'Save this computer' button
The site redirects the user to the landing screen
The user enters the old unique name into the search filter field
The user presses the 'Filter by name' button
The site refreshed the data to show no results and the text 'Nothing to display'
The user enters the new unique name into the search filter field
The user presses the 'Filter by name' button
The site refreshes the data to show only one result
The user clicks the name of that item
The site to the previously stored url for the editted item
The site displays the updated item

Prerequisites: None.

Test Data: Two new unique computer names - presume\confirm site has pre-populated data.
Expected/Intended Results: Data item update and only new name returned in search results - and can be browsed\redirected to.
Actual Results: As Expected
Test Status – Pass/Fail: Pass

Test Case ID: #BB_QA_Test_004
Test Scenario: To create an item of data \ delete that item
Test Steps: (one data item for manual entry and deletion)
The user browses to 'https://computer-database.herokuapp.com/computers'
The user clicks on the button 'Add a new computer'
The site redirects to the /computers/new screen
The user can see no details populated
The user enters a unique name (e.g. datetime stamp plus a prefix)
The user hits the 'Create This Computer' button
The site redirects the user to the landing screen
The user enters the unique name into the search filter field
The user presses the 'Filter by name' button
The site refreshes the data to display only one data item for the unique name
The user clicks the name of the item
The user can see the site has taken them to a url /computers/{id}
The user records the url
The user presses the button Delete this computer
The site redirects the user to the landing screen
The user enters the unique name into the search filter field
The user presses the 'Filter by name' button
The site refreshed the data to show no results and the text 'Nothing to display'
The user browses to the previously stored url for the deleted item
The site fails to display the page \ returns page not found

Prerequisites: None.

Test Data: New unique computer name - presume\confirm site has pre-populated data.
Expected/Intended Results: Data item created then deleted and not returned in search results.
Actual Results: As Expected
Test Status – Pass/Fail: Pass

Test Case ID: #BB_QA_Test_005
Test Scenario: To create an item of data \ search for that item
Test Steps: (one data item for manual entry)
The user browses to 'https://computer-database.herokuapp.com/computers'
The user clicks on the button 'Add a new computer'
The site redirects to the /computers/new screen
The user can see no details populated
The user enters a chosen name of length 10,000 characters
The user hits the 'Create This Computer' button
The page validation prevent the user from creating this item
The pages show the validation error highlighting for the name field
The user remains on the /computers/new screen
Prerequisites: Understanding of the true max field length for more accurate testing

Test Data: Long computer name - presume\confirm site has pre-populated data
Expected/Intended Results: No data item created and remains on the same screen with a friendly validation error
Actual Results: Redirected to the 'Application error' screen
Test Status – Pass/Fail: Fail

Test Case ID: #BB_QA_Test_003
Test Scenario: Test error handling
Test Steps: (mess with the DOM or any other easy hack)
The user browses to 'https://computer-database.herokuapp.com/computers'
The user clicks on the button 'Add a new computer'
The site redirects to the /computers/new screen
The user can see no details populated
The user enters a chosen name
The user select a company from the company drop down list
The user opens the developer tools
The user changes the option value for the selected company to an presumably invalid larger number
The user hits the 'Create This Computer' button
The site presents some form of validation error or otherwise prevents the submission of the invalid request
Prerequisites: None

Test Data: None - presume\confirm site has pre-populated data
Expected/Intended Results: No data item created and remains on the same screen with a friendly validation error
Actual Results: User show repeatable big red message: 
Oops, an error occured
This exception has been logged with id 7l4ienleo. 
(up to 7l4ig3m1o for the repeated refresh)
Test Status – Pass/Fail: Fail
Edit - retest status: Pass ? this was not replicated, even after using letters for the value
A validation error highlight was shown on using characters, but the application seemed to accept large numbers for the value \ our showed validation for very high numbers