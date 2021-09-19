### #1 Create test cases that cover the CRUD operations plus any identified edge cases. 
-Make sure you give the appropriate level of instructions for each test case. 
-You can use any format and approach you want. 
A short explanation regarding your test approach is to be provided along with the test cases.

### All test cases to be performed with the pre-requisites:
Browser: Any supported desktop device and browser - fullscreen (ToDo - define min\max resolution)
(Mobile \ responsive test cases not included here)

### Test approach (partly included in Code_ReadMe.md)
Contrary to the test instructions, the automation was carried out first.
--Exploratory testing helped define minimum CRUD functionality for automation testing
--Difficultly of automation assessed for what could be more beneficial as manual testing
Basic CRUD testing also listed as test cases, but presume this should be replaced\served only via automation
Non-functional testing not considered for manual testing, as this should be covered by other automation technologies, e.g.
--visual regression: for look and feel testing
--response time for various pages loads (can be tested via the API for load\capacity\stress\soak)
Exploratory testing results recorded as test cases, especially for negative\failing results
Validation not included as manual test cases, as this is easier to describe and test via UI automation
No mobile or responsive testing carried out, as the test cases are all for desktop, fullscreen


### Test Case ID: #BB_QA_Test_001
Test Scenario: To test the landing page of the site
Test Steps: (visual check only)
The user browses to 'https://computer-database.herokuapp.com/'
The site redirects to 'https://computer-database.herokuapp.com/computers'
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
Expected/Intended Results: Landing page displayed as expected
Actual Results: As Expected
Test Status – Pass/Fail: Pass

### Test Case ID: #BB_QA_Test_002
Test Scenario: To read an item of data \ load the page for that item
Test Steps: (read only check - minimal manual entry)
The user browses to 'https://computer-database.herokuapp.com/computers'
The user clicks on the name of first item of data
The site redirects to the edit details page for that item of data
The user can see the details match those from the /computers screen for the first item they selected
The user can see the site has taken them to a URL in the format /computers/{id}
The user hits the 'Cancel' button
The site redirects the user to the landing screen
Prerequisites: None

Test Data: None - presume\confirm site has pre-populated data
Expected/Intended Results: Landing page first item can be viewed on the edit screen
Pressing Cancel on the edit screen takes the user back to the landing page
Actual Results: As Expected
Test Status – Pass/Fail: Pass

### Test Case ID: #BB_QA_Test_003
Test Scenario: To create an item of data \ search for that item
Test Steps: (create one data item from manual entry)
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

### Test Case ID: #BB_QA_Test_004
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
The user can see the site has taken them to a URL in the format /computers/{id}
The user records the URL
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
The site redirects to the previously identified URL for the edited item
The site displays the updated item

Prerequisites: None.

Test Data: Two new unique computer names - presume\confirm site has pre-populated data.
Expected/Intended Results: Data item update and only new name returned in search results - and can be browsed\redirected to.
Actual Results: As Expected
Test Status – Pass/Fail: Pass

### Test Case ID: #BB_QA_Test_005
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
The user can see the site has taken them to a URL /computers/{id}
The user records the URL
The user presses the button Delete this computer
The site redirects the user to the landing screen
The user enters the unique name into the search filter field
The user presses the 'Filter by name' button
The site refreshed the data to show no results and the text 'Nothing to display'
The user browses to the previously stored URL for the deleted item
The site fails to display the page \ returns page not found

Prerequisites: None.

Test Data: New unique computer name - presume\confirm site has pre-populated data.
Expected/Intended Results: Data item created then deleted and not returned in search results.
Actual Results: As Expected
Test Status – Pass/Fail: Pass

### Test Case ID: #BB_QA_Test_006
Test Scenario: Attempt to create an item with invalid data
Test Steps: (invalid data for manual entry)
The user browses to 'https://computer-database.herokuapp.com/computers'
The user clicks on the button 'Add a new computer'
The site redirects to the /computers/new screen
The user can see no details populated
The user enters a chosen name of length 10,000 characters
The user hits the 'Create This Computer' button
The page validation prevents the user from creating this item
The pages show the validation error highlighting for the name field
The user remains on the /computers/new screen
Prerequisites: Understanding of the true max field length for more accurate testing, along with any other required validation rules

Test Data: Long computer name
Expected/Intended Results: No data item created and user remains on the same screen with a friendly validation error
Actual Results: Redirected to the 'Application error' screen
- Test Status – Pass/Fail: Fail
Retry test status: Fail 
Retry seemed to pass with 10,000 
-but 413 error 'This page isn't working at the moment' returned for 100,000 characters
-this seemed repeatable at time of writing\testing, via the /computers/new page
-413 could also be resubmitted by refreshing page, despite URL showing /computers

### Test Case ID: #BB_QA_Test_007
Test Scenario: Test error handling
Test Steps: (mess with the DOM or any other easy hack)
The user browses to 'https://computer-database.herokuapp.com/computers'
The user clicks on the button 'Add a new computer'
The site redirects to the /computers/new screen
The user can see no details populated
The user enters a chosen name
The user selects a company from the company drop down list
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
### Note - spelling mistake for 'occured' - does not appear to be a 'localisation' issue?
- Test Status – Pass/Fail: Fail
Retest status: Pass - this was not replicated later, even after using letters for the value
A validation error highlight was shown on using characters, but the application seemed to accept large numbers for the value \ or showed validation for very high numbers

### Test cases written after test submission (but noticed durIng manual testing) 008a & 008b
### UI automation was written for https, otherwise unsecured browsing should have been tested there

### Test Case ID: #BB_QA_Test_008a
Test Scenario: Test unsecure browsing - disabled
Test Steps: (browsing only)
The user browses to 'http://computer-database.herokuapp.com/computers'
The site informs the user that browsing over http is not enabled for the site
The site does not redirect or otherwise display the site data
The user is only able to access all pages and content over https 
 /computers
 /computers/575
 /computers/new
(exploratory testing - sniff for other pages or content delivery URLS to check)

Prerequisites: None

Test Data: None
Expected/Intended Results: User unable to browse the site over http
Actual Results: User is shown site data and is able to load content \ browse insecurely
- Test Status – Pass/Fail: Fail
-Candidate for automation to ensure:
--The site does not allow browsing over http
--No content is served via http (there is no mixture of http and https)

### Test Case ID: #BB_QA_Test_008b
Test Scenario: Test unsecure browsing - redirection (less desirable option)
Test Steps: (browsing only)
The user browses to 'http://computer-database.herokuapp.com/computers'
The site redirects the user to 'https://computer-database.herokuapp.com/computers'
The user is only able to access all pages and content over https 
 /computers
 /computers/{id}
 /computers/new
(exploratory testing - sniff for other pages or content delivery URLS to check)

Prerequisites: None

Test Data: None
Expected/Intended Results: User unable to browse the site over http
Actual Results: User is shown site data and is able to load content \ browse insecurely
- Test Status – Pass/Fail: Fail
-Candidate for automation to ensure:
--The site does not allow browsing over http, by always redirecting to https
--No content is served via http (there is no mixture of http and https)

### New test cases written after test submission (Tests 009 and 010 not originally noticed)

### Test Case ID: #BB_QA_Test_009
Test Scenario: Test display of long computer name
Test Steps: (create long named computer)
The user browses to 'https://computer-database.herokuapp.com/computers'
The user clicks on the button 'Add a new computer'
The site redirects to the /computers/new screen
The user can see no details populated
The user enters a chosen name of a single very long string
The user hits the 'Create This Computer' button
The site redirects the user to the landing screen
The user enters the chosen name into the search filter field
The user presses the 'Filter by name' button.
The site refreshes the data to display one or more data items of the chosen name
The site wraps long named items \ truncates the display of the full name to a shorter
The site displays all columns on screen without a bottom scrollbar
Prerequisites: None

Test Data: Very long string for a computer name
Expected/Intended Results: For long single string names, the site displays all columns on screen without a bottom scrollbar
Actual Results: User is shown the full string for the computer name and the screen becomes very wide, requiring a long scrollbar. 
(Partial pass for other screen elements remaining in view, if this is better design that being off screen to the right)
- Test Status – Pass/Fail: Fail

### Test Case ID: #BB_QA_Test_0010
Test Scenario: Invalid URLs \ non-existing pages - are handled gracefully
Test Steps: (browsing only)
The user browses to 'http://computer-database.herokuapp.com/computers'
The user attempts to find the index page or the site from various possible files
 /index.htm
 /index.html
 /index.asp
 /index.cfm
 /index.jsp
 /default.htm
The site informs the user the page \ resource does not exist (with a graceful failure \ message)
The site does not redirect or otherwise display the invalid URL \ page
(exploratory testing - sniff for other pages or content delevery URLS to check)

Prerequisites: None

Test Data: None
Expected/Intended Results: User unable to view the index, or other pages listed in test steps 008a\b
Actual Results: User is shown a less friendly error for:
Action not found
For request 'GET /{pageName\path}'
- Test Status – Pass/Fail: Fail
