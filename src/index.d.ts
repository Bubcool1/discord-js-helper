import {
  Guild,
  Interaction,
  SlashCommandBuilder,
  SlashCommandStringOption,
  SlashCommandIntegerOption,
  SlashCommandBooleanOption,
} from 'discord.js';

export * from './build/build.d';
export * from './register/register.d';

export type SlashCommandOptions = {
  [key: string]: string | number | boolean | null;
};

export interface SlashCommandHandler {
  interaction: Interaction;
  options: SlashCommandOptions;
}

export type SlashCommand = {
  name: string;
  description: string;
  params: Array<SlashCommandParam>;
  nsfw: boolean;
  function: Function;
};

export enum SlashCommandParamType {
  string,
  integer,
  boolean,
}

export type SlashCommandParam = {
  name: string;
  required: boolean;
  type: SlashCommandParamType;
  description: string;
};

export type CommandHandler = (interaction: Interaction, options: SlashCommandOptions) => void;
