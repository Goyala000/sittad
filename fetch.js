import { API_URL } from "./config/index";

export default async function fetchNews() {
  const data = await fetch(`${API_URL}/api/news`);
  return data;
}
