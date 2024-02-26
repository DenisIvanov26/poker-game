import React, { useState } from 'react';
import { Button, Spinner, useDisclosure, Text } from '@chakra-ui/react';
import TakeSeatModal from './TakeSeatModal';
import { motion } from 'framer-motion';

const MotionButton = motion(Button);

const EmptySeatButton = () => {
    const [isHovered, setIsHovered] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const { isOpen, onOpen, onClose } = useDisclosure();

    return (
        <>
            <MotionButton
                width="100%"
                h="80%"
                bgColor="transparent"
                onClick={onOpen}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                isLoading={isLoading}
                textColor="white"
                borderRadius={10}
                spinner={<Spinner color="green.100" size="lg" />}
                border="2px dashed white"
                fontSize={['3xl', '5xl', '7xl']}
                fontFamily="sans-serif"
                _hover={{ bg: 'transparent' }}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
            >
                {isHovered ? (
                    <Text
                        color="white"
                        fontFamily="Pacifico, cursive"
                        opacity="0.7"
                    >
                        Sit
                    </Text>
                ) : (
                    ''
                )}
            </MotionButton>
            <TakeSeatModal isOpen={isOpen} onClose={onClose} />
        </>
    );
};

export default EmptySeatButton;
