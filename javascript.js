const blindsDiv = document.getElementById("Blinds");

const phoneNumber = document.getElementById("phoneNumberAnchor");

window.scrollTo({ top: 0, behavior: 'smooth' });

setInterval(removeBlinds, 3000);

function removeBlinds() {
    blindsDiv.remove();
}

phoneNumber.onmousedown = function PhoneNumber(){
    navigator.clipboard.writeText("07746548635");

    alert("تم نسخ الرقم الى الحافظة! " + "(07746548635)");
};