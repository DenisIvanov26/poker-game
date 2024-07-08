'use client';

import React, { useContext, useState } from 'react';
import { AppContext } from '../contexts/AppStoreProvider';
import { Pot as PotType } from '../interfaces';

const initialPot: PotType[] = [
    {
        topShare: 0,
        amount: 0,
        eligiblePlayerNums: [],
        winningPlayerNums: [],
        winningHand: [],
        winningScore: 0,
    },
];

const Pot = () => {
    const { appState } = useContext(AppContext);
    const game = appState.game;
    const [stage, setStage] = useState(game?.stage);
    const [pots, setPots] = useState(initialPot);

    if (!game || !game.pots) {
        return null;
    }

    if (game.stage != stage) {
        setStage(game.stage);

        if (game.stage == 2) {
            setPots(initialPot);
        } else {
            setPots(game.pots);
        }
    }

    return (
        <div>
            {pots.map((pot, index) => (
                <div className="flex flex-col" key={index}>
                    <div className="flex w-full justify-end">
                        {game.pots[index] &&
                        game.pots[index].amount != pot.amount ? (
                            <p className="text-sm font-normal text-white">
                                total: {game.pots[index].amount}
                            </p>
                        ) : (
                            <p className="text-sm font-normal text-white">
                                &nbsp;
                            </p>
                        )}
                    </div>
                    <p className="flex h-10 w-24 flex-col items-center justify-center rounded-3xl bg-green-900 text-2xl font-semibold text-white ">
                        {pot.amount}
                    </p>
                </div>
            ))}
        </div>
    );
};

export default Pot;
