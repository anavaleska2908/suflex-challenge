import { HomePageProvider } from "./HomePage";
import { LoginPageProvider } from "./LoginPage";
import { DashboardPageProvider } from "./DashboardPage";
import { SignupPageProvider } from "./SignupPage";

export const Providers = ({children}) => {
    return (
        <SignupPageProvider>
            <LoginPageProvider>
                <DashboardPageProvider>                
                    <HomePageProvider>
                        { children }
                    </HomePageProvider>
                </DashboardPageProvider>
        </LoginPageProvider>
        </SignupPageProvider>
        
    )
}