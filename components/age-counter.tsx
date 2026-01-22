"use client";

import { useEffect, useState } from "react";

export function AgeCounter() {
    const [age, setAge] = useState<string>("21.000000000");

    useEffect(() => {
        // Using June 19, 2004 as a base for being 21 in 2026
        const birthDate = new Date("2005-01-06T00:00:00");

        const updateAge = () => {
            const now = new Date();
            const diff = now.getTime() - birthDate.getTime();
            const ageInYears = diff / (1000 * 60 * 60 * 24 * 365.2425);
            setAge(ageInYears.toFixed(9));
        };

        const interval = setInterval(updateAge, 10);
        updateAge();

        return () => clearInterval(interval);
    }, []);

    return <span className="font-mono tabular-nums text-zinc-100">{age}</span>;
}
