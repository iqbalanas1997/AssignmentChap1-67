/**
 * SAYLANI WEB AND MOBILE APP DEVELOPMENT
 * JAVASCRIPT ASSIGNMENT [ Chap 1 to 20 ]
 * Iqbal Anas
 * 03232202360
 * Roll Number : WM4461
 * Email : iqbalanas99.ia@gmail.com
 */


//                              Chapter - 1 Alert
/** 
 //Task- 1
 window.alert("Welcome to JavaScript")


 //Task-2
 window.alert("Erorr ! Please enter a valid password")

//Task-3
window.alert("Welcome to JS Land \n Happy Coding ! ")

//Task-4
window.alert("Welcome to JS Land")

//Task-5
window.alert("\n Happy Coding !")   
// i could not completed this, kidnly let us know how to do it , we will highly thankful to you.

//Task-6
console.log("Q6\n Hello I can run JS through my web browser's console")
**/



//                      Chapter - 2 Variables for Strings


/**
// Task - 1
 var uerrname;

// Task - 2
 var Myname = "Iqbal Anas";


// Task - 3
 var Msg = "Hello World";
 alert(Msg)

// Task - 4

 stName = "Iqbal Anas";
 window.alert("Student's Name : " + stName)

 stAge = "23 year old";
 window.alert("Student's Age : " + stAge)

 stCourse = "Certified Mobile Application Development";
 window.alert("Student's Course : " + stCourse);


// Task - 5
 window.alert("PIZZA \n PIZZ \n PIZ  \n PI");


// Task - 6
 Email = "iqbalanas99.ia@gmail.com";
 window.alert("My email is " + Email);


// Task - 7
 Book = "A Smarter\n way to learn JavaScript";
 window.alert("I'm Trying to learn from this Book " + Book);


// Task - 8
 document.write("Yah! I can Write HTML content through JavaScript" + "<br>")

// Task - 9
window.alert("▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬");
 document.write("\n“▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬”")


 /**
//                      Chapter - 3 Variables for Numbers

// Task - 1
 var age = 21 ;
 alert("My age is : " + String(age));

// Task - 2 
 var nVisits=21;
 alert("You have Visited this site "+ String(NUmberOFTrack) + " times");

// Task - 3
 var birthYear=1998;
 document.write("My birth year is " + String(birthYear) + "<br>" +"Data Type of my declare variable is number");

// Task - 4
 var Visitors_name = "JohnDoe";
 var Product_title = "T- Shirt";
 var Quantity = 5;
 document.write(Visitors_name + " Ordered  " + Quantity + "   " + Product_title + "     " + "  on XYZ Clothing store")
 **/

 /**
//                      Chapter - 4 

// Task - 1 

 var A,B ,B;

// Task - 2

// Legal Variables
 var Name;
 var Age
 var $Address;
 var Percentage;
 var _grade;


   //illegal Varibles
 var /ame;
 var @Age
 var 1Address;
 var .Percentage;
 var =Grade;


// Task - 3 
 document.write("<h1> “Rules for naming JS variables”</h1> <br>")
 document.write("Letters,$ and _  <br>")
 document.write("Letters,$ or _  <br>")
 document.write("Variables name are case sensitive  <br>")
 document.write("Variable names should not be JS variable  <br>")

**/

/**

//                      Chapter - 5

// Task - 1

 num1 = 10;
 num2 = 20;
 Add = num1 + num2
 document.write("1.Sum of the " + String(num1) + " and " + String(num2) + " is : " + String(Add))



// Task - 2

 num1 = 10;
 num2 = 20;
 Sub = num1 - num2
 Mul = num1 * num2
 Div = num1 / num2
 Mode = num1 % num2
 document.write("1. Subtraction of the " + String(num1) " + " and " +  String(num2)  +  " is : " + String(Sub) + "<br>")

 document.write("2. Multiplication of the " + String(num1) + " and " + String(num2) + " is : " + String(Mul) + "<br>")
 document.write("3.Division of the " + String(num1) +  " and " + String(num2) + " is : " + String(Div) + "<br>")
 document.write("4.Module of the" + String(num1) + " and " + String(num2) + " is : " + String(Mode) + "<br>")



// Task - 3
 num1 = 5;

         document.write("Value after variable declaration is Undefine ??")
         document.write("<br>")
         document.write("<br>")

         document.write("Initial Value is " + String(num1));



         document.write("<br>")
         document.write("<br>")
         num1++
         document.write("The Value of variable after  increment is" + " " + String(num1));



         document.write("<br>")
         document.write("<br>")
         num1 = num1 + 7
         document.write("The Value of variable after increment  of 7 is" + " " + String(num1));


         document.write("<br>")
         document.write("<br>")


         num1--
         document.write("The Value of variable after decrement is" + " " + String(num1));
         document.write("<br>")
         document.write("<br>")

         document.write("The Reminder is" + " " + String(num1 % 3));
         document.write("<br>")

// Task - 4
 var ticketPrice = 600;

 var Tickets = ticketPrice * 5;

 document.write("Total cost of buying 5 tickets is  " + String(Tickets)+"PKR")



// Task - 5

 document.write("Table of  10 ")

 document.write("<br>")


 var n1 = 10 * 1;
 var n2 = 10 * 2;
 var n3 = 10 * 3;
 var n4 = 10 * 4;
 var n5 = 10 * 5;
 var n6 = 10 * 6;
 var n7 = 10 * 7;
 var n8 = 10 * 8;
 var n9 = 10 * 9;
 var n10 = 10 * 10;

 document.write(
     String(n1) + " * " + "1" + " = " + String(n1) + "<br>" +
     String(n2) + " * " + "2" + " = " + String(n2) + "<br>" +
     String(n3) + " * " + "3" + " = " + String(n3) + "<br>" +
     String(n4) + " * " + "4" + " = " + String(n4) + "<br>" +
     String(n5) + " * " + "5" + " = " + String(n5) + "<br>" +
     String(n6) + " * " + "6" + " = " + String(n6) + "<br>" +
     String(n7) + " * " + "7" + " = " + String(n7) + "<br>" +
     String(n8) + " * " + "8" + " = " + String(n8) + "<br>" +
     String(n9) + " * " + "9" + " = " + String(n9) + "<br>" +
     String(n10) + " * " + "10" + " = " + String(n10) + "<br>"
 )


// Task - 6

 celsius = 50;
 Far = 70;


 F = (celsius * 9 / 5) + 32;
 document.write("Temprature Celsius into Fahrenheit  " + F + " 'NNoC' ")

 document.write("<br>")
 C = (Far * 9 / 5) + 32;
 document.write("Temprature Fahrenheit into Celsius " + C + " 'NNoF' ")

// Task - 7
 priceItem1 = 650;
 priceItem2 = 100;

 QuantityItem1 = 3;
 QuantityItem2 = 7;


 ShippingCharges = 100;


 totalCost = (priceItem1 * QuantityItem1) + (priceItem2 * QuantityItem2) + ShippingCharges;

 document.write("Total Cost of your Order is " + String(totalCost))

// Task - 8

 TM = 980;
 OM = 804;
 per = OM / TM * 100;
 document.write("Total marks : " + String(TM) + " <br>")
 document.write("Obtained marks : " + String(OM) + " <br>")
 document.write("Percentage" + String(per + " %"))

// Task - 9

 USDOllars = 10 * 104.80;
 Riyal = 10 * 28;

 document.write("10 Dollars is equal to " + String(USDOllars) + " Pakistani Rupees" + "<br>")
 document.write("10 Piyals is equal to  " + String(Riyal) + " Pakistani Rupees")

 document.write("<h1>Currency in PKR</h1>")
 var TotalCurr = USDOllars + Riyal;
 document.write("Total Currency in PKR " + TotalCurr)



// Task - 10

 Expression = 5 * 10 / 2;
 document.write(Expression)

// Task - 11

 CurrentYear = 2020;
         BirthYear = 1998;
         Age = 2020 - 1998;


         document.write("Current Year is :" + String(CurrentYear));
         document.write("<br>");
         document.write("Birth Year is :" + String(BirthYear));
         document.write("<br>");
         document.write("Your Age is : " + String(Age));


// Task - 12
 var Radius = 20;
 var pi = 3.142;
 var COC = 2 * pi * Radius;
 var Area = pi * Radius * Radius;


 document.write("Radius of Circle is : " + String(Radius));
 document.write("<br>");

 document.write("Circumference of Circle is : " + String(COC));
 document.write("<br>");

 document.write("Area of Circle is : " + String(Area));
 document.write("<br>");


// Task - 13
 FavSnack = "Chocolate Chip";
 CUrrectAge = 15;
 EstimatedAge = 65;
 AmoutOFSnacks = 3;


 TOtalSNacks = (EstimatedAge - CUrrectAge) * AmoutOFSnacks;
 document.write("Favoriate Snacks is : " + FavSnack + "<br>")
 document.write("Estimated Age is : " + EstimatedAge + "<br>")
 document.write("Current Age   is : " + CUrrectAge + "<br>")
 document.write("Amount of Snacks Per day is : " + AmoutOFSnacks + "<br>")

 document.write("You Will Need " + String(TOtalSNacks) + "  " + FavSnack + " to Last your untill the riped old age of " + EstimatedAge);
**/


/**
 //                      Chapter - 6 - 9

// Task - 1
 a = 10;

 document.write("Result" + "<br>" + "The value of a is : " + String(a))
 document.write("<br>")

 document.write(".......................................................");

 document.write("<br>")
 document.write("<br>")
 ++a
 document.write("The Value of a++ is " + " " + String(a));

 document.write("<br>")
 document.write("<br>")
 a++
 document.write("The Value of a++ is " + " " + String(a));

 document.write("<br>")
 document.write("<br>")
 --a
 document.write("The Value of --a is " + " " + String(a));

 document.write("<br>")
 document.write("<br>")
 a--
 document.write("The Value of a-- is " + " " + String(a));


// Task - 2
 document.write("--a :  The Value of a is 2, and the condition is --a before pre decrement so value will be 1 <br>")

 document.write(" --a - --b;  The Value of a is 2, and the condition is--a before pre decrement so value will be 1 then b ia 1 it is also pre decrement so value will be 0. <br> After getting 1 and 0 so both will be subtract 1 - 0 = 1. Answer will be 1 <br>")

 document.write(" --a - --b + ++b; The Value of a is 2, and the condition is--a before pre decrement so value will be 1 then b ia 1 it is also pre decrement so value will be 0. <br>After getting 1 and 0 so both will be subtract 1 - 0 = 1 then++b the value of b will be 2 then 1 will be add with 2 so answer will be 3.<br>")

 document.write("--a - --b + ++b + b--; The Value of a is 2, and the condition is--a before pre decrement so value will be 1 then b ia 1 it is also pre decrement so value will be 0. < br >After getting 1 and 0 so both will be subtract 1 - 0 = 1 then++b the value of b will be 2 then 1 will be add with 2 so answer will be 3 Now post decrement in b Now b will be 0 so 3 will be add with 0 < b > Answer will be 3 < /b>")


// Task - 3
 var user = prompt("Enter Your name :")

 document.write("Welcome to you " + user)


// Task - 4

 var x = parseInt(prompt("Enter a number For print a Table:"));
 document.write("======================================" + "<br>")
 document.write("============== " + "Table of  " + String(x) + "  ===============" + "<br>")
 document.write("======================================" + "<br>")
 var i;
 if (x == 5) {

     var n1 = 5 * 1;
     var n2 = 5 * 2;
     var n3 = 5 * 3;
     var n4 = 5 * 4;
     var n5 = 5 * 5;
     var n6 = 5 * 6;
     var n7 = 5 * 7;
     var n8 = 5 * 8;
     var n9 = 5 * 9;
     var n10 = 5 * 10;

     document.write(String(n1) + "<br>" + String(n2) + "<br>" + String(n3) + "<br>" + String(n4) + "<br>" + String(n5) + "<br>" + String(n6) + "<br>"
         + String(n7) + "<br>" + String(n8) + "<br>" + String(n9) + "<br>" + String(n10) + "<br>");

 }


 else {
     var n1 = x * 1;
     var n2 = x * 2;
     var n3 = x * 3;
     var n4 = x * 4;
     var n5 = x * 5;
     var n6 = x * 6;
     var n7 = x * 7;
     var n8 = x * 8;
     var n9 = x * 9;
     var n10 = x * 10;

     document.write(String(n1) + "<br>" + String(n2) + "<br>" + String(n3) + "<br>" + String(n4) + "<br>" + String(n5) + "<br>" + String(n6) + "<br>"
         + String(n7) + "<br>" + String(n8) + "<br>" + String(n9) + "<br>" + String(n10) + "<br>");
 }

**/
// Task - 5 

/* <script>
var Sub1 = prompt("Enter your Subject 1")

var mark1 = +prompt("Enter your sub1 marks out of 100")


var Sub2 = prompt("Enter your Subject 2")
var mark2 = +prompt("Enter your sub2 marks out of 100")


var Sub3 = prompt("Enter your Subject 3")
var mark3 = +prompt("Enter your sub3 1marks out of 100")

var Tmarks = 300;

var marks = mark1 + mark2 + mark3;


var per = (marks / Tmarks) * 100;
</script>

<table>
<tr>
    <th>Subject</th>
    <th>Total Marks</th>
    <th>Obtained Marks</th>
    <th>Percentage</th>

</tr>

<tr>
    <td>English</td>
    <td>100</td>
    <td>
        <script>
            document.write(String(Sub1) + "  marks is  " + String(mark1));
        </script>
    </td>
    <td>
        <script>
            document.write("Percentage is " + String(mark1 / 100) * 100 + " %");
        </script>

    </td>

</tr>

<tr>
    <td>Urdu</td>
    <td>100</td>
    <td>
        <script>
            document.write(String(Sub2) + "  marks is  " + String(mark2));
        </script>
    </td>
    <td>
        <script>
            document.write("Percentage is " + String(mark2 / 100) * 100 + " %");
        </script>

    </td>

</tr>

<tr>
    <td>Math</td>
    <td>100</td>
    <td>
        <script>
            document.write(String(Sub3) + "  marks is  " + String(mark3));
        </script>
    </td>
    <td>
        <script>
            document.write("Percentage is " + String(mark3 / 100) * 100 + " %");
        </script>

    </td>

</tr>

<br>
<tr>
    <td></td>
    <th>
        <script>
            document.write(String(Tmarks))
        </script>
    </th>

    <th>

        <script>
            document.write(String(marks))
        </script>
    </th>
    <th>
        <script>
            document.write(String(per) + "%")
        </script>

    </th>

</tr>


</table> 

**/


/**

//                      Chapter - 9 - 11

// Task - 1

 var city = prompt("Enter a city");
 if (city == "Karachi") {
     document.write("Welcome to the City of light")
 }

// Task - 2

 var Gender = prompt("Enter a Gender");
 if (Gender == "Male") {
     document.write("Good Morning Sir")
 }
 else {
     document.write("Good Morning Maa'm")

 }


// Task - 3
 var SignalColor = prompt("Enter a Signal Color");
 if (SignalColor == "Red") {
     document.write("Must Stop")
 }
 else if (SignalColor == "Yellow") {
     document.write("Ready to Move")

 }
 else {
     document.write("Move Now")
 }




// Task - 4

 var RemainFuel = +prompt("Enter a Remail Fuel Color");
 if (RemainFuel == 0.25) {
     document.write('“Please refill the fuel in your car”')
 }


// Task - 5

 var a = 4;
 if (++a === 5) {


     alert(" Q5 : given condition for variable a is true");
 }

 var b = 82;
 if (b++ === 83) {
     alert("Q5 : given condition for variable b is true");
 }

 var c = 12;
 if (c++ === 13) {
     alert("Q5 : condition 1 is true");
 }

 if (c === 13) {
     alert("Q5 : condition 2 is true");
 }
 if (c === 14) {
     alert("Q5 :condition 4 is true");
 }
 var materialCost = 20000;
 var laborCost = 2000;
 var totalCost = materialCost + laborCost;
 if (totalCost === laborCost + materialCost) {
     alert("The cost equals");
 }
 if (true) {
     alert("True");
 }
 if (false) {
     alert("False")
 }
 if ("car" < "cat") {
     alert("car is smaller than cat");
 }



// Task - 6

 TM=300;

     document.write("Total Marks : " + TM)
     document.write("<br>");
     OM=219;

     document.write("Obtained Marks : " + OM);
     document.write("<br>");

     Per=219/300*100;

     document.write("Percentage : " + Per + "%" );
     document.write("<br>");
     if (Per>=80)
     {
         document.write("Grade : A-1");
         document.write("<br>");
         document.write("Remakrs : Excellent")
     }
     else if(Per>=70)
     {
         document.write("Grade : A")
         document.write("<br>");
         document.write("Remakrs: Good")

     }
     else if(Per>=60)
     {
         document.write("Grade : B")
         document.write("<br>");
         document.write("Grade : A-1")

     }
     else if(Per>=50)
     {
         document.write("Grade : C")
         document.write("<br>");
         document.write("Remarks : You Need to Improve")

     }
     else if(Per>=40)
     {
         document.write("Grade : D")
         document.write("<br>");
         document.write("Remakrs: Sorry")

     }
     else
     {
         document.write("Fail")}




// Task - 7
 no=+prompt("Enter a number between 1 to 10")
 guessNum=4;
 if (no==guessNum){
     document.write("“Bingo! Correct Answer")

 }
 else if (no==(guessNum+1))
 {

     document.write("“Close enough to the correct answer")

 }
 else{
     document.write(" Wrong answer")
 }



// Task - 8

 no= +prompt("Enter a number")
 if (no%3==0)
 {
     document.write("It is Divisible by 3")
 }
 else{
     document.write("It is not Divisible by")
 }


// Task - 9
 no= +prompt("Enter a number")
 if (no%2==0){

     document.write("It is Even Number")
 }
 else{
     document.write("It is Odd number")
 }

 Task - 10
 Temp=+prompt("Enter a temprature")
 if (Temp>=40)
 {
     document.write("It is too hot outside");

 }
 else if(Temp>=30)
 {
     document.write("The Weather today is Normal")

 }
 else if(Temp>=20)
 {
     document.write("Today’s Weather is cool")

 }
 else 
 {
     document.write("“OMG! Today’s weather is so Cool.")
 }

// Task - 11
 no1=+prompt("Enter a First Number");
     no2=+prompt("Enter a Second Number");

     Add= no1 + no2;
     Sub=no1-no2;
     Mul=no1*no2;
     Div=no1/no2;
     Mod=no1%no2;


     document.write("Addition of Two number is :  " + String(Add) + "<br>");
     document.write("Subtraction of Two number is :  " + String(Sub) + "<br>");
     document.write("Multiply of Two number is :  " + String(Mul) + "<br>");
     document.write("Division of Two number is :  " + String(Div) + "<br>");
     document.write("Module of Two number is  : " + String(Mod) + "<br>");

 */

/**
//                      Chapter - 12 - 13



// Task - 1
 character = prompt("Enter a string")
 if (character == character.toUpperCase()) {

    document.write(character + "  is Upper Case ")
 } else if (character == character.toLowerCase()) {
     document.write(character + "  is lower  Case ")
 }




 // Task - 2
 no1=+prompt("Enter a First Number");
         no2=+prompt("Enter a Second Number");

         if (no1>no2)
         {
             document.write(String(no1) + "  is Greater than " + String(no2));
         }

         else if (no1==no2){
             document.write(String(no1) + "  is equal to " + String(no2));

         }
         else{
         document.write(String(no2) + "  is Greater than " + String(no1));
         }


// Task - 3
 no1=+prompt("Enter a First Number");

 if (no1>0){
          document.write(String(no1) + "  is Positive");
 }

 else if (no1<0){
     document.write(String(no1) + "  is Negative");
 }
 else if (no1==0){
     document.write(String(no1) + "  is Zero");}


// Task - 4
 Letter=prompt("Enter a one Letter ");

 if (Letter=='a' | Letter=="e"  | Letter=="e"  | Letter=="e" | Letter=="e" | Letter=="e" | Letter=="e")
 {
     document.write(String(Letter) + " is Vowel");
 }
 else 
 {
     document.write(String(Letter) + "  is not Vowel");

 }

// Task - 5
 CorrectPassWord="Sadiq";
 Pass=prompt("Enter Your Password ");

 if (Pass==CorrectPassWord)
 {
     document.write(" “Correct! The password you entered matches the original password”");
 }
 else 
 {
     document.write("Incorrect! The password you entered  doesnot matches the original password");

 }

// Task - 6

 var hrs=13;  
 if (hrs<18)
 {
     document.write(" “Good Day”");
 }
 else 
 {
     document.write("Good Evening");

 }
 Task - 7

 time=+prompt("Enter an Hours  Like 1900 : ")
     if (time>=0000 && time<1200)
     {
        document.write("Good Morning !")
     }
     else if(time>=1200 && time<1700)
     {
         document.write("Good Afternoon !")
     }
     else if(time>=1700 && time<2100)
    {
         document.write("Good Evening !")
     }
     else if(time>=2100 && time<2359)
     {
         document.write("Good Evening !")
     }
     else{
         document.write("Sorry Invalid Input")
     }
*/


/**

//                      Chapter - 14 - 16

// Task - 1 
 StNames1 = [];

// Task - 2
 StdNames2=[];

// Task - 3
 StArray3= ["Doll", "Cat", "Meat"]

// Task- 4
 StArray4 = [12, 56, 76]

// Task- 5
 var Array = [true, false];


// Task- 6
 var MixedArray = [true, false, "Doll", "Cat", "Meat", 12, 56, 76];


// Task - 7
 EduQuali = ['SSC', 'HSC', "BCS", "BS", "BCOM", "MS", "M.Phil", "PhD"];
 document.write(EduQuali[0] + "<br>")
 document.write(EduQuali[1] + "<br>")
 document.write(EduQuali[2] + "<br>")
 document.write(EduQuali[3] + "<br>")
 document.write(EduQuali[4] + "<br>")
 document.write(EduQuali[5] + "<br>")


// Task - 8
 var names = ["Sadiq", 'Faisal', "Shahdad"];
 var Score = [300, 400, 270];

 document.write("Score of " + names[0] + " is " + String(Score[0]) + " Percentage is : " + (Score[0] / 500 * 100) + "%")
 document.write("<br>")
document.write("Score of " + names[1] + " is " + String(Score[1]) + " Percentage is : " + (Score[1] / 500 * 100) + "%")
 document.write("<br>")
/ document.write("Score of " + names[2] + " is " + String(Score[2]) + " Percentage is : " + (Score[2] / 500 * 100) + "%")


 Task - 9 a)
 colorName = [];
 Color = prompt("Enter a Color : ")
 colorName.unshift(Color);
document.write(colorName)

// Task - 9 b)

 Color = prompt("Enter a Color : ")

 colorName.push(Color);
 document.write(colorName)


// Task - 9 c)
 Color1 = prompt("Enter a Color : ")
 Color2 = prompt("Enter a Color : ")

 colorName.unshift(Color1);
 colorName.unshift(Color2);
 document.write(colorName)

// Task - 9 d)
 colorName.shift();
 document.write(colorName);


// Task - 9 e)
colorName.pop();
 document.write(colorName);

 Task - 9 f)
 index = +prompt("Enter a Location  : ")
 colorname = prompt("Enter a color name")

 colorName.splice(index, 0, colorname);
 document.write(colorName)


// Task- 10
 StudentScore = [320, 230, 480, 120];

// StudentScore.sort();
 document.write(StudentScore)



// Task- 11
 CityNames = ["karachi", "Lahore", "Islamabad", "Queeta", "Peshawar"];

 var selectedCities = CityNames.splice(2, 2);

 document.write(selectedCities)


// Task - 12
 var arr = ["This", "is", "my", "cat"]

 document.write(arr)

 arr.join();
 document.write(arr)


// Task - 13
 var arr = ["Keyboard", "Mouse", "Printer", "Monitor"]

 document.write("Deveices: " + arr + "<br>")

 a = arr.shift(0);
 document.write("out : " + "<br>" + a + "<br>");

 b = arr.shift(1);

 document.write("out : " + "<br>" + b + "<br>");

 c = arr.shift(2);
 document.write("out : " + "<br>" + c + "<br>");


 d = arr.shift(3);
 document.write("out : " + "<br>" + d + "<br>")


// Task - 14

 var arr = ["Keyboard", "Mouse", "Printer", "Monitor"]

 document.write("Deveices: " + arr + "<br>")

 a = arr.shift(0);
 document.write("out : " + "<br>" + a + "<br>");

 b = arr.shift(1);

 document.write("out : " + "<br>" + b + "<br>");

 c = arr.shift(2);
 document.write("out : " + "<br>" + c + "<br>");


 d = arr.shift(3);
 document.write("out : " + "<br>" + d + "<br>")


// Task - 15
 var Mobiles = ["Apple", "Samsung", "Motorola", "Nokia", "Sony", "Haier"]
 document, write("<select>")
 for (var i = 0; i < Mobiles.length; i++) {
     document.write("<option>" + Mobiles[i] + "</option>")
 }
 document.write("</select>")
**/

 /**
//                      Chapter - 17 - 20

// Task - 1
 numbers = [
     [],
     []
 ]

 numbers = [
     [
         [],
         []
     ],
     [
         [],
         []
     ]
 ];

// Task - 2
 var no = [
     [0, 1, 2, 3],
     [1, 0, 1, 2],
     [2, 1, 0, 1]

 ];
 for (var i = 0; i < no.length; i++) {
     document.write(no[i] + "<br>");
 }


// Task - 3
 for (i = 0; i <= 10; i++) {

     document.write(i + "<br>")
}

// Task - 4
 table = +prompt("Enter a table : ")
 len = +prompt("Enter a length of a table")
 for (var i = 1; i <= len; i++) {
     document.write(table + " X " + i + " = " + table * i + "<br>")

 }


// Task - 5
 var fruits = ["apple", "banana", "mango", "orange",
 " strawberry"
 ]

 for (var i = 0; i < fruits.length; i++) {
 document.write(fruits[i], "<br>")
 }
 document.write("<br>")

 for (var i = 0; i < fruits.length; i++) {
 document.write("Element at index   " + i + " is " + fruits[i] + "<br>")
 }

// Task - 6


 a)

 document.write("<br>a. Counting <br><br> ")
 for (var i = 1; i <= 15; i++) {
     document.write(i, ",")
 }

 document.write("<br>")


 b)

 document.write("<br>b. Reverse Counting <br><br>")
 for (var i = 10; i >= 1; i--) {
    document.write(i, ",")
 }


 document.write("<br>")

// c)

 document.write("<br>c. Even <br><br>")
 for (var i = 0; i <= 20; i++) {
     if (i % 2 == 0) {
         document.write(i, ",")

     }}

// d)


 document.write("<br>")

 document.write("<br>d. Odd <br><br>")
 for (var i = 0; i <= 20; i++) {
     if (i % 2 != 0) {
         document.write(i, ",")

     }

 }

// e)

 document.write("<br>")
 document.write("<br>e. Series <br><br>")
 for (var i = 1; i <= 20; i++) {
     if (i % 2 == 0) {
         document.write(i, "k ,")

     }

 }

// Task - 7
 items = ["cake", "apple pie", "cookie", "chips", "patties"]

 user_input = prompt("Welcome to ABC bakery ! What do you want to order Sir/Mam'm");

 if (items.indexOf(user_input) !== -1) {
     document.write(user_input + "  is Available at " + items.indexOf(user_input))
 } else {
     document.write(user_input + "  is not  Available in out bakery ")
 }

// Task - 8
 var numbers = [24, 53, 78, 91, 12];
 document.write("Array Items :  " + numbers + "<br>")

 var maxValue = Math.max.apply(null, numbers);

 document.write("Largest Number :  " + "  " + maxValue + '<br>'); 



// Task - 9
 var numbers = [24, 53, 78, 91, 12];
 document.write("Array Items :  " + numbers + "<br>")

 var minValue = Math.min.apply(null, numbers);

 document.write("Smallest Number :  " + "  " + minValue + '<br>');


// Task - 10
 for (var i = 1; i <= 50; i++) {
     document.write(5 * i, ",")
 }

 **/





 /**
 * SAYLANI WEB AND MOBILE APP DEVELOPMENT
 * JAVASCRIPT ASSIGNMENT [ Chap 21 to 36 ]
 * Iqbal Anas
 * 03232202360
 * Roll Number : WM4461
 * Email : iqbalanas99.ia@gmail.com
 */

//         ----- CHAP  21 to 25 -----

/**
 
//Task # 01

 var firstname = prompt("Enter First Name : ")
 var LastName  = prompt("Enter Last Name : ")
 var fullName  = firstname + " " + LastName
 alert("Your Full Name is : "+fullName)


// Task # 02

var favMobile = prompt("Which is your Favourite Mobile Phone ? : ")
var LengthOfInput = favMobile.length
alert("Length of Your input is : "+LengthOfInput)


// Task # 03

var String1 = "Pakistani"
var n = String1.indexOf("n")
alert("Index of n in "+String1+ " is "+n)
 

 var String2 = "Hello World"
var n = String2.lastIndexOf("l")
alert("Last index of l in "+String2+ " is "+n)


 // Task # 05
 var String3 = "Pakistani"
 var n = String3.charAt(3)
 alert("Character at index 3 in "+String3+ " is "+n)


 //Task # 06

 var firstname = prompt("Enter First Name : ")
 var LastName  = prompt("Enter Last Name : ")
 alert("Your Full Name is : "+firstname.concat(LastName))
 
var City="Pakistan's Beautiful city is Hyderabad"
 var newText = City.replace("Hyder", "Islam");
 alert(newText)


//Task # 08
 var message = "Ali and Sami are best friends. They play cricket and football together.";
 var message2 = message.replace(/and/g, "&");
 alert(message2)

//Task # 09

var String4="472"
var number1=parseInt(String4)
alert("Value : "+String4+"\nType : "+"String\n"+"Value : " +number1+"\nType : "+"number" )



//Task # 10

var UserInput=prompt("Enter whats you want : ")
var UpperCase = UserInput.toUpperCase()
alert(UpperCase)

//Task # 11
var str = "javascript".split(" ")
for(var i=0 ;i < str.length ; i++){
    str[i] = str[i][0].toUpperCase()+str[i].slice(1)
}
alert(str)


//Task # 12

var num=35.36
var numtostring=num.toString().replace(".","")
alert(numtostring)


//Task # 13

var username = prompt("Enter Username : ")
var specialSymbol="!,.@"

for(var i=0; i<specialSymbol.length; i++){
    if(specialSymbol.indexOf(username.charAt(i)) != -1){
        alert("Please Enter a valid username")
        break;
    }
    else{
        alert("Succesfully Login")
        break;
    }
}


//Task # 14

var A = ["cake", "apple pie", "cookie", "chips", "patties"]
var search=prompt("Welcome to Iqbal Bekery, What do you want to order sir/ma'am? : ").toLowerCase()
if(A.indexOf(search) != -1){
    alert("Cookie is Available at index "+ A.indexOf(search) +" in our bakery")
}
else{
    alert("We are sorry "+ search +" is not Available in our bakery")
}



//Task # 15
var temp = 0 ;
var pass=prompt("Enter Password : ")
if(pass.length <= 6 || ( pass.charCodeAt(0) >= 48 && pass.charCodeAt(0) <=57 )){
    alert("Password cannot begin with number or symbol")
    
    }
    else{

        for(var i=0;i<pass.length;i++){

            if((pass.charCodeAt(i) >= 65 && pass.charCodeAt(i) <= 90) || (pass.charCodeAt(i) >= 97 && pass.charCodeAt(i) <= 122) || (pass.charCodeAt(i) >= 48 && pass.charCodeAt(i) <= 57)){
            temp++;
            }
            else{

            }
        }
        if(temp == pass.length){
                alert("Corect Password")
        }
        else{
                alert("Password not correct")
        }

    }

  

 //Task # 16

 var university = "University of Karachi";
 var result = university.split("")
 
 alert(result)


 //Task # 17

 var UserInput2="Pakistan"
 alert(UserInput2[UserInput2.length-1])



 //Task # 18
 var Text2 = "the quick brown fox jumps over the lazy dog"
 var n= (Text2.match(/the/g) || []).length
 alert(n)

 **/


 /**
 //    ****     ----- CHAP  26 to 30 -----      ****\

//Task # 01

var posInteger = prompt("Enter any positive integer")
alert("number : "+posInteger+"\n"+"Round Off Value : "+ Math.round(posInteger) +"\n"+"Floor Value : "+ Math.floor(posInteger) +"\n"+"Ceil Value : "+Math.ceil(posInteger))

//Task # 02

var negInteger = prompt("Enter any Negative integer")
alert("number : "+negInteger+"\n"+"Round Off Value : "+ Math.round(negInteger) +"\n"+"Floor Value : "+ Math.floor(negInteger) +"\n"+"Ceil Value : "+Math.ceil(negInteger))


//Task # 03
var obsValue = prompt("Enter any integer")
alert(Math.abs(obsValue))


//Task # 04
alert("Random Dice Value : "+Math.round((Math.random())))


//Task # 05

if(Math.floor( Math.random()*2 +1 ) == 1){
alert(1+"\n"+"Random Coin Value : Tails")
}
else{
    alert(2+"\n"+"Random Coin Value : Heads")
}


//Task # 06
alert("Random Number betweem 1 and 100 : "+Math.floor(Math.random()*100))



//Task # 07

var weight=prompt("Enter Weight in Kilograms : ")
var weightInKG=parseFloat(weight)
alert("The weight of user is "+weightInKG+" kilograms")



//Task # 08
var RandomSecret= Math.floor(Math.random()*10)+1
var number = prompt("Enter number from 1 to 10 : ")
if(number == RandomSecret){
    alert("Congratulations! You are winner of the Lucky")
}
else{
    alert("Try again")
}
**/


/**
 //    ****     ----- CHAP  31 to 34 -----      ****\

//Task # 01

var currDate = new Date();

var dateString = currDate.toString();
alert("Current Date And Time : "+dateString)


//Task # 02
var month = new Date()
var currMonth = month.getMonth()+1;
if(currMonth == 1){
    alert("Current Month : January")
}
else if(currMonth == 2){
    alert("Current Month : February")
}
else if(currMonth == 3){
    alert("Current Month : March")
}
else if(currMonth == 4){
    alert("Current Month : April")
}
else if(currMonth == 5){
    alert("Current Month : May")
}
else if(currMonth == 6){
    alert("Current Month : June")
}
else if(currMonth == 7){
    alert("Current Month : July")
}
else if(currMonth == 8){
    alert("Current Month : August")
}
else if(currMonth == 9){
    alert("Current Month : September")
}
else if(currMonth == 10){
    alert("Current Month : October")
}
else if(currMonth == 11){
    alert("Current Month : November")
}
else if(currMonth == 12){
    alert("Current Month : December")
}


//Task # 03

var DayNames = ["","Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
var Days = new Date();
var currDay = Days.getDay()+1;
var Today = DayNames[currDay]
alert("Day : "+currDay+"\n"+Today)

//Task # 04

var Day = new Date();
var curDay = Day.getDay();

if(curDay == 0 || curDay == 6 ){
    alert("It's Fun day")
}
else{
    alert("Working Day")
}

//Task # 05

var dates = new Date();
var curDay = dates.getDate();
if(curDay<16){
    alert("First fifteen days of the month")
}
else{
    alert("Last fifteen days of the month")
}

//Task # 06
var DateCurr = new Date()
var date1970 = new Date("Wed Jan 01 1970 00:00:00 GMT-0800 (Pacific Standard Time)")
//              year  month   days hours  mins  sec + from jan 2020
var calMin1970 = 50  *  12  * 30 * 24   *  60  * 60 + 5*30*24*60*60

alert("Current Date : "+DateCurr+"\n"+"Elapsed Minutes Since January 1,1970: "+calMin1970)


//Task # 07

var dt = new Date()
var h = dt.getHours()
var m = dt.getMinutes()
var s = dt.getSeconds()
if(h>12){
    alert("Time : "+h+":"+m+":"+s+" AM"+"\n"+"Its AM")
}
else{
    alert("Time : "+h+":"+m+":"+s+" PM"+"\n"+"Its PM")
}



//Task # 08
var month = 12;
var d=new Date(2020,month,0)
alert("Later Date : "+d)


//Task # 09
var Ramadan = new Date(2015,5,18)
var RamadanTime = Ramadan.getTime()

var DtCurr = new Date()
var CurrTime = DtCurr.getTime()

var CalCulateTime = CurrTime - RamadanTime
var CalCulateDays = Math.floor(CalCulateTime / (1000*60*60*24))
alert(CalCulateDays +" day have passed since 1st Ramadan, 2015")


//Task # 10
var begin2015 = new Date(2015,0,1)
var Time2015 = begin2015.getTime()

var SecFrom2015 = Time2015.getSeconds()

var CurrDt = new Date()
var CurrentTime = CurrDt.getTime()
var TimeCurr = CurrentTime.getSeconds()

var DifferenceSeconds = TimeCurr - SecFrom2015
var CalCulateSecons = Math.abs(DifferenceSeconds/1000)
alert("On Reference date : "+CalCulateSecons)


//Task # 11
var currDateTime = new Date()
document.write("Current Date: "+currDateTime + "<br>");
var a = currDateTime.setHours(currDateTime.getHours()-1)
document.write("1 Hour ago, it was : "+currDateTime);


//Task # 12
var currentDate = new Date()
document.write("current date: " + currentDate + "<br>");
var hunderedYearsAgo=currentDate.setMonth(currentDate.getMonth()-12*100)
document.write("100 years back , it was " + currentDate);



//Task # 13

var age = prompt("Enter Your Age : ")
document.write("Your age : " + age+"<br>");
var CDt=new Date()

CDt.setFullYear(CDt.getFullYear()-age)
document.write("Your Birth Year : "+CDt);



//Task # 14
var CustomerName = prompt("Enter Customer Name : ")
var CurrentMonth = prompt("Enter Current Month : ")
var numOfUnit = prompt("Enter Number Of Unit : ")
var ChargePerUnit = prompt("Enter Charge per Unit : ")

var surcharge = prompt("Enter Payment Surcharge : ")

var NetAmountwithinDUE =  numOfUnit*ChargePerUnit
var NetAmountAfterDUE = NetAmountwithinDUE + surcharge

document.write("Customer Name : "+CustomerName);
document.write("<br>Month : "+CurrentMonth);
document.write("<br>Number Of Unit : "+numOfUnit);
document.write("<br>Charges Per Unit : "+ChargePerUnit);
document.write("<br>Net Amount Payable (Within Due Date) : "+NetAmountwithinDUE);
document.write("<br>Late Payment Surcharge : "+surcharge);
document.write("<br>Gross Amount Payable (After Due Date) : "+NetAmountAfterDUE);
**/


/**

 //    ****     ----- CHAP  35 to 38 -----      ****\

//Task # 01


function date() {
    document.write(new Date());
}

date();

// task 2
function greet(firstName, lastName) {
    firstName = firstName.toUpperCase()
    lastName = lastName.toUpperCase()
    document.write("Hello " + firstName + " " + lastName + "!");
}
greet(prompt("Enter your first name"), prompt("Enter your last name"));

// task 3
var sum;
function greet(firstNum, secondNum) {
    document.write("First Number is : " + firstNum + "<br>")
    document.write("Second Number is : " + secondNum + "<br>")
    sum = firstNum + secondNum
    document.write("Sum: " + sum);
}
greet(+prompt("Enter first number"), +prompt("Enter second number"));

// task 4
function calculator(num1, operator, num2) {
    switch (operator) {
        case "+":
            return document.write(num1 + " " + operator + " " + num2 + " = "), document.write(num1 + num2);

        case "-":
            return document.write(num1 + " " + operator + " " + num2 + " = "), document.write(num1 - num2);

        case "*":
            return document.write(num1 + " " + operator + " " + num2 + " = "), document.write(num1 * num2);

        case "/":
            return document.write(num1 + " " + operator + " " + num2 + " = "), document.write(num1 / num2);

        case "5":
            return document.write(num1 + " " + operator + " " + num2 + " = "), document.write(num1 % num2);

        default:
            return document.write("Grr an error accurred")
        }
}

calculator(+prompt("Enter 1st Number"), prompt("Enter Operator: + - * / %"), +prompt("Enter 2nd Number"));

// task 5
function square(argu) {
    document.write("Input is: " + argu + "<br>")
    document.write("Square is: " + argu * argu);
}
square(+prompt("Enter number for square"));

// task 6
function factorial(num) {
    if (num === 0 || num === 1) {
        return 1;
    }else {
        return num * factorial(num-1);
    }
}
var num = +prompt("Enter Number for factorial");
var answer = factorial(num);
document.write("The factorial of " + num + " is " + answer);

// task 7
function counting(num1, num2) {
document.write("Starting number is: " + num1 + "<br>")
document.write("Ending number is: " + num2 + "<br>")
    for (var i = num1; i <= num2; i++) {
        document.write(i + "<br>");
    }
}
counting(+prompt("Enter starting number"), +prompt("Enter ending number"));

// task 8
function hypotenuse(base, perpendicular) {
    function square(v1, v2) {
        document.write("First value is: " + v1 + "<br>");
        var v1Square = v1*v1;
        document.write("Sqaure root of " + v1 + " is: " + v1Square + "<br><br>");
        document.write("Second value is: " + v2 + "<br>");
        var v2Square = v2*v2;
        document.write("Sqaure root of " + v2 + " is: " + v2Square + "<br><br>");
        var sqrt = v1*v1 + v2*v2;
        document.write("Sum of " + v1Square + " and " + v2Square + " is " + sqrt + "<br><hr>");
    }
    square(base, perpendicular)
    document.write("Hypotenuse: " + Math.hypot(base, perpendicular))
}
hypotenuse(+prompt("Enter Base"), +prompt("Enter Perpendicular"));

// task 9
var height = 5;
function area(width, height) {
    document.write("Area of a rectangle is: " + width * height);
}
area(10, height);

// task 10
function palindrome(word) {
    var reverse = word.split("").reverse().join("");
    switch (word) {
        case reverse:
            return document.write(word + " and " + reverse + " is same so this is a Palindrome word");

        default:
            return document.write(word + " and " + reverse + " is not same so this is not a Palindrome word");

    }
}
palindrome(prompt("Enter word"));

// task 11
function titleCase(string) {
    string = string.split(" ");
    for (var i = 0; i < string.length; i++) {
        var firstLetter = string[i].slice(0, 1);
        firstLetter = firstLetter.toUpperCase();
        var otherLetters = string[i].slice(1);
        otherLetters = otherLetters.toLowerCase();
        var result = firstLetter + otherLetters;
        document.write(result + " ");
    }
     
}
titleCase("the quick brown fox jumps over the lazy dog" + "<br>");


// task 12
function longestWord(word) {
  word = word.split(" ");
  var result = word[0];
  for(var i = 1 ; i < word.length ; i++) {
    if(result.length < word[i].length) {
    result = word[i];
    } 
  }
  return document.write(result);
}
longestWord('Web Development Tutorial');

// task 13
function check(string, letter) {
    var lett = letter;
    string = string.toLowerCase();
    letter = string.match(/s/g).length;
    document.write("There are " + letter + " occurence(s) of word " + '"' + lett + '"');
}
check("JSResourceS.com", "s")

// task 14
document.write("<h1>The Geometrizer</h1> <br>")
function calcCircumference(radius) {
    var circumference = 2 * 3.142 * radius
    document.write("The circumference is " + circumference.toFixed(3) + "<br>");
    function calcArea(radius) {
        radius = radius * radius
        var area = 3.142 * radius;
        document.write("The area is " + area);
    }
    calcArea(20);
 }
 calcCircumference(20);

 **/







 /**
 * SAYLANI WEB AND MOBILE APP DEVELOPMENT
 * JAVASCRIPT ASSIGNMENT [ Chap 38 to 42 ]
 * Iqbal Anas
 * 03232202360
 * Roll Number : WM4461
 * Email : iqbalanas99.ia@gmail.com
 */


//                              Chapter - 38 to 42 FUNCTIONS, SWITCH STATEMENTS, WHILE… DO-WHILE LOOPS
/** 
 //Task- 1

power(2,5)
 function power(a,b){
     console.log(a**b)
 }

 //Task- 2
 function LeapYear(){
    var year=document.getElementById("inp").value
    

    if(year % 4 == 0 && (year % 100 == 0) || (year % 400 == 0)){
        document.getElementById("output").innerHTML = year+" Leap Year";    
    }
    else{
        document.getElementById("output").innerHTML = year+" Not a Leap Year";    
    }
 }


 //Task- 3

 var a=23
 var b=44
 var c=64
 var s
 function sides(a,b,c){
    s = (a+b+c)/2
 }
function Area(s){
    var area = s*(s-a)*(s-b)*(s-c) 
    alert(area) 
}
 sides(a,b,c)
Area(s)
 


//Task- 4
mainFunction()
function mainFunction(){
var OOP
var Al
var ML
    OOP=prompt("Object Oriented Programming : ")
    AI=prompt("Artificial Intelligence : ")
    ML=prompt("Machine Learning : ")
    
    average(OOP+AI+ML)
    percentage(OOP+AI+ML)
}
function average(marks){
    alert("Average : "+marks/3)
}
function percentage(marks){
    alert("Percentage : "+(marks/300)*100)
}


//Task- 5

var sentence = "My name is Iqbal, I am doing Web And Mobile Hybrid App Development from Saylani"
var vowel=["a","e","i","o","u","A","E","I","O","U"]
var output;
for(i = 0 ; vowel.length ; i++){
    var secondLoop = sentence.length;
    for(j=0 ; j<secondLoop;j++){
        if(vowel[i] == String.charAt(j)){
            sentence=sentence.slice(0,j).concat(sentence.slice(j+1,secondLoop))

        }
    }
}
alert(sentence)

//Task- 8
var dist=prompt("Enter the Distance Between 2 cities : ")
function inMeter(dist){
    console.log(dist*1000+" Meters")
}
function inFeet(dist){
    console.log(dist*3280+" Feet")
}
function inInches(dist){
    console.log(dist*39370.1+" Inches")
}
function inCentimeter(dist){
    console.log(dist*39370.1+" Centimeter")
}
inMeter(dist)
inFeet(dist)
inInches(dist)
inCentimeter(dist)


//Task- 9
var workTime=0
var overTime=0
var overTimePay=0
function OverTimePay(){
    
for(var i=1 ; i<=12 ; i++){
    var workTime=document.getElementById("inp").value
    if(workTime > 40){
        overTime = workTime-40
        overTimePay=overTimePay+(12*overTime)

    }
    document.getElementById("output").innerHTML = "Over Time Pay : "+overTimePay;    
}


}


//Task- 10

function CurrencyNotes(){
    var amount=document.getElementById("inp").value
    document.getElementById("output").innerHTML = "You will have "+amount/100+" hundred notes " +(amount%100)/50+" fifty notes "+((amount%100)%50)/10+" ten notes";  


}

*/

//    ****     ----- CHAP  43 to 48 -----      ****\

/**
//Task- 2
function showImage(){
    document.getElementById("img1").src="https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80"
    document.getElementById("img2").src="data:image/jpeg;base64,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"
    document.getElementById("img3").src="https://images.samsung.com/is/image/samsung/p5/pk/untitled.png?$ORIGIN_PNG$"
    document.getElementById("img4").src="data:image/jpeg;base64,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"
    alert("Thanks for purchasing a phone from us")

}

//Task- 3

function deleteRow(r){
    var i=r.parentNode.parentNode.rowIndex;
    document.getElementById("stTable").deleteRow(i)
}

//Task- 5
let btnIncrease=document.querySelector('#btnAdd')
let btnDecrease=document.querySelector('#btnSub')
let input=document.querySelector('input')
btnIncrease.addEventListener('click',()=>{
    input.value = parseInt(input.value)+1
});
    
btnDecrease.addEventListener('click',()=>{
    input.value = parseInt(input.value)-1
});
  
*/

/**
<!-- ----- CHAP  49 to 52 -----   -->
 
//Task- 1

function signUp(){
   
    var username = document.getElementById("uname").value
    var password = document.getElementById("pass").value
   
    var table = document.getElementById("signupTable")
    var row=table.insertRow(1)
    var cell1=row.insertCell(0)
    var cell2=row.insertCell(1)
    cell1.innerHTML = username
    cell2.innerHTML = password

}

*/
//Task- 2

function myFunction() {
    var dots = document.getElementById("dots");
    var moreText = document.getElementById("more");
    var btnText = document.getElementById("myBtn");
  
    if (dots.style.display === "none") {
      dots.style.display = "inline";
      btnText.innerHTML = "Read more"; 
      moreText.style.display = "none";
    } else {
      dots.style.display = "none";
      btnText.innerHTML = "Read less"; 
      moreText.style.display = "inline";
    }
  }

  //Task- 3

  function save_row(a){
    var name_val=document.getElementById("name_text"+a).value;
    var country_val=document.getElementById("country_text"+a).value;
    var age_val=document.getElementById("age_text"+a).value;

    document.getElementById("name_row"+a).innerHTML=name_val;
    document.getElementById("country_row"+a).innerHTML=country_val;
    document.getElementById("age_row"+a).innerHTML=age_val;

    document.getElementById("UpdateBtn"+a).style.display="block";
    document.getElementById("insertBtn"+a).style.display="none";
    
  }


 //     -----------CHAP  49 to 52----------
//task # 01
/**
var data = document.getElementById("main-content").value
var children = data.childNodes
var elements = []
for(var i=0 ; i<children.length; i++){
    var child = children[i]
    if(child.nodeType==1){
        elements.push(child)
    }
}
console.log(elements)
 */



//     -----------CHAP  52 to 57----------
//task # 01


var images = new Array();
images[0] = new Image();
images[0].src = '1.jpg';

images[1] = new Image();
images[1].src = '2.jpg';

images[2] = new Image();
images[2].src = '3.jpg';

images[3] = new Image();
images[3].src = '4.png';


function myFunction(){
    var gallery=document.getElementById("pozeGallery")
   for(var i=0;i<images.length;i++){
    gallery.appendChild(images[i])
   }
    
}


