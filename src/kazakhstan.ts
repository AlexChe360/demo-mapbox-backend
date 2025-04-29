import { Feature, Polygon } from 'geojson';

export const kazakhstanPolygon: Feature<Polygon> = {
	type: 'Feature',
	properties: {},
	geometry: {
		type: 'Polygon',
		coordinates: [[
			[46.5, 40.5],
			[50.0, 42.0],
			[55.0, 43.0],
			[60.0, 45.0],
			[70.0, 46.0],
			[80.0, 45.0],
			[87.0, 48.0],
			[85.0, 52.0],
			[75.0, 54.0],
			[65.0, 55.0],
			[55.0, 53.0],
			[47.0, 50.0],
			[46.5, 45.0],
			[46.5, 40.5]
		]]
	}
};
