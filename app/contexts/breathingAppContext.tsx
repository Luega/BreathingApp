'use client'

import React, { PropsWithChildren, useContext, useState } from "react";
import db from "../DB/db";
import { BreathingAppContext, State } from "../utils/types";

const BreathingAppContext = React.createContext<BreathingAppContext>({
    exercises: [],
    state: {
        isModalOpened: false,
        isAnimationStarted: false,
        exerciseTime: 0,
        inhaleTime: 0,
        name: "",
        inhale: 0,
        exhale: 0,
        inspiratoryApnea: 0,
        expiratoryApnea: 0,
    },
    setState: () => { },
});

export const BreathingAppContextProvider = (props: PropsWithChildren) => {
    const [state, setState] = useState<State>(
        {
            isModalOpened: false,
            isAnimationStarted: false,
            exerciseTime: 0,
            inhaleTime: 0,
            name: "",
            inhale: 0,
            exhale: 0,
            inspiratoryApnea: 0,
            expiratoryApnea: 0,
        }
    );

    const exercises = db;

    return (
        <BreathingAppContext.Provider value={{ exercises, state, setState }}>
            {props.children}
        </BreathingAppContext.Provider>
    );
};

export const useBreathingAppContext = () => useContext(BreathingAppContext);