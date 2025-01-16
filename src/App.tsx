import { useState } from "react";
import PrimarySearchAppBar from "./components/PrimarySearchAppBar.tsx";
import ImgMediaCard from "./components/SimpleContainer.tsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

function App() {
    const [count, setCount] = useState(0);

    return (
        <QueryClientProvider client={queryClient}>
            <PrimarySearchAppBar />
            <ImgMediaCard />
        </QueryClientProvider>
    );
}

export default App;
