
import './App.css'
import Demo from './Demo'
import {QueryClient , QueryClientProvider} from "@tanstack/react-query"

function App() {
 const queryClient = new QueryClient
return(
  <QueryClientProvider client={queryClient}>
    <Demo/>
  </QueryClientProvider>
  
)
  
}

export default App
