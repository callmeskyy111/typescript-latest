"use strict";
// literal-types : fixed-values
function handleAction(action) {
    console.log(`Your action is: ${action} ☑️`);
}
// handleAction("start");
// handleAction("pause");
// handleAction("stop");
// Type Narrowing: from General To Specific Type
function logMsg(val) {
    if (typeof val === "string") {
        console.log(val.toUpperCase());
    }
    else {
        console.log(val.toFixed(2));
    }
}
logMsg('I am Skyy');
logMsg(1234);
