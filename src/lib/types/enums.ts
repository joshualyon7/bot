export const enum Colors {
	BrightBlue = 0x346eeb,
	BrightGreen = 0x6eeb34,
	GoogleYellow = 0xf4b400,
	MidnightGreen = 0x004953,
	Orange = 0xd67f22,
	Pink = 0xfc0ce8,
	Purple = 0xb942f4,
	Red = 0xe83535,
	RedOrange = 0xf49e42,
	SpaceXBlue = 0x005288,
	SteveFireBlue = 0x71adcf,
	Turquoise = 0x61e3f9,
	Yellow = 0xffd944,
	YellowGreen = 0xadcb27,
	YoutubeRed = 0xff0000
}

export const enum Emojis {
	Check = '✅',
	RedX = '❌',
	Empty = '⛔',
	Skip = '⏭️',
	Plus = '<:plus:746221362103713854>',
	Minus = '<:minus:746221413727469619>',
	StevePeace = '<:stevepeace:746223639770431578>',
	SteveFaceLight = '<:facelightblue:746225859949756426>',
	SteveFaceDark = '<:facedarkblue:746226114300477540>'
}

export const enum Events {
	LavalinkEnd = 'lavalinkEnd',
	LavalinkException = 'lavalinkException',
	LavalinkDestroy = 'lavalinkDestroy',
	LavalinkStuck = 'lavalinkStuck',
	LavalinkWebsocketClosed = 'lavalinkWebsocketClosed',
	ModerationCaseAdd = 'moderationCaseAdd',
	MusicConnect = 'musicConnect',
	MusicLeave = 'musicLeave',
	MusicSongPlay = 'musicSongPlay',
	MusicSongPause = 'musicSongPause',
	MusicSongResume = 'musicSongResume',
	MusicSongSkip = 'musicSongSkip',
	MusicSongSkipVote = 'musicSongSkipVote',
	MusicSongStop = 'musicSongStop',
	MusicSongFinish = 'musicSongFinish',
	MusicQueueClear = 'musicQueueClear',
	MusicQueueShuffle = 'musicQueueShuffle',
	MusicReplayUpdate = 'musicReplayUpdate',
	MusicSongReplay = 'musicSongReplay',
	MusicSongSeek = 'musicSongSeek',
	MusicVolumeChange = 'musicVolumeChange'
}

export const enum Markdown {
	ITALICS = '`*text*`',
	BOLD = '`**text**`',
	UNDERLINE = '`__text__`',
	STRIKEOUT = '`~~text~~`',
	SPOILERTAGS = '`||text||`',
	QUOTE = '`> text`',
	BLOCKQUOTE = '`>>> text`'
}

export const enum PermissionLevels {
	EVERYONE = 0,
	TRUSTED = 1,
	MODERATOR = 7,
	ADMINISTRATOR = 8,
	OWNER = 10
}

export const enum Sideservers {
	BIBLIOTARIA = 'https://discord.gg/Gk6yHYQ',
	GAMATARIA = 'https://discord.gg/8uTmbuX',
	HOGWARTARIA = 'https://discord.gg/kVRp4Q7'
}

export const enum Time {
	Millisecond = 1,
	Second = 1 * 1000,
	Minute = 1 * 1000 * 60,
	Hour = 1 * 1000 * 60 * 60,
	Day = 1 * 1000 * 60 * 60 * 24
}
