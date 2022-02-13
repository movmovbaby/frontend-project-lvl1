#!/usr/bin/env node

import { greetings, getPlayerName, sayHello } from '../src/cli.js';
import playProgression from '../src/games/progression.js';

greetings();
const playerName = getPlayerName();
sayHello(playerName);
playProgression(playerName);
