'use client';
import React from 'react';
import { motion } from 'framer-motion';

import Navbar from '../../components/Navbar';

export default function AboutPage() {
    const [isVisible, setIsVisible] = React.useState(false);

    React.useEffect(() => {
        setIsVisible(true);
    }, []);

    return (
        <div className="h-screen">
            <Navbar />
            <motion.div
                className="max-w-full max-h-full"
                initial={{ opacity: 0 }}
                animate={{ opacity: isVisible ? 1 : 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 2 }}
            >
                <div className="flex flex-col items-center justify-center absolute top-0 left-0 z-10 h-screen">
                    <div className="w-[500px] h-[500px] bg-gray-950">
                        
                    </div>
                </div>
            </motion.div>
        </div>
    )
}
