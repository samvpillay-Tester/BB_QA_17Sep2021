// X-Frame Header not set - checker

// Based on - Multiple Security Header checker by freakyclown@gmail.com
// https://github.com/zaproxy/community-scripts/blob/ee5773b88da540b34ebad14210bf0981693442aa/passive/Mutliple%20Security%20Header%20Check.js
// Script probably needs further work, but seems to return the alert of interest: <alert>X-Frame-Options Header Not Set</alert>

// Ensure ZAP Proxy has been installed before running any scripts
// Example CLI for script execution:
cd "{pathToZedProxy}Zed Attack Proxy"
java -jar zap-2.10.0.jar -cmd -quickurl https://computer-database.herokuapp.com/computers -quickprogress -script "{pathToScript}\Mutliple Security Header Check.js"

export function scan(ps: any, msg: any) {
    var url = msg.getRequestHeader().getURI().toString();
    var responseHeader = msg.getResponseHeader().toString();
    var alertRisk = [0, 1, 2, 3]; //0=informational, 1=low, 2=medium, 3=high
    var alertConfidence = [0, 1, 2, 3, 4]; //0=fp,1=low,2=medium,3=high,4=confirmed
    var alertTitle = "X-Frame-Options Header Not Set (script)";
    var alertDesc = "X-Frame-Options header is not included in the HTTP response to protect against 'ClickJacking' attacks.";
    var alertSolutionSupport = "Most modern Web browsers support the X-Frame-Options HTTP header."; 
    var alertSolutionReq = "Ensure it's set on all web pages returned by your site .";
    var alertSolutionOpt1 = "(if you expect the page to be framed only by pages on your server (e.g. it's part of a FRAMESET) then you'll want to use SAMEORIGIN";
    var alertSolutionOpt2 = "otherwise if you never expect the page to be framed, you should use DENY.";
    var alertSolutionExtra = "ALLOW-FROM allows specific websites to frame the web page in supported web browsers).";
    const alertSolution = `${alertSolutionSupport} ${alertSolutionReq} ${alertSolutionOpt1} ${alertSolutionOpt2} ${alertSolutionExtra}`;
    var cweId = [0, 1];
    var wascId = [0, 1];
    
    // test xcontent no sniff protection
    var re_clickjack = /(X\-Frame\-Options\:.+[Dd][Ee][Nn][Yy])/g
    if (!(re_clickjack.test(responseHeader))) //if its false
    {
        ps.raiseAlert(alertRisk[1], alertConfidence[3], alertTitle, alertDesc, url, '', '', '', alertSolution, '', cweId[0], wascId[0], msg)
    }
}

export function hasAnyHeader(header, headers) {
    for (var i in headers) {
        if (header.getHeader(headers[i])) {
            return true
        }
    }
    return false
}
