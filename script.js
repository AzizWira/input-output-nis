// create function object
function Person(nis, name, email, address, className) {
    this.nis = nis;
    this.name = name;
    this.email = email;
    this.address = address;
    this.className = className;
}

const adhan = new Person(01, 'adhan', 'adhan@gmail.com', 'indonesia', 'X PPLG 1');

adhan.value = 
`NIS : ${adhan.nis}
Name : ${adhan.name} 
Email : ${adhan.email} 
Address : ${adhan.address} 
Class : ${adhan.className}`;


const wira = new Person(02, 'wira', 'wira@gmail.com', 'indonesia', 'X PPLG 1');

wira.value = 
`NIS : ${wira.nis}
Name : ${wira.name}
Email : ${wira.email}
Address : ${wira.address}
Class : ${wira.className}`;

const aziz = new Person(222, 'aziz', 'aziz@gmail.com', 'indonesia', 'X PPLG 1')

aziz.value =
`NIS : ${aziz.nis}
Name : ${aziz.name} 
Email : ${aziz.email} 
Address : ${aziz.address} 
Class : ${aziz.className}`;

// button click
document.getElementById('btn').addEventListener('click', function () {

    // get value nis input
    let nisValue = document.getElementById('nis').value;

    if (nisValue == adhan.nis) {
        // print on html
        document.getElementById('result').value = adhan.value;
    } else if (nisValue == wira.nis) {
        document.getElementById('result').value = wira.value;
    } else if (nisValue == aziz.nis) {
        document.getElementById('result').value = aziz.value;
    } else {
        document.getElementById('result').value = 'NIS tidak ditemukan';
    }
});