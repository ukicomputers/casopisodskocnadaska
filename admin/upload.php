<?php
    $FileName=$_FILES['fuResume']['name'];
    $TmpName=$_FILES['fuResume']['tmp_name'];

    move_uploaded_file($TmpName,'./pdf/'+ $FileName);

    echo("Fajl uspesno kopiran na server");
?>