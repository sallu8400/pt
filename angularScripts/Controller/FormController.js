PrintoApp.controller("FormController",["$scope","ApiCall",function($scope,ApiCall){


    $scope.SubmitForm = function(){
        const ErrorMsg = document.getElementById('FormError');

        let jdata = {
            email : $('#email').val(),
            fullname: $('#firstName').val(),
            productname:$('#product').val(),
            quantity: parseInt($('#quantity').val()),
            description:$('#productDescription').val()
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

                    const input = document.getElementById('product');

                    if (!input.hasAttribute('readonly')) {
                        input.setAttribute('readonly', true);
                    }


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



}]);