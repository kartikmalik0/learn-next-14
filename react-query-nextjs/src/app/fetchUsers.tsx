export async function fetchUsers() {
    try {
      const res = await fetch("https://jsonplaceholder.typicode.com/posts");
      return await res.json()
    } catch (err: any) {
      throw err.response.data
    }
  }
