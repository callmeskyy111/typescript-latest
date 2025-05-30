"use strict";
//todo: project6 (Generic API Response Handler);
function HandleApiResponse(response) {
    if (!response.success) {
        throw new Error("API Error 🔴");
    }
    response.data;
}
const blogP = HandleApiResponse({
    success: true,
    data: {
        title: "Blog Post 1",
        content: "Generics are useful in TS",
        date: "30-05-2025",
    },
});
