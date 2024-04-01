"use client"
import { QueryClient, useQuery } from "@tanstack/react-query";
import { fetchUsers } from "./fetchUsers";


const Home = () => {
  const queryClient = new QueryClient();
  const { isLoading, error, data } = useQuery(
    {
      queryKey:["users"],
      queryFn:fetchUsers,
    }
  );

  return (
    <div>
      {isLoading && <div>Loading...</div>}
      {error && <div>Error: {error.message}</div>}
      {data && (
        <ul>
          {data.map((user:any) => (
            <li key={user?.title}>{user.title}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Home;