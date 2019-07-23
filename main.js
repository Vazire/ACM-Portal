// Listen for a form submit
const form = document.querySelector('.regform');
form.addEventListener('submit', e => {
  e.preventDefault();

  let candidate = form.cname.value;
  let year = form.year.value;
  let branch = form.branch.value;
  let email = form.email.value;
  let contact = form.phone.value;
  let regByName = form.regname.value;
  let memType = form.memtype.value;

  console.log(candidate, year, branch, email, contact, regByName, memType);

});
