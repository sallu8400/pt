PrintoApp.controller("EnquiryController",["$scope","ApiCall",function($scope,ApiCall){

console.log('Enquiry controller triggered');
    $scope.SubmitForm1 = function(){
        const ErrorMsg = document.getElementById('FormError1');

        let jdata = {
            email : $('#email1').val(),
            fullname: $('#firstName1').val(),
            productname:$('#product1').val(),
            quantity: parseInt($('#quantity1').val()),
            description:$('#productDescription1').val()
        }

            if (!jdata.fullname.trim()) {
                ErrorMsg.textContent ='Please Enter Fullname'
                ErrorMsg.classList.replace("d-none","d-block");
                return;
            }
        
            if (!jdata.email.trim()) {
                ErrorMsg.textContent ='Please Enter Email'
                ErrorMsg.classList.replace("d-none","d-block");
                return ;
            }
        
            const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailPattern.test(jdata.email)) {
                ErrorMsg.textContent ='Please Enter Valid Email Address'
                ErrorMsg.classList.replace("d-none","d-block");
                return ;
            }
        
            if (!jdata.productname.trim()) {
                ErrorMsg.textContent ='Please Enter Product Name'
                ErrorMsg.classList.replace("d-none","d-block");
                return;
            }
        
            if (isNaN(jdata.quantity) || parseInt(jdata.quantity) <= 0) {
                ErrorMsg.textContent ='Please Enter Quantity Of Product'
                ErrorMsg.classList.replace("d-none","d-block");
                return ;
            }
        
            if (!jdata.description.trim()) {
                ErrorMsg.textContent ='Write some description for product '
                ErrorMsg.classList.replace("d-none","d-block");
                return ;
            }
            ErrorMsg.classList.replace("d-block","d-none");
            console.log(jdata);
        
            ApiCall.PostApiCall('Printo','SendEmail',jdata).then(res=>{
                if(res.success){



                    const modal = document.getElementById('enquiryModal1');
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
            })

    }

    $scope.ContactForm = function () {
        console.log('contact form');
    
        let jdata = {
            fullname: $('#ContactName').val().trim(),
            email: $('#ContactEmail').val().trim(),
            mobile: parseInt($('#ContactPhone').val()),
            message: $('#exampleFormControlTextarea1').val().trim()
        };
    
        const ErrorMsg = document.getElementById("ErrorMsg");
    
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
    
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(jdata.email)) {
            ErrorMsg.textContent = 'Please Enter Valid Email Address';
            ErrorMsg.classList.replace("d-none", "d-block");
            return;
        }
    
        if (!jdata.mobile) {
            ErrorMsg.textContent = 'Please Enter Phone Number';
            ErrorMsg.classList.replace("d-none", "d-block");
            return;
        }
    
        if (isNaN(jdata.mobile) || jdata.mobile.length < 6) {
            ErrorMsg.textContent = 'Please Enter Valid Phone Number';
            ErrorMsg.classList.replace("d-none", "d-block");
            return;
        }
    
        if (!jdata.message) {
            ErrorMsg.textContent = 'Please Enter Your Message';
            ErrorMsg.classList.replace("d-none", "d-block");
            return;
        }
    
        ErrorMsg.classList.replace("d-block", "d-none");
    
        console.log('there are no value ',jdata);
        ApiCall.PostApiCall('Printo','ContactMail',jdata).then(res=>{
            if(res.success){
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
        })
    };
    

}]);