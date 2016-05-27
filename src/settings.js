import keys from './keys';

export const p1 = {
	name: '1',
	keys: {
		up: keys.a,
		down: keys.z,
	}
};

export const p2 = {
	name: '2',
	keys: {
		up: keys.up,
		down: keys.down,
	}
};

export const fps = 30;

export const paddle = {
	height: 100,
	width: 10,
	gap: 10
};

export const ball = {
	size: 5
};

export const scoreBoard = {
	fromTop: 45
};
