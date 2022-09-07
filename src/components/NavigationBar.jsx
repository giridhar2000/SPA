import { AuthenticatedTemplate, UnauthenticatedTemplate, useMsal } from "@azure/msal-react";

import { Nav, Navbar, Button, Dropdown, DropdownButton} from "react-bootstrap";

import { loginRequest, b2cPolicies } from "../authConfig";

export const NavigationBar = () => {

    const { instance } = useMsal();

    const handleLogin = () => {
        instance.loginPopup(loginRequest)
            .catch((error) => console.log(error))
    }
    /**
     * Most applications will need to conditionally render certain components based on whether a user is signed in or not. 
     * msal-react provides 2 easy ways to do this. AuthenticatedTemplate and UnauthenticatedTemplate components will 
     * only render their children if a user is authenticated or unauthenticated, respectively.
     */
    return (
        <>
            <Navbar bg="primary" variant="dark" style={{backgroundColor: "white"}}>
            
                <AuthenticatedTemplate>
                    <Nav.Link as={Button} href="/hello">HelloAPI</Nav.Link>
                    <div className="ml-auto">
                        <Button variant="info" onClick={() => instance.loginPopup(b2cPolicies.authorities.editProfile)} className="ml-auto mr-2">Edit Profile</Button>
                        <Button variant="info" onClick={() => instance.logoutPopup({ postLogoutRedirectUri: "/", mainWindowRedirectUri: "/" })} className="ml-auto">Sign out</Button>
                    </div>
                </AuthenticatedTemplate>
                <UnauthenticatedTemplate>
                    <Button variant="info" onClick={handleLogin} className="ml-auto">Sign in</Button>
                </UnauthenticatedTemplate>
            </Navbar>
        </>
    );
};