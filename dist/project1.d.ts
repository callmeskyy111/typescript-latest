type StudentType = {
    name: string;
    age: number;
    isEnrolled: boolean;
    courses: string[];
    scores: number[];
    info: [string, number, boolean];
};
declare const student1: StudentType;
declare function displayStudentInfo(student: StudentType): void;
