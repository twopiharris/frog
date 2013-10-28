//frogLib.js
//Objects for frog game


function Fly(){
    tFly = new Sprite(scene, "fly.png", 20, 20);
    tFly.setSpeed(10);
    tFly.wriggle = function(){
        //change direction by some random amount
        newDir = (Math.random() * 90) - 45;
        this.changeAngleBy(newDir);
    } // end wriggle
    tFly.reset = function(){
        //set new random position
        newX = Math.random() * this.cWidth;
        newY = Math.random() * this.cHeight;
        this.setPosition(newX, newY);
    } // end reset
    tFly.reset();
    return tFly;
} // end Fly

function Frog(){
    tFrog = new Sprite(scene, "frog.png", 50, 50);
    tFrog.maxSpeed = 10;
    tFrog.minSpeed = -3;
    tFrog.setSpeed(0);
    tFrog.setAngle(0);
    tFrog.checkKeys = function(){
        if (keysDown[K_LEFT]){
            this.changeAngleBy(-5);
        } // end if
        if (keysDown[K_RIGHT]){
            this.changeAngleBy(5);
        } // end if
        if (keysDown[K_UP]){
            this.changeSpeedBy(1);
            if (this.speed > this.maxSpeed){
                this.setSpeed(this.maxSpeed);
            } // end if
        } // end if
        if (keysDown[K_DOWN]){
            this.changeSpeedBy(-1);
            if (this.speed < this.minSpeed){
                this.setSpeed(this.minSpeed);
            } // end if
        } // end if
    } // end checkKeys
    
    return tFrog;
} // end setupFrog
