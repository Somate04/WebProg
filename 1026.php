<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <?php
        /*echo "s<br>";
        
        $x = 43;
        $l = "d";
        echo "hello" . $l;*/
        $nev = "Paprika Jancsi";
        echo "<h1>Hello $nev!</h1>";
        echo "<p>". date("h i") . "</p>";
        $n = 5;
        function faktorialis($n){
            if($n == 0){
                return 1;
            }
            else{
                $n *= faktorialis($n-1);
                return $n;
            }
        }
        echo faktorialis($n);

        $m = 10;
        for($i = 0; $i <= 10; $i++){
            echo "<p style='font-size:$m"."px'>Hello világ!</p>";
            $m+=10;
        }
        echo "<ul>";
        $hibak = ["nem jo ez", "nem jo az", "error 504", "nem vagy elég meno error"];
        foreach($hibak as $i){
            echo "<li>".$i."</li>";
        }
        echo "</ul>";
    ?>
</body>
</html>