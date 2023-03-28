<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Database content</title>
    <!-- Local CSS -->
    <link rel="stylesheet" href="../css/main.css">
</head>
<body>
    <table>
        <tr>
            <th>ID</th>
            <th>Full Name</th>
            <th>Company</th>
            <th>Contact email</th>
            <th>Contact telephone number</th>
            <th>Type of student</th>
        </tr>
        <?php
            $con = mysqli_connect('localhost', 'root', '', 'brainster_labs');

            $query = "SELECT * FROM contact";
            $query_run = mysqli_query($con, $query);

            if(mysqli_num_rows($query_run) > 0){
               foreach($query_run as $row){
                   ?>
                       <tr>
                            <td><?=$row['id'];?></td>
                            <td><?=$row['full_name'];?></td>
                            <td><?=$row['company_name'];?></td>
                            <td><?=$row['contact_email'];?></td>
                            <td><?=$row['contact_tel'];?></td>
                            <td><?=$row['student_type'];?></td>
                       </tr>
                   <?php
               }
            } else {
               ?>
                   echo "No result";
               <?php
            }
         ?>
    </table>
</body>
</html>