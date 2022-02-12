#!/usr/bin/env node

import { greetings, getPlayerName, sayHello } from '../src/cli.js';
import playGcd from '../src/games/gcd.js';

greetings();
const playerName = getPlayerName();
sayHello(playerName);
playGcd(playerName);
