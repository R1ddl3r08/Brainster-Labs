<?php
    $con = mysqli_connect('localhost', 'root', '', 'brainster_labs');

    $query = "SELECT * FROM student_type";
    $query_run = mysqli_query($con, $query);

    if(mysqli_num_rows($query_run) > 0){
    foreach($query_run as $row){
        ?>
            <option value="<?=$row['id'];?>"><?=$row['name'];?></option>
        <?php
    }
    } else {
    ?>
        <option value="">No Record Found</option>
    <?php
    }
?>