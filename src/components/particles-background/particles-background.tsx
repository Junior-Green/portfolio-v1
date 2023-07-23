'use client'
import type { Engine } from "tsparticles-engine";
import Particles from "react-tsparticles"
import { particlesConfig } from "./particles-config"
import { useCallback, useEffect, useState } from "react";
import { loadSlim } from "tsparticles-slim";

interface ParticlesBackground {
    onLoad: () => void
}

export const ParticlesBackground = ({ onLoad }: ParticlesBackground) => {
    const [domLoaded, setDomLoaded] = useState(false);

    useEffect(() => {
        setDomLoaded(true)
    }, []);

    const particlesInit = useCallback(async (engine: Engine) => {
        console.log(engine);
        await loadSlim(engine)
        onLoad()
    }, [onLoad]);

    const particlesLoaded = useCallback(async (container: any) => {
        console.log(container);
    }, []);

    return (
        <>
            {domLoaded && <Particles init={particlesInit} loaded={particlesLoaded} options={particlesConfig} />}
        </>
    )
} 