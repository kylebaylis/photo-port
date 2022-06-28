import React from 'react';
import {render, cleanup} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import About from '..';

// won't be leftover memory data that could give false results
afterEach(cleanup);

// declare component being tested
describe('About component', () => {
    // First Test
    it('renders', () => {
        render(<About />);
    });

    // Second Test
    it('matches snapshot DOM node structure', () => {
        // returns snapshot of About component
        const {asFragment} = render(<About />); // don't forget the {}

        // tests/compares if expected and actual outcomes match
        expect(asFragment()).toMatchSnapshot();
    });
})