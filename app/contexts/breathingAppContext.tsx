'use client'

import React, { PropsWithChildren, useContext, useState } from "react";
import { BreathingAppContext, State } from "../utils/types";

const BreathingAppContext = React.createContext<BreathingAppContext>({
    state: {
        isModalOpened: false,
        inhaleTime: 3,
        apnea: "NONE",
        exerciseTime: 5,
    },
    setState: () => { }
});

export const BreathingAppContextProvider = (props: PropsWithChildren) => {
    const [state, setState] = useState<State>(
        {
            isModalOpened: false,
            inhaleTime: 3,
            apnea: "NONE",
            exerciseTime: 5,
        }
    );

    return (
        <BreathingAppContext.Provider value={{ state, setState }}>
            {props.children}
        </BreathingAppContext.Provider>
    );
};

export const useBreathingAppContext = () => useContext(BreathingAppContext);