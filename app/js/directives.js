'use strict';

//directives.js

var mcgrawAppDirectives = angular.module('mcgrawAppDirectives', []);


mcgrawAppDirectives.directive('happyCircle', ['$timeout', function(timer) {
        return {
            restrict: 'A',
            scope: true,
            link: function(scope, iElement, attrs) {
                var context = iElement[0].getContext('2d');
                var x = iElement[0].width / 2;
                var y = iElement[0].height / 2;
                var radius = 50;
                var startAngle = 0 * Math.PI;
                var endAngle;
                var counterClockwise = false;
                var strokeColor;
                var noVal; 

                function getColor(huh) {
                    if (huh <= 49) {
                        strokeColor = '#d31f1f';
                    } else if (huh <= 74) {
                        strokeColor = '#eac11e';
                    } else strokeColor = '#59b73c';
                    console.log('stroke color: ' + strokeColor);
                    return strokeColor;
                }

                var getDeg = function() {
                    var inPerc = attrs.percentage;
                    inPerc = parseFloat(inPerc);
                    var aPerc = (inPerc * 0.02);
                    endAngle = aPerc * Math.PI;
                    context.beginPath();
                    context.arc(x, y, radius, startAngle, endAngle, counterClockwise);
                    context.lineWidth = 10;
                    context.strokeStyle = getColor(inPerc);
                    context.stroke();
                }
                timer(getDeg, 1000);
            }
        }

    }])


