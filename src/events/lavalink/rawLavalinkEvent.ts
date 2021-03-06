import { Events } from '@lib/types/enums';
import { isDestroy, isTrackEndEvent, isTrackExceptionEvent, isTrackStuckEvent, isWebSocketClosedEvent, LavalinkEvent } from '@utils/LavalinkUtils';
import { Colors, Event, EventStore } from 'klasa';

export default class extends Event {

	private kHeader = new Colors({ text: 'magenta' }).format('[LAVALINK]');

	public constructor(store: EventStore, file: string[], directory: string) {
		super(store, file, directory, {
			emitter: store.client.lavalink,
			event: 'event'
		});
	}

	public run(payload: LavalinkEvent): boolean {
		if (typeof payload.guildId !== 'string') return;

		const handler = this.client.guilds.cache.get(payload.guildId)?.music || null;

		if (isTrackEndEvent(payload)) {
			return this.client.emit(Events.LavalinkEnd, handler, payload);
		}

		if (isTrackExceptionEvent(payload)) {
			return this.client.emit(Events.LavalinkException, handler, payload);
		}

		if (isTrackStuckEvent(payload)) {
			return this.client.emit(Events.LavalinkStuck, handler, payload);
		}

		if (isWebSocketClosedEvent(payload)) {
			return this.client.emit(Events.LavalinkWebsocketClosed, handler, payload);
		}

		if (isDestroy(payload)) {
			return this.client.emit(Events.LavalinkDestroy, handler, payload);
		}

		this.client.console.log(`Lavalink OP code not recognized: ${payload.op}`);
	}

}
