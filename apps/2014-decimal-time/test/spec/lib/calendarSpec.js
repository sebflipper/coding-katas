/*global define*/

define([
    'lib/calendar'
], function () {
    'use strict';

    describe('lib', function () {
        describe('calendar', function () {
            var date;

            beforeEach(function () {
                date = new Date(2014, 4, 11, 0, 0, 0, 0);
            });

            it('should work out leap years', function () {
                expect(date.isLeapYear()).toBeFalsy();

                date = new Date(2008, 4, 11, 12, 0, 0, 0);
                expect(date.isLeapYear()).toBeTruthy();

                date = new Date(2020, 4, 11, 12, 0, 0, 0);
                expect(date.isLeapYear()).toBeTruthy();
            });

            describe('French Republican', function () {
                it('should get the correct number of days since FR epoch', function () {
                    expect(date.getDaysSinceFrcEpoch()).toBe(80950);

                    date = new Date(2014, 4, 11, 12, 0, 0, 0);
                    expect(date.getDaysSinceFrcEpoch()).toBe(80950);
                });

                it('should compute the correct FR date', function () {
                    expect(date.getFrcDate()).toEqual({
                        'year': 222,
                        'month': 8,
                        'day': 22
                    });
                });

                it('should get the correct year', function () {
                    expect(date.getFrcYear()).toBe(222);
                });

                it('should get the correct quarter', function () {
                    expect(date.getFrcQuarter()).toBe(3);

                    date = new Date(2014, 8, 24, 0, 0, 0, 0);
                    expect(date.getFrcQuarter()).toBe(1);

                    date = new Date(2014, 11, 23, 0, 0, 0, 0);
                    expect(date.getFrcQuarter()).toBe(2);

                    date = new Date(2014, 5, 20, 0, 0, 0, 0);
                    expect(date.getFrcQuarter()).toBe(4);
                });

                it('should get the correct month', function () {
                    expect(date.getFrcMonth()).toBe(8);
                });

                it('should get the correct day', function () {
                    expect(date.getFrcDay()).toBe(22);
                });

                it('should get the correct start of the year', function () {
                    date = new Date(2014, 8, 22, 0, 0, 0, 0);
                    expect(date.getFrcQuarter()).toBe(1);
                    expect(date.getFrcMonth()).toBe(1);
                    expect(date.getFrcDay()).toBe(1);

                    date = new Date(1900, 8, 23, 0, 0, 0, 0);
                    expect(date.getFrcQuarter()).toBe(1);
                    expect(date.getFrcMonth()).toBe(1);
                    expect(date.getFrcDay()).toBe(1);
                });

                describe('Holidays', function () {
                   it('should get correct date for holidays', function () {
                       date = new Date(2014, 8, 17, 0, 0, 0, 0);
                       expect(date.getFrcQuarter()).toBe(5);
                       expect(date.getFrcMonth()).toBe(13);
                       expect(date.getFrcDay()).toBe(1);

                       date = new Date(2014, 8, 21, 0, 0, 0, 0);
                       expect(date.getFrcQuarter()).toBe(5);
                       expect(date.getFrcMonth()).toBe(13);
                       expect(date.getFrcDay()).toBe(5);

                       date = new Date(1900, 8, 22, 0, 0, 0, 0);
                       expect(date.getFrcQuarter()).toBe(5);
                       expect(date.getFrcMonth()).toBe(13);
                       expect(date.getFrcDay()).toBe(6);
                   })
                });
            });
        });
    });
});
