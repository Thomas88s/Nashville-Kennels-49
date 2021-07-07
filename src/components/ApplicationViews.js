
    import React from "react"
    import { Route } from "react-router-dom"
    import { Home } from "./Home"
    import { LocationCard } from "./location/LocationCard"
    import { AnimalCard } from "./animal/AnimalCard"
    import { CustomerCard } from "./customer/CustomerCard"
    import { EmployeeCard } from "./employee/EmployeeCard"
    
    export const ApplicationViews = () => {
        return (
            <>
               
                <Route exact path="/">
                    <Home />
                </Route>
                <Route path="/locations">
                    <LocationCard />
                </Route>
                <Route path="/animals">
                    <AnimalCard />
                </Route>
                <Route path="/customers">
                    <CustomerCard />
                </Route>
                <Route path="/employees">
                    <EmployeeCard />
                </Route>
            </>
        )
    }