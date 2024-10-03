import { Guild } from 'discord.js';
import { SlashCommand } from '../index.d';

export function reloadSlashCommands(guild: Guild, commands: Array<SlashCommand>): Promise<void>;
