#!/usr/bin/env node

import playIsEven from '../src/isEven.js';
import { greetings, getPlayerName, sayHello } from '../src/cli.js';

greetings();
const playerName = getPlayerName();
sayHello(playerName);
playIsEven(playerName);
