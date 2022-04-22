import printNodes from ".";

const message = "match snapshot for";

const snapshots = [
  [1, 2, null, null, 5],
  [1, null, 3],
  [1, null, 3, null, null, 6],
  [1, null, 355, null, null, 6, 7, null, null, null, null, 12],
  [1, 2, 300, null, 50, null, 7, null, null, 10],
];

for (const snapshot of snapshots) {
  it(`${message} ${JSON.stringify(snapshot)}`, () => {
    expect(printNodes({ nodes: snapshot })).toMatchSnapshot();
  });
}
