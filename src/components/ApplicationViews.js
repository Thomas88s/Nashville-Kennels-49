
    import React from "react"
    import { Route } from "react-router-dom"
    import { Home } from "./Home"
    import { LocationCard } from "./location/LocationCard"
    import { AnimalCard } from "./animal/AnimalCard"
    import { AnimalProvider } from "./animal/AnimalProvider"
    import { AnimalList } from "./animal/AnimalList"
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

                <AnimalProvider>
                <Route exact path="/animals">
                     <AnimalList />
                        </Route>
                </AnimalProvider>
                <Route path="/customers">
                    <CustomerCard />
                </Route>
                <Route path="/employees">
                    <EmployeeCard />
                </Route>
            </>
        )
    }