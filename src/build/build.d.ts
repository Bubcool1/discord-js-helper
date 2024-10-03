import { CommandHandler, SlashCommandParam, SlashCommand, SlashCommandParamType } from '../index.d';

export function buildSlashCommand(
  name: string,
  description: string,
  func: CommandHandler,
  params: Array<SlashCommandParam> = [],
  nsfw: boolean = false,
): SlashCommand;

export function buildSlashParameter(
  name: string,
  required: boolean,
  type: SlashCommandParamType,
  description: string,
): SlashCommandParam;
