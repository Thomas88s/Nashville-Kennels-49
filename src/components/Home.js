
    import React from "react";
    import { PropsAndState } from './PropsAndState'
    
    export const Home = () => (
        <>
            <h2>Nashville Kennels</h2>
            <small>Loving care when you're not there.</small>
    
            <address>
                <div>Visit Us at One of Our Nashville Locations</div>
                <div>500 Puppy Way</div>
            </address>
            <PropsAndState yourName={"Brenda"} />
        </>
    )