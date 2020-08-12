import { SteveCommand } from '@lib/structures/commands/SteveCommand';
import { CommandStore, KlasaMessage } from 'klasa';
import { Message } from 'discord.js';
import { PermissionLevels } from '@lib/types/enums';
import { ScheduledTask } from 'klasa';

export default class extends SteveCommand {

	public constructor(store: CommandStore, file: string[], directory: string) {
		super(store, file, directory, {
			description: 'Sets the channel that reports will be sent to',
			extendedHelp: 'Only do this once or you will break things',
			requiredPermissions: PermissionLevels.OWNER
		});
	}

	public async run(msg: KlasaMessage): Promise<Message> {
		const reports :ScheduledTask[] = this.client.schedule.tasks.filter(task => task.taskName == 'report' && msg.guild.channels.cache.has(task.data.channel));
		if(reports.length > 0) {
			msg.channel.send('Moving report channel...');
			reports.forEach(rep => rep.delete()) ;
		}

		this.client.schedule.create('report','0 4 * * SAT', {data: { channel: msg.channel.id }});
		return msg.channel.send('Setting this channel as where reports will be automaticly sent.');
	}

}
