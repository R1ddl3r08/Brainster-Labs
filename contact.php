<!DOCTYPE html>
<html lang="en">
    <head>
        <title>Hire our student</title>
        <meta charset="utf-8" />
        <meta name="keywords" content="" />
        <meta name="description" content="" />
        <meta name="viewport" content="width=device-width,initial-scale=1.0" />

        <!-- Local CSS -->
        <link rel="stylesheet" href="./css/main.css">

        <!-- FONTAWESOME LINK  -->
        <script src="https://kit.fontawesome.com/bb958a20ad.js" crossorigin="anonymous"></script>
    </head>
<body>
    <nav class="navbar">
        <div class="wrap">
            <div class="logo">
                <a href="index.html">
                    <img src="./images/Logo.png" alt="brainster-logo">
                    <p>BRAINSTER</p>
                </a>
            </div>
            <ul class="nav-menu" id="nav-menu">
                <li class="nav-item">
                    <a href="https://brainster.co/marketing/
                    " class="nav-link" target="_blank">Академија за маркетинг</a>
                </li>
                <li class="nav-item">
                    <a href="https://brainster.co/full-stack/" class="nav-link" target="_blank">Академија за програмирање</a>
                </li>
                <li class="nav-item">
                    <a href="https://brainster.co/data-science/" class="nav-link" target="_blank">Академија за data science</a>
                </li>
                <li class="nav-item">
                    <a href="https://brainster.co/graphic-design/
                    " class="nav-link" target="_blank">Академија за дизајн</a>
                </li>
                <li class="list-item">
                    <a href="http://localhost:3000/contact.php" class="nav-link btn" target="_blank">Вработи наш студент</a>
                </li>
            </ul>

            <button class="hamburger" id="hamburger">
                <span class="bar first"></span>
                <span class="bar second"></span>
                <span class="bar third"></span>
            </button>
        </div>
    </nav>

    <div class="hire-students">
        <div class="wrap">
            <iframe name="myframe" id="frame1" src="contact.php" style="display: none"></iframe>
            <h1>Вработи студенти</h1>
            <form action="http://localhost:3000/connect.php" id="form" method="post" target="myframe">
                <div class="form-group name">
                    <label for="name">Име и презиме</label>
                    <input type="text" id="name" name="name" placeholder="Вашето име и презиме">
                    <div class="error"></div>
                </div>
                <div class="form-group company">
                    <label for="company">Име на компанија</label>
                    <input type="text" id="company" name="company" placeholder="Име на вашата компанија">
                    <div class="error"></div>
                </div>
                <div class="form-group mail">
                    <label for="contact-mail">Контакт имејл</label>
                    <input type="text" id="contact-mail" name="contact-mail" placeholder="Контакт имејл на вашата компанија">
                    <div class="error"></div>
                </div>
                <div class="form-group tel">
                    <label for="tel">Контакт телефон</label>
                    <input type="tel" id="tel" name="tel" placeholder="Контакт телефон на вашата компанија">
                    <div class="error"></div>
                </div>
                <div class="form-group type">
                    <label for="type">Тип на студенти</label>
                    <div class="custom-select">
                        <select id="studentType" name="type">
                            <option value="0">Изберете тип на студент</option>
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
                        </select>
                    </div>
                </div>
                <div class="form-group submit">
                    <button type="submit" name="submit">ИСПРАТИ</button>
                </div> 
            </form>
        </div>
    </div>


    <!-- FOOTER  -->
    <footer>
        <div class="wrap">
            <p>Изработено со <span>&#10084;</span> од студентите на Brainster</p>
        </div>
    </footer>

    
    <script src="contact.js"></script>
</body>
</html>