'use client';

import { Box, Flex } from '@chakra-ui/react';
import HomeCard from '@/app/components/HomeCard';
import { AppContext } from '@/app/contexts/AppStoreProvider';
import { useRouter } from 'next/navigation';
import { useSocket } from '@/app/contexts/WebSocketProvider';
import { useContext } from 'react';

const randomImageNumber = Math.floor(Math.random() * 5) + 1;
const bgImage = `./tiles/tile${randomImageNumber}.png`;

const HomePage: React.FC = () => {
    const router = useRouter();
    const socket = useSocket();
    const { appState } = useContext(AppContext);

    if (appState.table !== null && socket) {
        router.push(`/game/${appState.table}`);
    }

    return (
        <Flex w="100vw" h="100vh">
            {/* Left Container */}
            <Box
                width="33%"
                height="100%"
                overflow="hidden"
                backgroundImage={`url('${bgImage}')`}
                backgroundRepeat="repeat"
                backgroundSize="300px"
                position="relative"
            >
                <HomeCard />
            </Box>

            {/* Right Container */}
            <Box width="67%" height="100%" overflowY="auto">
                {/* Your content here */}
            </Box>
        </Flex>
    );
};

export default function Home() {
    return (
        <main>
            <HomePage />
        </main>
    );
}
