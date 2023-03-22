import { convertPLNToUSD } from '../convertPLNtoUSD';

describe('ConvertPLNtoUSD', () => {
    it('should return proper value when good input', () => {
        expect(convertPLNToUSD(1)).toBe('$0.29');
        expect(convertPLNToUSD(2)).toBe('$0.57');
        expect(convertPLNToUSD(20)).toBe('$5.71');
        expect(convertPLNToUSD(12)).toBe('$3.43');
    });

    it('should return NaN when input is text', () => {
        expect(convertPLNToUSD('11')).toBeNaN();
        expect(convertPLNToUSD('hello')).toBeNaN();
        expect(convertPLNToUSD('-54')).toBeNaN();
    });

    it('should return NaN when input is empty', () => {
        expect(convertPLNToUSD()).toBeNaN();
    });

    it('should return Error when input is not string or number', () => {
        expect(convertPLNToUSD([])).toBe('Error');
        expect(convertPLNToUSD({})).toBe('Error');
        expect(convertPLNToUSD(Boolean)).toBe('Error');
    });

    it('should return "$0,00" when input is less than 0', () => {
        expect(convertPLNToUSD(-98)).toBe('$0,00');
        expect(convertPLNToUSD(-22)).toBe('$0,00');
        expect(convertPLNToUSD(-3)).toBe('$0,00');
    });



});