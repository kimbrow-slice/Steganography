/* 

//the library is called in successfully and we can now start using our object steg and the functions encode and decode

steg.encode('someText', image)

//the encode function takes in 2 parameters. first we are now going to insert the string we would like to encode the message, next we are also going to also going to call in the source of the image we are trying to put this message into


steg.decode(image)

//the decode function takes in 1 parameter. this returns the string that is encoded within this image


var imageDataUri;

function readURL(input) {
    var reader = new FileReader();
    reader.onload = function(e) {

        imageDataUri = e.target.result;
        document.querySelector('#image1').src = e.target.result;
    }
    reader.readAsDataURL(input.files[0]);
}



function hideText() {

    document.querySelector('#image1').src = steg.encode(document.querySelector('#text').value, imageDataUri);

}


//Now we are going to define the decode function

function decode(input) {

    var reader = new FileReader();
    reader.onload = function(e) {
        document.querySelector('#decoded').innerHTML = steg.decode(e.target.result);

    }
    reader.readAsDataURL(input.files[0]);

}
*/
// how reader.readAsDataURL works is within this input we will have a area containing the files that has been inserted by the user. Once this operation is complete the function gets triggered with the result of what the file has read



//Now we are going to write the function to encode a message into the image the client uses once the submit button is clicked