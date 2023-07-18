'use client'

import React, { useEffect, useState } from 'react';
import styles from "./FollowCursor.module.css"

const FollowCursor = () => {
    const [position, setPosition] = useState({ x: 0, y: 0 });

    const handleMouseMove = (event: any) => {
        setPosition({ x: event.clientX - 40, y: event.clientY - 40 });
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
            className={`follow-div bg-transparent absolute ${styles.blurCircle}`}
            style={{ left: position.x, top: position.y }}
        ></div>
    );
};

export default FollowCursor;
