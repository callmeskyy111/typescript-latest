//todo: project6 (Generic API Response Handler);

interface ApiResp<T> {
  success: boolean;
  data: T;
}

function HandleApiResponse<T>(response: ApiResp<T>) {
  if (!response.success) {
    throw new Error("API Error 🔴");
  }
  response.data;
}

const blogP = HandleApiResponse<{
  title: string;
  content: string;
  date: string;
}>({
  success: true,
  data: {
    title: "Blog Post 1",
    content: "Generics are useful in TS",
    date: "30-05-2025",
  },
});
