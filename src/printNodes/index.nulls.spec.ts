import printNodes from '.';

const message = "match snapshot for";

const snapshots= [
[1,null,3],
	[1,null,3, null, null, 6],
[1,null,3, null, null, 6,7, null, null, null, null, 12]
]

for (const snapshot of snapshots) {
	it(`${message} ${JSON.stringify(snapshot)}`, () => {
		expect(printNodes(snapshot)).toMatchSnapshot();
	})
}