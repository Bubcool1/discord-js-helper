import { Interaction } from 'discord.js';
import { SlashCommandOptions, SlashCommandParam, SlashCommand } from '../src/index.d';
import { SlashCommandParamType } from '../src';

const func = (interaction: Interaction, options: SlashCommandOptions) => {};
const func2 = (interaction: Interaction, options: SlashCommandOptions) => {
  return 'return_value';
};

const params: Array<SlashCommandParam> = [
  {
    name: 'string_param_1',
    required: true,
    type: SlashCommandParamType.string,
    description: 'string param desc 1',
  },
  {
    name: 'integer_param_1',
    required: false,
    type: SlashCommandParamType.integer,
    description: 'integer param desc 1',
  },
  {
    name: 'boolean_param_1',
    required: true,
    type: SlashCommandParamType.boolean,
    description: 'boolean param desc 1',
  },
];

const commands: Array<SlashCommand> = [
  {
    name: 'name 1',
    description: 'description 1',
    params: params,
    nsfw: true,
    function: func,
  },
  {
    name: 'name 2',
    description: 'description 2',
    params: params,
    nsfw: false,
    function: func2,
  },
];

export { func, func2, params, commands };
