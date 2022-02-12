#!/usr/bin/env node

import { greetings, getPlayerName, sayHello } from '../src/cli.js';
import playCalc from '../src/games/calc.js';

greetings();
const playerName = getPlayerName();
sayHello(playerName);
playCalc(playerName);
