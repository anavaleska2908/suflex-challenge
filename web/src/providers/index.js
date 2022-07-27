import { HomePageProvider } from "./HomePage";

export const Providers = ({children}) => {
    return (
        <HomePageProvider>{children}</HomePageProvider>
    )
}