import { booleanPointInPolygon, point } from '@turf/turf';
import { kazakhstanPolygon } from './kazakhstan';

export function generatePoints(count: number) {
	const types = ['2G', '3G', '4G'];
	const statuses = ['working', 'broken'];

	const minLat = 40.5;
	const maxLat = 55.0;
	const minLng = 46.5;
	const maxLng = 87.0;

	const points = [];

	while (points.length < count) {
		const latitude = Math.random() * (maxLat - minLat) + minLat;
		const longitude = Math.random() * (maxLng - minLng) + minLng;

		const pt = point([longitude, latitude]);

		if (booleanPointInPolygon(pt, kazakhstanPolygon)) {
			points.push({
				id: points.length.toString(),
				latitude,
				longitude,
				networkType: types[Math.floor(Math.random() * types.length)],
				status: Math.random() < 0.9 ? 'working' : 'broken',
			});
		}
	}

	return points;
}
