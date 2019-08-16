import React from 'react';
import App from './App.js';
import Input from './input.js';
import { create } from 'react-test-renderer'

describe('Component tests',()=>{
  test("Matches the snapshot", () => {
    const app = create(<App />);
    expect(app.toJSON()).toMatchSnapshot();
  });
  test('Test data state', () => {
    let app = create(<App />)
    let instance = app.getInstance();

    expect(instance.state.raceInfo).toStrictEqual([])
  })
  test('Test data state', () => {
    let app = create(<App />)
    let instance = app.getInstance();

    expect(instance.state.data).toStrictEqual([])
  })
})