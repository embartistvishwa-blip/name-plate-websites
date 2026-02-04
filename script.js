function updatePreview() {
  let name = document.getElementById("name").value;
  let blood = document.getElementById("blood").value;

  document.getElementById("previewName").innerText =
    name === "" ? "YOUR NAME" : name.toUpperCase();

  document.getElementById("previewBlood").innerText = blood;
}

function sendWhatsApp() {
  let name = document.getElementById("name").value;
  let blood = document.getElementById("blood").value;
  let force = document.getElementById("force").value;
  let clothEl = document.getElementById("cloth");
  let threadEl = document.getElementById("thread");
  let cloth = clothEl ? clothEl.value : '';
  let thread = threadEl ? threadEl.value : '';
  let mobile = document.getElementById("mobile").value;
  let address = document.getElementById("address").value;

  // Basic required checks (also rely on native HTML required where available)
  if (name === "" || mobile === "" || address === "" || blood === "" || force === "" || cloth === "" || thread === "") {
    alert("Please fill all required details and make selections for blood group, force, cloth and thread.");
    return;
  }

  // Build a plain message and URL-encode it (ensures ₹ and newlines survive)
  let plain = '';
  plain += 'NEW NAME PLATE ORDER\n\n';
  plain += 'Name: ' + name + '\n';
  plain += 'Blood Group: ' + blood + '\n';
  plain += 'Force: ' + force + '\n';
  if (cloth) plain += 'Cloth: ' + cloth + '\n';
  if (thread) plain += 'Thread: ' + thread + '\n';
  plain += 'Mobile: ' + mobile + '\n';
  plain += 'Address: ' + address + '\n';
  plain += 'Price: ₹299';

  let phone = '918922094097'; // seller phone (country code + number)
  let url = 'https://wa.me/' + phone + '?text=' + encodeURIComponent(plain);
  window.open(url, '_blank');
}
