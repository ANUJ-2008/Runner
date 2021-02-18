var striker,showArrow,aimAngle,aimPower,score;

const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;


function preload()
{
    table=loadImage("Pool Table.jpg")
    arrow=loadImage("Arrow.png")
}

function setup()
{
    createCanvas(1200,450)
    myEngine=Engine.create()
    myWorld=myEngine.world
    myEngine.world.gravity.y=0;

    aimAngle=0;
    aimPower=10;
    score=0;

    striker=new Striker(300,210)

    ball1=new Ball(942,135,"purple",1)
    ball2=new Ball(942,185,"green",2)
    ball3=new Ball(942,235,"yellow",3)
    ball4=new Ball(942,285,"red",4)
    ball5=new Ball(898,160,"cyan",5)
    ball6=new Ball(898,210,"darkblue",6)
    ball7=new Ball(898,260,"black",7)
    ball8=new Ball(854,180,"darkgreen",8)
    ball9=new Ball(854,235,"indigo",9)
    ball10=new Ball(810,210,"lightpink",10)
}

function  draw()
{
    background(table)

    Engine.update(myEngine)

    if(keyDown("UP_ARROW")&&aimPower<70)
    {
        aimPower++;
        showArrow=true;
    }

    if(keyDown("DOWN_ARROW")&&aimPower<10)
    {
        aimPower--;
        showArrow=true;
    }

    if(showArrow===true)
    {
        imageMode(CENTER)
        tint(255-aimPower*3,aimPower*3,0)
        push()
        translate(striker.body.position.x+((aimPower-10)*-1)+aimPower/2,striker.body.position.y)
        rotate(aimAngle/200)
        image(arrow,0,0,aimPower,50)
        pop()
    }

    if(aimAngle>1200)
    {
        aimAngle=0;
    }

    if(aimAngle<0)
    {
        aimAngle=1200;
    }

    if(keyDown("LEFT_ARROW")&&showArrow===true)
    {
        aimAngle-=7;
    }

    if(keyDown("RIGHT_ARROW")&&showArrow===true)
    {
        aimAngle+=7;
    }

    if(keyDown("SPACE")&&showArrow===true)
    {
        Matter.Body.setVelocity(striker.body,
            {
                x:aimPower/2,
                y:aimAngle/3
            })
    }

    striker.display()
    ball1.display()
    ball2.display()
    ball3.display()
    ball4.display()
    ball5.display()
    ball6.display()
    ball7.display()
    ball8.display()
    ball9.display()
    ball10.display()

    fill("black")
    noStroke()
    text(mouseX,100,100)
    text(mouseY,120,120)
}