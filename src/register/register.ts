import { Guild, SlashCommandBuilder } from 'discord.js';
import * as types from '../index.d';

async function reloadSlashCommands(guild: Guild, commands: Array<types.SlashCommand>): Promise<void> {
  const existingCommands = await guild.commands.fetch();

  await Promise.all(existingCommands.map((cmd) => cmd.delete()));

  const newCommands: Array<SlashCommandBuilder> = [];

  commands.forEach(async (command) => {
    const newCommand = new SlashCommandBuilder()
      .setName(command.name)
      .setDescription(command.description)
      .setNSFW(command.nsfw);

    command.params.forEach((param) => buildSlashParam(newCommand, param));

    newCommands.push(newCommand);
  });

  await Promise.all(newCommands.map((cmd) => guild.commands.create(cmd)));
}

function buildSlashParam(command: SlashCommandBuilder, param: types.SlashCommandParam): void {
  switch (param.type) {
    case types.SlashCommandParamType.string:
      command.addStringOption((opt) => {
        opt.setName(param.name);
        opt.setRequired(param.required);
        if (param.description) {
          opt.setDescription(param.description);
        }
        return opt;
      });
    case types.SlashCommandParamType.integer:
      command.addIntegerOption((opt) => {
        opt.setName(param.name);
        opt.setRequired(param.required);
        if (param.description) {
          opt.setDescription(param.description);
        }
        return opt;
      });
    case types.SlashCommandParamType.boolean:
      command.addBooleanOption((opt) => {
        opt.setName(param.name);
        opt.setRequired(param.required);
        if (param.description) {
          opt.setDescription(param.description);
        }
        return opt;
      });
    default:
      throw new Error('Type not yet implemented.');
  }
}

export default reloadSlashCommands;
