import ResultBox from './ResultBox';
import '@testing-library/jest-dom/extend-expect';
// import userEvent from '@testing-library/user-event';
import { render, screen, cleanup } from '@testing-library/react';


  describe('Component ResultBox', () => {
    it('should render without crashing', () => {
        render(<ResultBox from="PLN" to="USD" amount={100} />);
    });

    it('should render proper info about conversion when PLN -> USD', () => {
        const testCases = [
            { amount: 100, from: 'PLN', to: 'USD' },
            { amount: 200, from: 'PLN', to: 'USD' },
            { amount: 34, from: 'PLN', to: 'USD' },
        ];

        for(const testObj of testCases) {
            // render component
            render(<ResultBox from= {testObj.from} to={testObj.to} amount={testObj.amount} />);

            const output = screen.getByTestId('output');
            // console.log('type',typeof(testObj.amount));

            expect(output).toHaveTextContent(`${testObj.from} ${testObj.amount.toFixed(2)} = $${(testObj.amount / 3.5).toFixed(2)}`);
            cleanup()
        }
    });

    it('should render proper info about conversion when USD -> PLN', () => {
        const testCases = [
            { amount: 100, from: 'USD', to: 'PLN' },
            { amount: 200, from: 'USD', to: 'PLN' },
            { amount: 34, from: 'USD', to: 'PLN' },
        ];

        for(const testObj of testCases) {
            // render component
            render(<ResultBox from= {testObj.from} to={testObj.to} amount={testObj.amount} />);

            const output = screen.getByTestId('output');
            // console.log('type',typeof(testObj.amount));

            expect(output).toHaveTextContent(`$${testObj.amount.toFixed(2)} = PLN ${(testObj.amount * 3.5).toFixed(2)}`);
            cleanup()
        }
    });


    it('should render proper info about conversion when USD -> USD', () => {
        const testCases = [
            { amount: 100, from: 'USD', to: 'USD' },
            { amount: 200, from: 'USD', to: 'USD' },
            { amount: 34, from: 'USD', to: 'USD' },
        ];

        for(const testObj of testCases) {
            // render component
            render(<ResultBox from= {testObj.from} to={testObj.to} amount={testObj.amount} />);

            const output = screen.getByTestId('output');
            // console.log('type',typeof(testObj.amount));
    
            expect(output).toHaveTextContent(`$${testObj.amount.toFixed(2)} = $${(testObj.amount).toFixed(2)}`);
            cleanup()
        }
    });

    it('should render proper info about conversion when PLN -> PLN', () => {
        const testCases = [
            { amount: 100, from: 'PLN', to: 'PLN' },
            { amount: 200, from: 'PLN', to: 'PLN' },
            { amount: 34, from: 'PLN', to: 'PLN' },
        ];

        for(const testObj of testCases) {
            // render component
            render(<ResultBox from= {testObj.from} to={testObj.to} amount={testObj.amount} />);

            const output = screen.getByTestId('output');
            // console.log('type',typeof(testObj.amount));
            expect(output).toHaveTextContent(`PLN ${testObj.amount.toFixed(2)} = PLN ${(testObj.amount).toFixed(2)}`);
            cleanup()
        }
    });

    
    it('should render proper info about conversion when input negative value PLN -> USD', () => {
        const testCases = [
            { amount: -100, from: 'PLN', to: 'USD' },
            { amount: -200, from: 'PLN', to: 'USD' },
            { amount: -34, from: 'PLN', to: 'USD' },
        ];

        for(const testObj of testCases) {
            // render component
            render(<ResultBox from= {testObj.from} to={testObj.to} amount={testObj.amount} />);

            const output = screen.getByTestId('output');
            // console.log('type',typeof(testObj.amount));

            expect(output).toHaveTextContent(`-PLN ${(-testObj.amount).toFixed(2)} = $ 0,00`);
            cleanup()
        }
    });

    it('should render proper info about conversion when input negative value USD -> PLN', () => {
        const testCases = [
            { amount: -100, from: 'USD', to: 'PLN' },
            { amount: -200, from: 'USD', to: 'PLN' },
            { amount: -34, from: 'USD', to: 'PLN' },
        ];

        for(const testObj of testCases) {
            // render component
            render(<ResultBox from= {testObj.from} to={testObj.to} amount={testObj.amount} />);

            const output = screen.getByTestId('output');
            // console.log('type',typeof(testObj.amount));

            expect(output).toHaveTextContent(`-$${(-testObj.amount).toFixed(2)} = PLN 0,00`);
            cleanup()
        }
    });



});