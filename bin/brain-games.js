#!/usr/bin/env node

import { greetings, getPlayerName, sayHello } from '../src/cli.js';

greetings();
const playerName = getPlayerName();
sayHello(playerName);
