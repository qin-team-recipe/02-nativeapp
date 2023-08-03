export const fetcher = async (input: RequestInfo, init?: RequestInit) => {
  const res = await fetch(input, {
    headers: {
      "Content-Type": "application/json",
    },
    ...init,
  })
  return res.json()
}
