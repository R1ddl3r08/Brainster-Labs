<?php
    $full_name = $_POST['name'];
    $company = $_POST['company'];
    $contact_mail = $_POST['contact-mail'];
    $tel = $_POST['tel'];
    $type = $_POST['type'];

    if(isset($_POST['submit'])){

        if(empty($full_name)){
            die();
        } else {
            if(!preg_match('/^[a-zA-Z]+(([,. -][a-zA-Z ])?[a-zA-Z]*)*$/', $full_name)){
                die();
            }
        }

        if(empty($company)){
            die();
        }

        if(empty($contact_mail)){
            die();
        } else {
            if(!preg_match('/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/', $contact_mail)){
                die();
            }
        }

        if(empty($tel)){
            die();
        } else {
            if(!preg_match('/^((\+389)|0)7(0|1|2|3|4|5|6|7|8)[0-9]{6}$/', $tel)){
                die();
            }
        }

    }

    $conn = new mysqli('localhost', 'root', '', 'brainster_labs');
    if($conn->connect_error){
        die('Connection failed : ' .$conn->connection_error);
    } else{
        $stmt = $conn->prepare("insert into contact(full_name, company_name, contact_email, contact_tel, student_type) values (?, ?, ?, ?, ?)");
        $stmt->bind_param("ssssi", $full_name, $company, $contact_mail, $tel, $type);
        $stmt->execute();
        $message = "Your message has been sent successfully.";
        $stmt->close();
        $conn->close();
    
    }


?>