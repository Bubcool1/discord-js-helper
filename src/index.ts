export { reloadSlashCommands } from './register/register';
export { buildSlashCommand, buildSlashParameter } from './build/build';

export enum SlashCommandParamType {
  string = 3,
  boolean = 5,
  integer = 10,
}
