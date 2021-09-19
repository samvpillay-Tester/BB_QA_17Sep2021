### Resource references:
https://www.zaproxy.org/getting-started/
https://devcenter.heroku.com/articles/pentest-instructions
https://github.com/zaproxy/community-scripts

### Manually running scripts
Ensure ZAP Proxy has been installed before running any scripts
Example CLI for script execution:
cd "{pathToZedProxy}Zed Attack Proxy"
java -jar zap-2.10.0.jar -cmd -quickurl https://computer-database.herokuapp.com/computers -quickprogress -script "{pathToScript}\zap_proxy_xframe_header_not_set_test.ts"

### Automation
Some CI\CD pipelines have custom tasks for running, check for your provider, 
otherwise presume the use of a CMD task

### Side note
Removal of most of the site data can help reduce the run time here 
(but some data should be retained for testing)
Without API or data access, the UI_Automation can be used to iteratively clear down data
-Spec file: _dataPrepDeleteAllItems.ts
