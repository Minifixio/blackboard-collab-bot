import { Command } from './Command';

export interface Bot {
    name: string;
    url: string;
    commands: Command[];
}