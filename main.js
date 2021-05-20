canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");

car_1_width=120;
car_1_height=70;
car_1_image="car_1.png";
car_1_x=10;
car_1_y=10;

car_2_width=120;
car_2_height=70;
car_2_image="car_2.jpg";
car_2_x=10;
car_2_y=100;

background_image="background.jpg";
car_1_image="car_1.png";
car_2_image="car_2.jpg";

function add(){
    background_imgTag=new Image();
    background_imgTag.onload=uploadBackground;
    background_imgTag.src=background_image;

    car1_imgTag=new Image();
    car1_imgTag.onload=uploadcar1;
    car1_imgTag.src=car_1_image;

    car2_imgTag=new Image();
    car2_imgTag.onload=uploadcar2;
    car2_imgTag.src=car_2_image;
}

function uploadBackground(){
    ctx.drawImage(background_imgTag,0,0,canvas.width,canvas.height);
}

function uploadcar1(){
    ctx.drawImage(car1_imgTag,car_1_x,car_1_y,car_1_width,car_1_height);
}

function uploadcar2(){
    ctx.drawImage(car2_imgTag,car_2_x,car_2_y,car_2_width,car_2_height);
}


window.addEventListener("keydown", my_keydown);

function my_keydown(e){

    keyPreesed=e.keyCode;
    console.log(keyPreesed);

    if(keyPreesed=='38'){
        up1();
        console.log("car 1 up");
    }

    if(keyPreesed=='40'){
        down1();
        console.log("car 1 down");
    }

    if(keyPreesed=='39'){
        right1();
        console.log("car 1 right");
    }

    if(keyPreesed=='37'){
        left1();
        console.log("car 1 left");
    }

    if(car_1_x>700){
        console.log("car_1");
        document.getElementById("game_status").innerHTML="Car 1 Won!";
    }
    else if(car_2_x>700){
        console.log("car_2");
        document.getElementById("game_status").innerHTML="Car 2 Won!";
    }




    if(keyPreesed=='87'){
        up2();
        console.log("car 2 up");
    }

    if(keyPreesed=='83'){
        down2();
        console.log("car 2 down");
    }

    if(keyPreesed=='68'){
        right2();
        console.log(" car 2 right");
    }

    if(keyPreesed=='65'){
        left2();
        console.log(" car 2 left");
    }
}


function up1()
{
	if(car_1_y >=0)
	{
		car_1_y = car_1_y - 10;
		console.log("When up arrow is pressed,  x = " + car_1_x + " | y = " +car_1_y);
		 uploadBackground();
		 uploadcar1();
         uploadcar2();
	}
}
function down1()
{
	if(car_1_y <=500)
	{
        car_1_y=car_1_y+ 10;
        console.log("When down arrow is pressed,  x = " + car_1_x + " | y = " +car_1_y);
		uploadBackground();
		 uploadcar1();
         uploadcar2();
	}
}
function left1()
{
	if(car_1_x >= 0)
	{
		car_1_x =car_1_x - 10;
		console.log("When left arrow is pressed,  x = " + car_1_x + " | y = " +car_1_y);
		uploadBackground();
		 uploadcar1();
         uploadcar2();
	}
}
function right1()
{
	if(car_1_x <= 700)
	{
		car_1_x =car_1_x + 10;
		console.log("When right arrow is pressed,  x = " + car_1_x + " | y = " +car_1_y);
		uploadBackground();
		uploadcar1();
        uploadcar2();
   }
}


function right2()
{
	if(car_2_x <= 700)
	{
		car_2_x =car_2_x + 10;
		console.log("When right arrow is pressed,  x = " + car_2_x + " | y = " +car_2_y);
		uploadBackground();
		uploadcar1();
        uploadcar2();
   }
}

function left2()
{
	if(car_2_x >= 0)
	{
		car_2_x =car_2_x - 10;
		console.log("When left arrow is pressed,  x = " + car_2_x + " | y = " +car_2_y);
		uploadBackground();
		uploadcar1();
        uploadcar2();
   }
}

function down2()
{
	if(car_2_y <= 500)
	{
		car_2_y =car_2_y + 10;
		console.log("When down arrow is pressed,  x = " + car_2_x + " | y = " +car_2_y);
		uploadBackground();
		uploadcar1();
        uploadcar2();
   }
}

function up2()
{
	if(car_2_y >= 0)
	{
		car_2_y =car_2_y - 10;
		console.log("When up arrow is pressed,  x = " + car_2_x + " | y = " +car_2_y);
		uploadBackground();
		uploadcar1();
        uploadcar2();
   }
}