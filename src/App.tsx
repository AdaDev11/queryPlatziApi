import PrimarySearchAppBar from "./components/PrimarySearchAppBar.tsx";
import ImgMediaCard from "./components/SimpleContainer.tsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

function App() {
    return (
        <QueryClientProvider client={queryClient}>
            <PrimarySearchAppBar />
            <ImgMediaCard />
        </QueryClientProvider>
    );
}

export default App;
