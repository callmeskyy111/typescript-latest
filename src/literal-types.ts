// literal-types : fixed-values

type Action = "start" | "pause" | "stop";

function handleAction(action: Action) {
  console.log(`Your action is: ${action} ☑️`);
}

// handleAction("start");
// handleAction("pause");
// handleAction("stop");

// Type Narrowing: from General To Specific Type
function logMsg(val: string | number) {
  if (typeof val === "string") {
    console.log(val.toUpperCase());
  } else {
    console.log(val.toFixed(2));
  }
}

logMsg('I am Skyy');
logMsg(1234);
