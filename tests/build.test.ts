import { describe, it, expect, jest } from '@jest/globals';
import { buildSlashCommand } from '../src';
import { Interaction, ChatInputCommandInteraction } from 'discord.js';
import { commands } from './constants';

describe('buildSlashCommand', () => {
  const chatInputCommandInteractionMock = jest.mocked(ChatInputCommandInteraction);
  const interactionMock = chatInputCommandInteractionMock as unknown as Interaction;

  it.each([commands])('Build Slash Command function returns correct object', (command) => {
    const newCommand = buildSlashCommand(
      command.name,
      command.description,
      command.function,
      command.params,
      command.nsfw,
    );
    expect(newCommand).toStrictEqual(command);
  });

  it.each([
    [commands[0], undefined],
    [commands[1], 'return_value'],
  ])('Slash Command function returns correct value', (command, returnValue) => {
    const newCommand = buildSlashCommand(
      command.name,
      command.description,
      command.function,
      command.params,
      command.nsfw,
    );

    const value = newCommand.function(interactionMock, {});

    expect(newCommand.function).toBe(command.function);
    expect(value).toBe(returnValue);
  });
});
