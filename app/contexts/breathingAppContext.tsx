'use client'

import React, { PropsWithChildren, useContext, useEffect, useState } from "react";
import { BreathingAppContext, State } from "../utils/types";

const BreathingAppContext = React.createContext<BreathingAppContext>({
    exercises: [],
    state: {
        isModalOpened: false,
        isAnimationStarted: false,
        exerciseTime: 0,
        inhaleTime: 3,
        name: "",
        exhale: 0,
        inspiratoryApnea: 0,
        expiratoryApnea: 0,
    },
    setState: () => { },
});

export const BreathingAppContextProvider = (props: PropsWithChildren) => {
    const [exercises, setExercises] = useState([]);
    const [state, setState] = useState<State>(
        {
            isModalOpened: false,
            isAnimationStarted: false,
            exerciseTime: 0,
            inhaleTime: 3,
            name: "",
            exhale: 0,
            inspiratoryApnea: 0,
            expiratoryApnea: 0,
        }
    );

    useEffect(() => {
        fetch(process.env.NEXT_PUBLIC_API_URL!)
            .then((response) => response.json())
            .then((result) => {
                setExercises(result); console.log(result);
            })
            .catch((error) => console.error(error));
    }, []);

    return (
        <BreathingAppContext.Provider value={{ exercises, state, setState }}>
            {props.children}
        </BreathingAppContext.Provider>
    );
};

export const useBreathingAppContext = () => useContext(BreathingAppContext);