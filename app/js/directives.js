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

}]);

mcgrawAppDirectives.directive('happyBubbles', function() {
    return {
        restrict: 'A',
        template: '<canvas id="c"></canvas>',
        scope: true,
        link: function(scope, element, attr) {
            window.requestAnimFrame =
                window.requestAnimationFrame ||
                window.webkitRequestAnimationFrame ||
                window.mozRequestAnimationFrame ||
                window.oRequestAnimationFrame ||
                window.msRequestAnimationFrame ||
                function(callback) {
                    window.setTimeout(callback, 1000 / 60);
                };

            var canvas = document.getElementById('c');
            var ctx = canvas.getContext('2d');

            canvas.width = 1000;//window.innerWidth;
            canvas.height = 500;//window.innerHeight;

            //pick one of two colors 

            var color;
            var getColor = function(){
              var colorVal = Math.floor((Math.random() * 6) + 1); 
              
              if(colorVal === 1 ){
                color = 'rgba(114, 222, 226, 0.5)';
              } 
              else if(colorVal === 2 || colorVal === 3 || colorVal === 4){
                color = 'rgba(247, 160, 237, 0.5)';
              } 
              else color === "whitesmoke";

              return color;
            }

            var settings = {

                'basic': {

                    'emission_rate': 5,
                    'min_life': 1,
                    'life_range': 7,
                    'min_angle': 0,
                    'angle_range': 360,
                    'min_speed': 1,
                    'speed_range': 25,
                    'min_size': .2,
                    'size_range': 5,
                    'colour': color //#E81A2Drgb(114, 222, 226)
                }
            };
            //  ********  PARTICLE *********
            var Particle = function(x, y, angle, speed, life, size) {
                this.pos = {
                    x: x || 0,
                    y: y || 0
                };
                this.speed = speed || 5;
                this.life = life || 1;
                this.size = size || 2;
                this.lived = 0;
                var radians = angle * Math.PI / 180;
                this.vel = {
                    x: Math.cos(radians) * speed,
                    y: -Math.sin(radians) * speed
                };
            };
            //  ********  EMITTER *********
            var Emitter = function(x, y, settings) {
                /* the emitter's position */
                this.pos = {
                    x: x,
                    y: y
                };
                this.settings = settings;
                this.emission_delay = 1000 / settings.emission_rate;
                this.last_update = 0;
                this.last_emission = 0;
                this.particles = [];
            };

            Emitter.prototype.update = function() {
                if (!this.last_update) {
                    this.last_update = Date.now();
                    return;
                }
                var time = Date.now();
                var dt = time - this.last_update;
                this.last_emission += dt;
                this.last_update = time;
                if (this.last_emission > this.emission_delay) {
                    var i = Math.floor(this.last_emission / this.emission_delay);
                    this.last_emission -= i * this.emission_delay;
                    while (i--) {
                        this.particles.push(
                            new Particle(
                                0,
                                0,
                                this.settings.min_angle + Math.random() * this.settings.angle_range,
                                this.settings.min_speed + Math.random() * this.settings.speed_range,
                                this.settings.min_life + Math.random() * this.settings.life_range,
                                this.settings.min_size + Math.random() * this.settings.size_range
                            )
                        );
                    }
                }

                dt /= 1000;
                var i = this.particles.length;
                while (i--) {
                    var particle = this.particles[i];
                    if (particle.dead) {
                        this.particles.splice(i, 1);
                        continue;
                    }
                    particle.lived += dt;
                    if (particle.lived >= particle.life) {
                        particle.dead = true;
                        continue;
                    }
                    particle.pos.x += particle.vel.x * dt;
                    particle.pos.y += particle.vel.y * dt;
                    //ctx.fillStyle = this.settings.colour;
                    ctx.fillStyle = getColor();
                    var x = this.pos.x + particle.pos.x;
                    var y = this.pos.y + particle.pos.y;
                    ctx.beginPath();
                    ctx.arc(x, y, particle.size, 0, Math.PI * 2);
                    ctx.fill();
                }
            };

            var emitter = new Emitter(canvas.width / 2, canvas.height / 2, settings.basic);
            function loop() {
                ctx.clearRect(0, 0, canvas.width, canvas.height);
                emitter.update();
                requestAnimFrame(loop);
            }
            loop();
        }
    }
});