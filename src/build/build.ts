import { SlashCommandParamType } from '..';
import { SlashCommand, SlashCommandParam, CommandHandler } from '../index.d';

export function buildSlashCommand(
  name: string,
  description: string,
  func: CommandHandler,
  params: Array<SlashCommandParam> = [],
  nsfw: boolean = false,
): SlashCommand {
  return {
    name: name,
    description: description,
    params: params,
    nsfw: nsfw,
    function: func,
  };
}

export function buildSlashParameter(
  name: string,
  required: boolean,
  type: SlashCommandParamType,
  description: string,
): SlashCommandParam {
  return {
    name: name,
    required: required,
    type: type,
    description: description,
  };
}
