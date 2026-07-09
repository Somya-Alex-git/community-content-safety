const upload = document.getElementById("imageUpload");
const preview = document.getElementById("preview");

upload.addEventListener("change", function () {

    const file = upload.files[0];

    if(file){

        preview.src = URL.createObjectURL(file);

    }

});

function startModeration(){

    let choice = document.getElementById("contentType").value;

    if(choice==""){

        document.getElementById("message").innerHTML="Please select Text or Image.";

        return;

    }

    // Hide Home Section

    document.getElementById("homeSection").style.display="none";

    // Change Title

    if(choice=="text"){

        document.getElementById("pageTitle").innerHTML="Text Moderation";

        document.getElementById("textSection").style.display="block";

    }

    if(choice=="image"){

        document.getElementById("pageTitle").innerHTML="Image Moderation";

        document.getElementById("imageSection").style.display="block";

    }

    document.getElementById("submitBtn").style.display="block";
    document.getElementById("backBtn").style.display="block";

}

function submitForm(){

    let title=document.getElementById("pageTitle").innerHTML;

    if(title=="Text Moderation"){

        let text=document.getElementById("textInput").value.trim();

        if(text==""){

            document.getElementById("message").innerHTML="Please enter some text.";

            return;

        }

        document.getElementById("message").innerHTML="Text submitted successfully!";

    }

    if(title=="Image Moderation"){

        if(upload.files.length==0){

            document.getElementById("message").innerHTML="Please upload an image.";

            return;

        }

        document.getElementById("message").innerHTML="Image submitted successfully!";

    }

}
function goHome(){

    // Restore title
    document.getElementById("pageTitle").innerHTML="Community Content Moderation";

    // Show home section
    document.getElementById("homeSection").style.display="block";

    // Hide moderation sections
    document.getElementById("textSection").style.display="none";
    document.getElementById("imageSection").style.display="none";

    // Hide buttons
    document.getElementById("submitBtn").style.display="none";
    document.getElementById("backBtn").style.display="none";

    // Clear message
    document.getElementById("message").innerHTML="";

    // Clear text
    document.getElementById("textInput").value="";

    // Clear image
    document.getElementById("imageUpload").value="";
    document.getElementById("preview").src="";

    // Reset dropdown
    document.getElementById("contentType").value="";
}
