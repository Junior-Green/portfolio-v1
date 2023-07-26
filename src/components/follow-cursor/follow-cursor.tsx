'use client'

import React, { useEffect, useState } from 'react';
import styles from "./FollowCursor.module.css"

const FollowCursor = () => {
    const [position, setPosition] = useState({ x: 0, y: 0 });

    const handleMouseMove = (event: any) => {
        setPosition({ x: event.clientX, y: event.clientY + window.scrollY });
    };

    useEffect(() => {
        const interval = setInterval(() => {
            document.addEventListener('mousemove', handleMouseMove);
        }, 500);

        return () => {
            clearInterval(interval);
            document.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

    return (
        <div
            className={`bg-theme-blue absolute ${styles.blurCircle} w-1 h-1 bg-opacity-0 pointer-events-none sm:opacity-0 md:opacity-100`}
            style={{ left: position.x, top: position.y }}
        />
    );
};

export default FollowCursor;
