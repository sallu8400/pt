const products = document.querySelectorAll(".swiper-slide");

var productList = Array.from(products).map((el) => {
    el.addEventListener('click', function () {
        //console.log(el.getElementsByTagName('h1').innerHTML);
    });
    return el.getElementsByTagName('h1').innerHTML;
});

console.log(productList);





document.addEventListener("DOMContentLoaded", function () {
    const enquiryButtons = document.querySelectorAll("[data-product-name]");

    enquiryButtons.forEach((button) => {
        button.addEventListener("click", function () {
            const productName = button.getAttribute("data-product-name");
            const productInput = document.getElementById("product");
            productInput.value = productName;
        });
    });
});



function validateSubmit() {
    console.log("here this is Validate form")
    let FullName = document.getElementById("firstName").value.trim();
    let email = document.getElementById("email").value.trim();
    let product = document.getElementById("product").value.trim();
    let quantity = document.getElementById("quantity").value.trim();
    let productDescription = document.getElementById("productDescription").value.trim();
    let ErrorMsg = document.getElementById("FormError");
    let regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if(!FullName){
        ErrorMsg.textContent = 'Enter Fullname';
        ErrorMsg.classList.replace("d-none","d-block");
        return;
    }
    
    if(!email){
        ErrorMsg.textContent = 'Enter Email';
        ErrorMsg.classList.replace("d-none","d-block");
        return;
    }
    if (!regex.test(email)) {
        ErrorMsg.textContent = 'Enter a valid Email';
        ErrorMsg.classList.replace("d-none", "d-block");
        return; // <--- Add this too, to stop form submission if invalid
    }
    
    if(!product ){
        ErrorMsg.textContent = 'Enter Product Name';
        ErrorMsg.classList.replace("d-none","d-block");
        return;
    }
    if (!quantity || isNaN(quantity) || parseInt(quantity) <= 0) {
        ErrorMsg.textContent = 'Enter a valid Quantity';
        ErrorMsg.classList.replace("d-none", "d-block");
        return;
    }
    
    if(!productDescription){
        ErrorMsg.textContent = 'Enter description of product';
        ErrorMsg.classList.replace("d-none","d-block");
        return;
    }
    ErrorMsg.classList.replace("d-block","d-none");

        // Hide the error and proceed   
        // Error.style.display = "none";
        let jdata = {
            fullname: FullName,
            email: email,
            productname: product,
            quantity: quantity,
            description: productDescription,
        };
        
        const modal = document.getElementById('enquiryModal');
                    modal.classList.remove("show");
                    modal.style.display = "none";
                    modal.setAttribute("aria-hidden", "true");
                    
                    // Remove modal backdrop(s)
                    document.querySelectorAll('.modal-backdrop').forEach(el => el.remove());
                    
                    // Optionally remove 'modal-open' class from body
                    document.body.classList.remove('modal-open');
                    
                    // Optionally remove inline padding-right set by Bootstrap
                    document.body.style.paddingRight = '';

        Swal.fire({
            title: "Please wait...",
            html: "Connecting to PrintoGifts...",
            allowOutsideClick: false,
            didOpen: () => {
                Swal.showLoading();
            }
        });
        $.ajax({
            type: "POST",
            contentType: "application/x-www-form-urlencoded",
            url: "https://apienquiryemail.salesgenie.in/YatraIndia/SendEmail",
            data: jdata,
            dataType: "json",
            beforeSend: function () {
                $("#btnSubmit").html("Please wait...");
                $("#btnSubmit").prop("disabled", true).css("background", "grey");
            },
            success: function (data) {
                if (data.success === true) {
                    

                    const input = document.getElementById('product');
                    Swal.close()
                    Swal.fire({
                        icon: 'success',
                        title: 'Thank You!',
                        text: 'Soon we will connect with you',
                        confirmButtonColor: '#28a745',
                        confirmButtonText: 'OK'
                    }).then(() => {
                        location.reload();
                        
                    });
                } else {
                    resetForm();
                    Swal.fire({
                        icon: 'error',
                        title: 'Error',
                        text: data.message || 'Something went wrong.',
                        confirmButtonColor: '#dc3545',
                        confirmButtonText: 'OK'
                    });
                }
            },
            error: function () {
                var modal = new bootstrap.Modal(document.getElementById('enquiryModal'));
                modal.hide();
        
                resetForm();
                Swal.fire({
                    icon: 'error',
                    title: 'Server Error',
                    text: 'Unable to process your request right now.',
                    confirmButtonColor: '#dc3545',
                    confirmButtonText: 'OK'
                }).then(() => {
                    location.reload();
                });
            },
        });
        
    
}

// below ajax is for Enquiry button at the header
// document.getElementById('submitEnquiryForm').addEventListener('click', function () 
function EnquiryFomrHeader (){
    const ErrorMsg = document.getElementById('FormError1');

    
        Email = $('#email1').val().trim(),
        Name = $('#firstName1').val().trim(),
        Product = $('#product1').val().trim(),
        Numberis = parseInt($('#quantity1').val()),
        Description = $('#productDescription1').val().trim()
    

    if (!Name) {
        ErrorMsg.textContent = 'Please Enter Fullname';
        ErrorMsg.classList.replace("d-none", "d-block");
        return;
    }

    if (!Email) {
        ErrorMsg.textContent = 'Please Enter Email';
        ErrorMsg.classList.replace("d-none", "d-block");
        return;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(Email)) {
        ErrorMsg.textContent = 'Please Enter Valid Email Address';
        ErrorMsg.classList.replace("d-none", "d-block");
        return;
    }

    if (!Product) {
        ErrorMsg.textContent = 'Please Enter Product Name';
        ErrorMsg.classList.replace("d-none", "d-block");
        return;
    }

    if (isNaN(Numberis) || Numberis <= 0) {
        ErrorMsg.textContent = 'Please Enter Quantity Of Product';
        ErrorMsg.classList.replace("d-none", "d-block");
        return;
    }

    if (!Description) {
        ErrorMsg.textContent = 'Write some description for product';
        ErrorMsg.classList.replace("d-none", "d-block");
        return;
    }

    let jdata = {
        email: Email,
        fullname: Name,
        productname: Product,
        quantity: Numberis,
        description: Description
    };
    ErrorMsg.classList.replace("d-block", "d-none");
    // console.log(jdata)
    const modal = document.getElementById('enquiryModal1');
    modal.classList.remove("show");
    modal.style.display = "none";
    modal.setAttribute("aria-hidden", "true");

    document.querySelectorAll('.modal-backdrop').forEach(el => el.remove());
    document.body.classList.remove('modal-open');
    document.body.style.paddingRight = '';
    Swal.fire({
        title: "Please wait...",
        html: "Connecting to PrintoGifts...",
        allowOutsideClick: false,
        didOpen: () => {
            Swal.showLoading();
        }
    });
    $.ajax({
        type: "POST",
        // url: "https://localhost:44344/Printo/SendEmail",
        url: "https://apienquiryemail.salesgenie.in/YatraIndia/SendEmail",
        data: jdata,
        success: function (res) {
            if (res.success) {
               
                Swal.close();
                Swal.fire({
                    icon: 'success',
                    title: 'Thank You!',
                    text: 'Soon we will connect with you',
                    confirmButtonColor: '#28a745',
                    confirmButtonText: 'OK'
                }).then(() => {
                    setTimeout(() => {
                        location.reload();
                    }, 200);
                });
            }
        }
    });
};

// below is ajax for Contact form in index page 

function ContactForm(){

    
    let jdata = {
        fullname: $('#ContactName').val().trim(),
        email: $('#ContactEmail').val().trim(),
        message: $('#exampleFormControlTextarea1').val().trim(),
        mobile: parseInt($('#ContactPhone').val())
    };

    if (!jdata.fullname) {
        ErrorMsg.textContent = 'Please Enter Full Name';
        ErrorMsg.classList.replace("d-none", "d-block");
        return;
    }

    if (!jdata.email) {
        ErrorMsg.textContent = 'Please Enter Email';
        ErrorMsg.classList.replace("d-none", "d-block");
        return;
    }
    if(!jdata.mobile){
        ErrorMsg.textContent = 'Please Enter Mobile Number ';
        ErrorMsg.classList.replace("d-nont","d-block");
        return;
    }
    let mobileStr = $('#ContactPhone').val().trim();

    if (!/^\d{10,11}$/.test(mobileStr)) {
        ErrorMsg.textContent = 'Please enter a valid 10 or 11-digit mobile number';
        ErrorMsg.classList.replace("d-none", "d-block");
        return;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(jdata.email)) {
        ErrorMsg.textContent = 'Please Enter Valid Email Address';
        ErrorMsg.classList.replace("d-none", "d-block");
        return;
    }

    if (!jdata.message) {
        ErrorMsg.textContent = 'Enter Your Message ...';
        ErrorMsg.classList.replace("d-none", "d-block");
        return;
    }

    

    ErrorMsg.classList.replace("d-block", "d-none");
    
    Swal.fire({
        title: "Please wait...",
        html: "Connecting to PrintoGifts...",
        allowOutsideClick: false,
        didOpen: () => {
            Swal.showLoading();
        }
    });

    $.ajax({
        type: "POST",
        // url: "https://localhost:44344/Printo/ContactMail",
        url: "https://apienquiryemail.salesgenie.in/YatraIndia/ContactMail",
        data: jdata,
        success: function (res) {

            if (res.success) {
                const modal = document.getElementById('enquiryModal1');
                modal.classList.remove("show");
                modal.style.display = "none";
                modal.setAttribute("aria-hidden", "true");

                document.querySelectorAll('.modal-backdrop').forEach(el => el.remove());
                document.body.classList.remove('modal-open');
                document.body.style.paddingRight = '';
                
                Swal.close();
                Swal.fire({
                    icon: 'success',
                    title: 'Thank You!',
                    text: 'Soon we will connect with you',
                    confirmButtonColor: '#28a745',
                    confirmButtonText: 'OK'
                }).then(() => {
                    setTimeout(() => {
                        location.reload();
                    }, 200);
                });
            }
        }
    });

}

function SubmitForm() {
    console.log('Submit form triggered via enquiry');
    let fullName = document.getElementById("Name").value.trim();
    let email = document.getElementById("email").value.trim();
    let phone = document.getElementById("phone").value.trim();
    let message = document.getElementById("message").value.trim();
    let error = document.getElementById("error");

    let emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if (!fullName) {
        showError("Please enter your name");
    } else if (!email) {
        showError("Please enter your email");
    } else if (!emailRegex.test(email)) {
        showError("Please enter a valid email");
    } else if (!phone) {
        showError("Please enter your phone number");
    } else if (!message) {
        showError("Please enter a message");
    } else {
        // Hide error and proceed
        error.style.display = "none";
        let jdata = {
            Name: fullName,
            Email: email,
            Contact: phone,
            Message: message,
        };

        $.ajax({
            type: "POST",
            contentType: "application/x-www-form-urlencoded",
            url: "http://localhost:59091/YatraIndia/PrintoGiftsEnquiryMail",
            data: jdata,
            dataType: "json",
            beforeSend: function () {
                $("#btnSubmit").html("Please wait...");
                $("#btnSubmit").prop("disabled", true).css("background", "grey");
            },
            success: function (data) {
                if (data.Code === 201) {
                    resetForm();
                    window.location.href = "thankyou.html";
                } else {
                    resetForm();
                    window.location.href = "error.html";
                }
            },
            error: function () {
                resetForm();
                window.location.href = "error.html";
            },
            complete: function () {
                resetButton();
            },
        });
    }
}

    function showError(message) {
        Error.style.display = "block";
        Error.innerHTML = message;
    }

    function resetForm() {
       
        document.getElementById("firstName").value = "";
        document.getElementById("email").value = "";
        document.getElementById("product").value = "";
        document.getElementById("quantity").value = "";
        document.getElementById("productDescription").value = "";
        document.getElementById("phone").value = "";
        document.getElementById("message").value = "";
        document.getElementById("Name").value = "";
    }

    function resetButton() {
        $("#btnSubmit").html("Submit");
        $("#btnSubmit").prop("disabled", false).css("background", "black");
    }
