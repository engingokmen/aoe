import { incrementAsync } from "./sagas";

test("incrementAsync Saga test", () => {
  const gen = incrementAsync();
  gen.next();
  gen.next();
  expect(gen.next()).toEqual({ done: true, value: undefined });
});
