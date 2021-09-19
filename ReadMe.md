# BB QA Test Solution
NOTE: Normally multiple projects would not be in the same repo 
barring a mono repo; but this is a test solution

## 1.Manual_Test_Cases
Manual test case details following requirements 1#, please refer to:
./1.Manual_Test_Cases/ReadMe.md

## 2.UI_Automation
Original UI_Automation carried out in Cypress 
along with manual test case details 
following requirements 1# & #2, please refer to:
./2.UI_Automation/ReadMe.md

### Liberty has been taken with the generous criteria of
### Create test cases that cover the CRUD operations plus any identified edge cases
### Type of manual and automated testing ha not been specificed
### If only UI manual and automated was only required, feel free to ingore the below as interesting L&D

## 3.API_Automation
Postman based API testing 
(Newman CLI script not added \ not available on this box for me to test)
Two environment files, one for secure requests, one for insecure 
(rather than deployment environment related)

## 4.Performance_Testing
CAUTION: As noted in the ReadMe.md, there are caveats to running these scripts
Care must be taken, with the possibility to bring the application down

## 5.Security_Testing
ZAP Proxy based script(s) for any identified medium and high level alerts for re-testing
May be more suitable for overnight security checks, as the active scan can take a while
Issues manually identified via the ZAP proxy IDE
-NOTE: Low alerts not currently scripted for
