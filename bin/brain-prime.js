#!/usr/bin/env node

import { greetings, getPlayerName, sayHello } from '../src/cli.js';
import playPrime from '../src/games/prime.js';

greetings();
const playerName = getPlayerName();
sayHello(playerName);
playPrime(playerName);
