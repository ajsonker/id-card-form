<script>
const scriptURL = "https://script.google.com/macros/s/AKfycbxnovXd9eoC2XR433OBZVi_oJQRSuTM986MKtJnLYn9elqXzDMs7vzsLuQ5ybW61WAhGw/exec";

document.getElementById("myForm").addEventListener("submit", function(e){
    e.preventDefault();

    const photoFile = document.querySelector('input[type="file"]').files[0];
    const reader = new FileReader();

    reader.onload = function () {

        const data = {
            name: document.querySelector('[name="name"]').value,
            designation: document.querySelector('[name="designation"]').value,
            dob: document.querySelector('[name="dob"]').value,
            fhname: document.querySelector('[name="fhname"]').value,
            appointment: document.querySelector('[name="appointment"]').value,
            retirement: document.querySelector('[name="retirement"]').value,
            blood: document.querySelector('[name="blood"]').value,
            ppo: document.querySelector('[name="ppo"]').value,
            mark: document.querySelector('[name="mark"]').value,
            nominee: document.querySelector('[name="nominee"]').value,
            phone: document.querySelector('[name="phone"]').value,
            address: document.querySelector('[name="address"]').value,
            photo: reader.result   // base64 photo
        };

        fetch(scriptURL, {
            method: "POST",
            body: JSON.stringify(data)
        })
        .then(res => res.json())
        .then(() => {
            alert("Form Submitted Successfully");
            document.getElementById("myForm").reset();
        })
        .catch(err => alert("Error"));
    };

    reader.readAsDataURL(photoFile);
});
</script>
