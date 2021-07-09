
    import React from "react"
    import { Route } from "react-router-dom"
    import { Home } from "./Home"
    import { LocationProvider } from "./location/LocationProvider"
    import { LocationList } from "./location/LocationList"
    import { AnimalProvider } from "./animal/AnimalProvider"
    import { AnimalList } from "./animal/AnimalList"
    import { CustomerProvider } from "./customer/CustomerProvider"
    import { CustomerList } from "./customer/CustomerList"
    import { EmployeeProvider } from "./employee/EmployeeProvider"
    import { EmployeeList } from "./employee/EmployeeList"
    
    
    export const ApplicationViews = () => {
        return (
            <>
               
                <Route exact path="/">
                    <Home />
                </Route>
                
                <Route path="/locations">
                    <LocationProvider>
                      <LocationList />
                    </LocationProvider>
                </Route>

                <Route exact path="/animals">
                <AnimalProvider>
                  
                       <Route exact path="/animals/create">
                                <AnimalList />
                       </Route>
              
                </AnimalProvider>
                </Route>

                <Route path="/customers">
                    <CustomerProvider>
                         <CustomerList />
                    </CustomerProvider>
                </Route>

                <Route path="/employees">
                  <EmployeeProvider>
                      <EmployeeList />
                  </EmployeeProvider>
                </Route>
            </>
        )
    }