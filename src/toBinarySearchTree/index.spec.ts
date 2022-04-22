import toBst from '.';

const testData = [
	['1'],
	['1', '2'],
	['1', '2', '3'],
	['1', '2', '3', '4'],
	['1', '2', '3', '4', '5'],
	['a', 'd', 'z']
]
for (const nodes of testData) {
	it(`should match snapshot for ${nodes.toString()}`, () => {
		const actual = Array(nodes.length);
		toBst(nodes, actual);
		expect(actual).toMatchSnapshot();
	})
}
