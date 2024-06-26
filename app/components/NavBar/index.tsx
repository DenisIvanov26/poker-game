'use client';
import React from 'react';
import { HStack, Flex, IconButton, useDisclosure } from '@chakra-ui/react';
import { FiSettings, FiMessageSquare } from 'react-icons/fi';
import Web3Button from '../Web3Button';
import SettingsModal from './Settings/SettingsModal';
import SideBarChat from './Chat/SideBarChat';
const Navbar = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const { isOpen: isOpenChat, onToggle: onToggleChat } = useDisclosure();

    return (
        <>
            <Flex
                as="nav"
                align="center"
                justify="space-between"
                wrap="wrap"
                padding="1rem"
                bg="gray.200"
                color="white"
                zIndex={10}
            >
                <IconButton
                    icon={<FiSettings size={32} />}
                    aria-label="Settings"
                    size={'lg'}
                    onClick={onOpen}
                />
                <HStack ml="auto" gap={6} alignItems="center">
                    <Web3Button />
                    <IconButton
                        icon={<FiMessageSquare size={32} />}
                        aria-label="Chat"
                        size={'lg'}
                        onClick={onToggleChat}
                        marginRight="4"
                    />
                </HStack>

                <SettingsModal isOpen={isOpen} onClose={onClose} />
            </Flex>
            <SideBarChat isOpen={isOpenChat} onToggle={onToggleChat} />
        </>
    );
};

export default Navbar;
