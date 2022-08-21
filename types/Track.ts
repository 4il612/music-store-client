export interface IComment {
	_id: string;
	username: string;
	text: string;
}

export interface ITrack {
	_id: string;
	title: string;
	author: string;
	lyrics: string;
	listen_count: number;
	preview: string;
	audio: string;
	comments: IComment[];
}
