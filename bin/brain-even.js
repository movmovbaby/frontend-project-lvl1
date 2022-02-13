#!/usr/bin/env node

import playEven from '../src/games/even.js';
import { greetings, getPlayerName, sayHello } from '../src/cli.js';

greetings();
const playerName = getPlayerName();
sayHello(playerName);
playEven(playerName);
