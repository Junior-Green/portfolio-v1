'use client'
import type { Engine } from "tsparticles-engine";
import Particles from "react-tsparticles"
import { particlesConfig } from "./particles-config"
import { useCallback, useEffect, useState } from "react";
import { loadSlim } from "tsparticles-slim";

export const ParticlesBackground = () => {
    const [domLoaded, setDomLoaded] = useState(false);

    useEffect(() => {
        setDomLoaded(true)
    }, []);

    const particlesInit = useCallback(async (engine: Engine) => {
        console.log(engine);
        await loadSlim(engine)
    }, []);

    const particlesLoaded = useCallback(async (container: any) => {
        console.log(container);
    }, []);

    return (
        <>
            {domLoaded && <Particles init={particlesInit} loaded={particlesLoaded} options={particlesConfig} />}
        </>
    )
} 