'use client'

import React, { PropsWithChildren, useContext, useState } from "react";
import { BreathingAppContext, State } from "../utils/types";

const BreathingAppContext = React.createContext<BreathingAppContext>({
    state: {
        isModalOpened: false,
        exerciseName: "custom",
        inhaleTime: 4,
        inspiratoryApnea: false,
        expiratoryApnea: false,
        exerciseTime: 0,
    },
    setState: () => { }
});

export const BreathingAppContextProvider = (props: PropsWithChildren) => {
    const [state, setState] = useState<State>(
        {
            isModalOpened: false,
            exerciseName: "custom",
            inhaleTime: 4,
            inspiratoryApnea: false,
            expiratoryApnea: false,
            exerciseTime: 0,
        }
    );

    return (
        <BreathingAppContext.Provider value={{ state, setState }}>
            {props.children}
        </BreathingAppContext.Provider>
    );
};

export const useBreathingAppContext = () => useContext(BreathingAppContext);