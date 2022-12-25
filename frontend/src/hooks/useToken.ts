import { useState } from "react";

export default function useToken(): [
  string | null,
  (newToken: string) => void
] {
  const [token, setTokenInternal] = useState(() => {
    return localStorage.getItem("token");
  });
  const setToken = (newToken: string) => {
    localStorage.setItem("token", newToken);
    setTokenInternal(newToken);
  };
  return [token, setToken];
}
