
    import React, { useState, createContext } from "react"
    import { apiUrl } from "../Kennel.js"

    // The context is imported and used by individual components that need data
    export const EmployeeContext = createContext()
    
    // This component establishes what data can be used.
    export const EmployeeProvider = (props) => {
        const [employees, setEmployees] = useState([])
    
        const getEmployees = () => {
            return fetch(`${apiUrl}employees?_expand=location`)
            .then(res => res.json())
            .then(setEmployees)
        }
    
        const addEmployee = employee => {
            return fetch(`${apiUrl}employees`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(employee)
            })
            .then(response => response.json())
        }
    
      
        return (
            <EmployeeContext.Provider value={{
                employees, getEmployees, addEmployee
            }}>
                {props.children}
            </EmployeeContext.Provider>
        )
    }