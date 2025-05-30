declare enum Direction {
    Up = 0,
    Down = 1,
    Left = 2,
    Right = 3
}
declare enum Role {
    User = 2,
    Admin = 3,
    SuperAdmin = 4
}
declare let dir: Direction;
declare const adminRole: Role;
declare enum Statuses {
    Success = "SUCCESS \u2705",
    Error = "ERROR \uD83D\uDD34",
    Pending = "PENDING \u23F3"
}
declare const res: Statuses;
declare const enum Size {
    Small = 0,
    Medium = 1,
    Large = 2
}
