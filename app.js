let data = document.getElementById("data");
let urldata = document.getElementById("urldata");

let dataList = document.createElement("ol");
let urlList = document.createElement("ol");

data.appendChild(dataList);
urldata.appendChild(urlList);

let arr1 = [];
let arr2 = [];

function submit() {
    let text = document.getElementById("text");
    let url = document.getElementById("url");

    if (text.value.trim() === "" || url.value.trim() === "") {
        Swal.fire({
            icon: 'warning',
            title: 'Missing input!',
            text: 'Please enter both bookmark name and URL.',
            confirmButtonColor: '#bb86fc'
        });
        return;
    }
    

    arr1.push(text.value);
    arr2.push(url.value);

    dataList.innerHTML += `<li>${text.value}</li>`;
    urlList.innerHTML += `<li><a href="${url.value}" target="_blank">${url.value}</a></li>`;

    localStorage.setItem("text", JSON.stringify(arr1));
    localStorage.setItem("url", JSON.stringify(arr2));


    text.value = "";
    url.value = "";
}



let save = JSON.parse(localStorage.getItem("text"));
let save1 = JSON.parse(localStorage.getItem("url"));

if (save && save1) {
    arr1 = save;
    arr2 = save1;

    for (let i = 0; i < save.length; i++) {
        dataList.innerHTML += `<li>${save[i]}</li>`;
    }

    for (let i = 0; i < save1.length; i++) {
        urlList.innerHTML += `<li><a href="${save1[i]}" target="_blank">${save1[i]}</a></li>`;
    }
}

function clearAll() {
    localStorage.clear();
    arr1 = [];
    arr2 = [];
    location.reload();
}
