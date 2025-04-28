export function generatePoints(count: number) {
	const types = ['2G', '3G', '4G'];
	const statuses = ['working', 'broken'];

	return Array.from({ length: count }, (_, i) => ({
		id: i.toString(),
		latitude: Math.random() * 180 - 90,
		longitude: Math.random() * 360 - 180,
		networkType: types[Math.floor(Math.random() * types.length)],
		status: statuses[Math.random() < 0.9 ? 0 : 1], // 90% рабочие, 10% сломанные
	}));
}
