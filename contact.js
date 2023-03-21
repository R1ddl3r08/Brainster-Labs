// -------------HAMBURGER-------------------
// --------------HAMBURGER MENU------------------
const hamburger = document.querySelector("#hamburger");
const navMenu = document.querySelector("#nav-menu");
const navbar = document.querySelector(".navbar");
const logo = document.querySelector(".logo");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
    navbar.classList.toggle("active");
    logo.classList.toggle("active");
});




// ---------DROPDOWN MENU----------------
var x, i, j, l, ll, selElmnt, a, b, c;
/* Look for any elements with the class "custom-select": */
x = document.getElementsByClassName("custom-select");
l = x.length;
for (i = 0; i < l; i++) {
selElmnt = x[i].getElementsByTagName("select")[0];
ll = selElmnt.length;
/* For each element, create a new DIV that will act as the selected item: */
a = document.createElement("DIV");
a.setAttribute("class", "select-selected");
a.innerHTML = selElmnt.options[selElmnt.selectedIndex].innerHTML;
x[i].appendChild(a);
/* For each element, create a new DIV that will contain the option list: */
b = document.createElement("DIV");
b.setAttribute("class", "select-items select-hide");
for (j = 1; j < ll; j++) {
    /* For each option in the original select element,
    create a new DIV that will act as an option item: */
    c = document.createElement("DIV");
    c.innerHTML = selElmnt.options[j].innerHTML;
    c.addEventListener("click", function(e) {
        /* When an item is clicked, update the original select box,
        and the selected item: */
        var y, i, k, s, h, sl, yl;
        s = this.parentNode.parentNode.getElementsByTagName("select")[0];
        sl = s.length;
        h = this.parentNode.previousSibling;
        for (i = 0; i < sl; i++) {
        if (s.options[i].innerHTML == this.innerHTML) {
            s.selectedIndex = i;
            h.innerHTML = this.innerHTML;
            y = this.parentNode.getElementsByClassName("same-as-selected");
            yl = y.length;
            for (k = 0; k < yl; k++) {
            y[k].removeAttribute("class");
            }
            this.setAttribute("class", "same-as-selected");
            break;
        }
        }
        h.click();
    });
    b.appendChild(c);
}
x[i].appendChild(b);
a.addEventListener("click", function(e) {
    /* When the select box is clicked, close any other select boxes,
    and open/close the current select box: */
    e.stopPropagation();
    closeAllSelect(this);
    this.nextSibling.classList.toggle("select-hide");
    this.classList.toggle("select-arrow-active");
});
}

function closeAllSelect(elmnt) {
/* A function that will close all select boxes in the document,
except the current select box: */
var x, y, i, xl, yl, arrNo = [];
x = document.getElementsByClassName("select-items");
y = document.getElementsByClassName("select-selected");
xl = x.length;
yl = y.length;
for (i = 0; i < yl; i++) {
    if (elmnt == y[i]) {
    arrNo.push(i)
    } else {
    y[i].classList.remove("select-arrow-active");
    }
}
for (i = 0; i < xl; i++) {
    if (arrNo.indexOf(i)) {
    x[i].classList.add("select-hide");
    }
}
}

/* If the user clicks anywhere outside the select box,
then close all select boxes: */
document.addEventListener("click", closeAllSelect);


// // ---------------FORM VALIDATION--------------------
const form = document.getElementById('form');
const fullName = document.getElementById('name');
const company = document.getElementById('company');
const email = document.getElementById('contact-mail');
const tel = document.getElementById('tel');
const type = document.querySelector(".select-selected");


form.addEventListener('submit', e => {
    // e.preventDefault();
    validateInputs();
});

const setError = (element, message) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = message;
    inputControl.classList.add('error');
    inputControl.classList.remove('success')
}

const setSuccess = element => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = '';
    inputControl.classList.add('success');
    inputControl.classList.remove('error');
};

const isValidEmail = email => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

const isValidName = name => {
    const nameRegex = /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/;
    return nameRegex.test(name);
  }

const isValidTel = tel => {
    const telRegex = /^((\+389)|0)7(0|1|2|3|4|5|6|7|8)[0-9]{6}$/gm;
    return telRegex.test(tel);
  }

const validateInputs = () => {
    const nameValue = fullName.value.trim();
    const emailValue = email.value.trim();
    const companyValue = company.value.trim();
    const telValue = tel.value.trim();

    if(nameValue === '' || !isValidName(nameValue)) {
        setError(fullName, 'Ве молиме внесете го вашето име и презиме');
    } else {
        setSuccess(fullName);
    }

    if(emailValue === '') {
        setError(email, 'Ве молиме внесете ја вашата контакт имејл адреса');
    } else if (!isValidEmail(emailValue)) {
        setError(email, 'Внесената имејл адреса е невалидна');
    } else {
        setSuccess(email);
    }

    if(companyValue === '') {
        setError(company, 'Ве молиме внесете го името на вашата компанија');
    } else {
        setSuccess(company);
    }

    if(telValue === '') {
        setError(tel, 'Ве молиме внесете го вашиот контакт телефонски број');
    } else if(!isValidTel(telValue)){
        setError(tel, "Ве молиме внесете валиден телефонски број")
    } else {
        setSuccess(tel);
    }

    if(type.innerHTML === 'Изберете тип на студент') {
        type.style.borderColor = "#ff3860";
        e.preventDefault();
    } else {
        type.style.borderColor = "#09c372";
    }
};






