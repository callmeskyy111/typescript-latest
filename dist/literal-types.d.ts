type Action = "start" | "pause" | "stop";
declare function handleAction(action: Action): void;
declare function logMsg(val: string | number): void;
