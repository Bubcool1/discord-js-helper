# Discord JS Helper

Helper package to make creating slash commands using [Discord.JS](https://github.com/discordjs/discord.js) easier

## Usage

For an example repo please see [Glossary Bot](https://github.com/Bubcool1/Glossary-bot)

Install using `npm i @bubcool1/discord-js-helper`

Then create your commands array

```typescript
const commandHandler: CommandHandler = async (interaction: Interaction, options: SlashCommandOptions) => {
  if (!interaction.isCommand()) {
    return;
  }

  await interaction.reply(`Command Received!`);
};

const slashCommand = buildSlashCommand('commandName', 'Command Description', commandHandler);

const commands: Array<SlashCommand> = [slashCommand];
```

Then use `reloadSlashCommands` to automagically register/re-register your slash commands

```typescript
import { Events, Interaction } from 'discord.js';
import { reloadSlashCommands } from '@bubcool1/discord-js-helper';

client.on(Events.MessageCreate, async (interaction: Interaction) => {
  if (interaction.content === `<@${client.user?.id}> register` && !interaction.author.bot) {
    if (interaction.guild) {
      await reloadSlashCommands(interaction.guild, commands);
      await interaction.reply('Commands Registered!');
    }
  }
});
```
