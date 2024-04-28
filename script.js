const container = document.getElementById('container');
const registerBtn = document.getElementById('register');
const loginBtn = document.getElementById('login');

registerBtn.addEventListener('click', () => {
    container.classList.add("active");
});

loginBtn.addEventListener('click', () => {
    container.classList.remove("active");
});

function validateForm(){
  function validateForm(event) {
    event.preventDefault(); // Prevent default form submission

    var password = document.getElementById("password").value;
    var confirmPassword = document.getElementById("confirm_password").value;
    var passwordError = document.getElementById("password_error");

    if (password.length < 8) {
        passwordError.textContent = "Password should be at least 8 characters long.";
        return false;
    } else if (password !== confirmPassword) {
        passwordError.textContent = "Passwords do not match.";
        return false;
    }
  }
}

document.getElementById('country').addEventListener('change', function() {
    var country = this.value;
    var phoneInput = document.getElementById('phone');
    var phoneLabel = document.querySelector('label[for="phone"]');
    switch (country) {
      case 'us':
        phoneInput.pattern = "[0-9]{3}-[0-9]{3}-[0-9]{4}";
        phoneLabel.textContent = "Phone Number (XXX-XXX-XXXX):";
        break;
      case 'uk':
        phoneInput.pattern = "[0-9]{4}-[0-9]{3}-[0-9]{3}";
        phoneLabel.textContent = "Phone Number (XXXX-XXX-XXX):";
        break;
      case 'fr':
        phoneInput.pattern = "[0-9]{2} [0-9]{2} [0-9]{2} [0-9]{2}";
        phoneLabel.textContent = "Phone Number (XX XX XX XX):";
        break;
      case 'ph':
        phoneInput.pattern = "[0-9]{3} [0-9]{3} [0-9]{4}";
        phoneLabel.textContent = "Phone Number (XXX XXX XXXX):";
        break;
      case 'au':
        phoneInput.pattern = "[0-9]{4} [0-9]{3} [0-9]{3}";
        phoneLabel.textContent = "Phone Number (XXXX XXX XXX):";
        break;
      case 'ca':
        phoneInput.pattern = "[0-9]{3}-[0-9]{3}-[0-9]{4}";
        phoneLabel.textContent = "Phone Number (XXX-XXX-XXXX):";
        break;
      case 'de':
        phoneInput.pattern = "[0-9]{4} [0-9]{3} [0-9]{4}";
        phoneLabel.textContent = "Phone Number (XXXX XXX XXXX):";
        break;
      case 'it':
        phoneInput.pattern = "[0-9]{2} [0-9]{2} [0-9]{3} [0-9]{4}";
        phoneLabel.textContent = "Phone Number (XX XX XXX XXXX):";
        break;
      case 'jp':
        phoneInput.pattern = "[0-9]{2}-[0-9]{4}-[0-9]{4}";
        phoneLabel.textContent = "Phone Number (XX-XXXX-XXXX):";
        break;
      case 'kr':
        phoneInput.pattern = "[0-9]{3}-[0-9]{4}-[0-9]{4}";
        phoneLabel.textContent = "Phone Number (XXX-XXXX-XXXX):";
        break;
      case 'mx':
        phoneInput.pattern = "[0-9]{2}-[0-9]{2}-[0-9]{4}-[0-9]{4}";
        phoneLabel.textContent = "Phone Number (XX-XX-XXXX-XXXX):";
        break;
      case 'ru':
        phoneInput.pattern = "[0-9]{4}-[0-9]{2}-[0-9]{2}-[0-9]{2}";
        phoneLabel.textContent = "Phone Number (XXXX-XX-XX-XX):";
        break;
      case 'br':
        phoneInput.pattern = "[0-9]{2} [0-9]{4}-[0-9]{4}";
        phoneLabel.textContent = "Phone Number (XX XXXX-XXXX):";
        break;
      case 'cn':
        phoneInput.pattern = "[0-9]{3}-[0-9]{4}-[0-9]{4}";
        phoneLabel.textContent = "Phone Number (XXX-XXXX-XXXX):";
        break;
      case 'es':
        phoneInput.pattern = "[0-9]{3} [0-9]{3} [0-9]{3}";
        phoneLabel.textContent = "Phone Number (XXX XXX XXX):";
        break;
      case 'in':
        phoneInput.pattern = "[0-9]{2}-[0-9]{4}-[0-9]{4}";
        phoneLabel.textContent = "Phone Number (XX-XXXX-XXXX):";
        break;
      case 'id':
        phoneInput.pattern = "[0-9]{4}-[0-9]{4}-[0-9]{4}";
        phoneLabel.textContent = "Phone Number (XXXX-XXXX-XXXX):";
        break;
      case 'sa':
        phoneInput.pattern = "[0-9]{2}-[0-9]{3}-[0-9]{4}-[0-9]{4}";
        phoneLabel.textContent = "Phone Number (XX-XXX-XXXX-XXXX):";
        break;
      case 'za':
        phoneInput.pattern = "[0-9]{2} [0-9]{3} [0-9]{4}";
        phoneLabel.textContent = "Phone Number (XX XXX XXXX):";
        break;
      case 'tr':
        phoneInput.pattern = "[0-9]{3} [0-9]{3} [0-9]{2} [0-9]{2}";
        phoneLabel.textContent = "Phone Number (XXX XXX XX XX):";
        break;
      case 'ar':
        phoneInput.pattern = "[0-9]{4} [0-9]{4}";
        phoneLabel.textContent = "Phone Number (XXXX XXXX):";
        break;
      case 'ch':
        phoneInput.pattern = "[0-9]{3} [0-9]{3} [0-9]{4}";
        phoneLabel.textContent = "Phone Number (XXX XXX XXXX):";
        break;
      case 'co':
        phoneInput.pattern = "[0-9]{3} [0-9]{3} [0-9]{4}";
        phoneLabel.textContent = "Phone Number (XXX XXX XXXX):";
        break;
      case 'eg':
        phoneInput.pattern = "[0-9]{3}-[0-9]{3}-[0-9]{4}";
        phoneLabel.textContent = "Phone Number (XXX-XXX-XXXX):";
        break;
      case 'ae':
        phoneInput.pattern = "[0-9]{3}-[0-9]{3}-[0-9]{4}";
        phoneLabel.textContent = "Phone Number (XXX-XXX-XXXX):";
        break;
      case 'th':
        phoneInput.pattern = "[0-9]{3} [0-9]{4} [0-9]{4}";
        phoneLabel.textContent = "Phone Number (XXX XXXX XXXX):";
        break;
      case 'vn':
        phoneInput.pattern = "[0-9]{3} [0-9]{3} [0-9]{4}";
        phoneLabel.textContent = "Phone Number (XXX XXX XXXX):";
        break;
      case 'pl':
        phoneInput.pattern = "[0-9]{3} [0-9]{3} [0-9]{3}";
        phoneLabel.textContent = "Phone Number (XXX XXX XXX):";
        break;
      case 'nl':
        phoneInput.pattern = "[0-9]{2}-[0-9]{3}-[0-9]{4}";
        phoneLabel.textContent = "Phone Number (XX-XXX-XXXX):";
        break;
      case 'se':
        phoneInput.pattern = "[0-9]{3}-[0-9]{2}-[0-9]{2}";
        phoneLabel.textContent = "Phone Number (XXX-XX-XX):";
        break;
      case 'be':
        phoneInput.pattern = "[0-9]{2} [0-9]{3} [0-9]{2} [0-9]{2}";
        phoneLabel.textContent = "Phone Number (XX XXX XX XX):";
        break;
      case 'pt':
        phoneInput.pattern = "[0-9]{2} [0-9]{4} [0-9]{3}";
        phoneLabel.textContent = "Phone Number (XX XXXX XXX):";
        break;
      case 'at':
        phoneInput.pattern = "[0-9]{4} [0-9]{3} [0-9]{3}";
        phoneLabel.textContent = "Phone Number (XXXX XXX XXX):";
        break;
      case 'gr':
        phoneInput.pattern = "[0-9]{3} [0-9]{3} [0-9]{4}";
        phoneLabel.textContent = "Phone Number (XXX XXX XXXX):";
        break;
      case 'fi':
        phoneInput.pattern = "[0-9]{3} [0-9]{3} [0-9]{3}";
        phoneLabel.textContent = "Phone Number (XXX XXX XXX):";
        break;
      case 'dk':
        phoneInput.pattern = "[0-9]{2}-[0-9]{2}-[0-9]{2}-[0-9]{2}";
        phoneLabel.textContent = "Phone Number (XX-XX-XX-XX):";
        break;
      case 'no':
        phoneInput.pattern = "[0-9]{3} [0-9]{2} [0-9]{3}";
        phoneLabel.textContent = "Phone Number (XXX XX XXX):";
        break;
      case 'my':
        phoneInput.pattern = "[0-9]{3}-[0-9]{7}";
        phoneLabel.textContent = "Phone Number (XXX-XXXXXXX):";
        break;
      case 'ng':
        phoneInput.pattern = "[0-9]{3} [0-9]{3} [0-9]{4}";
        phoneLabel.textContent = "Phone Number (XXX XXX XXXX):";
        break;
      case 'pk':
        phoneInput.pattern = "[0-9]{4}-[0-9]{7}";
        phoneLabel.textContent = "Phone Number (XXXX-XXXXXXX):";
        break;
      case 'sg':
        phoneInput.pattern = "[0-9]{4} [0-9]{4}";
        phoneLabel.textContent = "Phone Number (XXXX XXXX):";
        break;
      case 'il':
        phoneInput.pattern = "[0-9]{3}-[0-9]{4}-[0-9]{3}";
        phoneLabel.textContent = "Phone Number (XXX-XXXX-XXX):";
        break;
      case 'ie':
        phoneInput.pattern = "[0-9]{2}-[0-9]{5}";
        phoneLabel.textContent = "Phone Number (XX-XXXXX):";
        break;
      case 'hu':
        phoneInput.pattern = "[0-9]{2} [0-9]{3} [0-9]{4}";
        phoneLabel.textContent = "Phone Number (XX XXX XXXX):";
        break;
      case 'cz':
        phoneInput.pattern = "[0-9]{3} [0-9]{3} [0-9]{3}";
        phoneLabel.textContent = "Phone Number (XXX XXX XXX):";
        break;
      case 'ro':
        phoneInput.pattern = "[0-9]{4} [0-9]{3} [0-9]{3}";
        phoneLabel.textContent = "Phone Number (XXXX XXX XXX):";
        break;
      default:
        phoneInput.pattern = "[0-9]+";
        phoneLabel.textContent = "Phone Number:";
    }
  });

  function updateButtonText() {
    var fileInput = document.getElementById('cv');
    var submitBtn = document.getElementById('submitBtn');

    if (fileInput.files.length > 0) {
        submitBtn.innerHTML = 'Submitted';
    }
}

const reg_cont = document.getElementById("region");
    const prov_cont = document.getElementById("prov");
    const city_cont = document.getElementById("city");
    const brgy_cont = document.getElementById("brgy");
    const default_cont = document.querySelectorAll("#default");

    var region_dict = {};
    var prov_dict = {};
    var city_dict = {};

    async function appendRegion() {
        const response = await fetch("./data/refregion.json");
        region_data = await response.json();

        region_data.RECORDS.forEach(function(record){
            region_dict[record.regDesc] = record.regCode;
            let reg_opt = document.createElement("option");
            reg_opt.value = record.regDesc;
            reg_opt.innerHTML = record.regDesc;
            reg_cont.append(reg_opt);
        });
    }

    appendRegion();

    async function updateProv(){
        prov_dict = {};

        removeOptions(prov_cont);
        removeOptions(city_cont);
        removeOptions(brgy_cont);

        default_cont.forEach((el) => resetDefault(el));

        const response = await fetch("./data/refprovince.json");
        prov_data = await response.json();

        prov_data.RECORDS.forEach(function(record){
            prov_dict[record.provDesc] = record.provCode;
            let prov_opt = document.createElement("option");
            if (record.regCode == region_dict[reg_cont.value]){
                prov_opt.value = record.provDesc;
                prov_opt.innerHTML = record.provDesc;
                prov_cont.append(prov_opt);
            }
        });
    }

    async function updateCity(){
        city_dict = {};

        removeOptions(city_cont);
        removeOptions(brgy_cont);

        resetDefault(default_cont[1]);
        resetDefault(default_cont[2]);

        const response = await fetch("./data/refcitymun.json");
        city_data = await response.json();

        city_data.RECORDS.forEach(function(record){
            city_dict[record.citymunDesc] = record.citymunCode;
            let city_opt = document.createElement("option");
            if (record.provCode == prov_dict[prov_cont.value]){
                city_opt.value = record.citymunDesc;
                city_opt.innerHTML = record.citymunDesc;
                city_cont.append(city_opt);
            }
        });
    }

    async function updateBrgy(){
        
        removeOptions(brgy_cont);

        resetDefault(default_cont[2]);

        const response = await fetch("./data/refbrgy.json");
        brgy_data = await response.json();

        brgy_data.RECORDS.forEach(function(record){
            let brgy_opt = document.createElement("option");
            if (record.citymunCode == city_dict[city_cont.value]){
                brgy_opt.value = record.brgyDesc;
                brgy_opt.innerHTML = record.brgyDesc;
                brgy_cont.append(brgy_opt);
            }
        });
    }

    function removeOptions(cont){
        while(cont.lastChild.id !== "default") {
            cont.removeChild(cont.lastChild);
        }
    }

    function resetDefault(opt){
        opt.disabled = false;
        opt.selected = true;
        opt.disabled = true;
    }

    function updateFileName() {
    var input = document.getElementById('cv');
    var fileName = input.files[0].name;
    var uploadBox = document.querySelector('.upload-box');
    uploadBox.innerHTML = '<input type="file" id="cv" name="cv" accept=".pdf,.doc,.docx" onchange="updateFileName()">' +
                          '<button type="button" onclick="document.getElementById(\'cv\').click()">Choose File</button>' +
                          '<span>' + fileName + '</span>';
}

document.getElementById("registration-form").addEventListener("submit", function(event) {
        // Prevent default form submission behavior
        event.preventDefault();

        // Display pop-up message
        var confirmation = confirm("You have registered to the Seventeen system! Would you like to go back?");
        
        // If user confirms, go back
        if (confirmation) {
            window.history.back();
        }
    });

    const agreeCheckbox = document.getElementById('agreeCheckbox');
    const submitButton = document.getElementById('submitButton');

    agreeCheckbox.addEventListener('change', function() {
        submitButton.disabled = !this.checked;
    });

    