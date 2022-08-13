      
const input = document.getElementById('message') as HTMLInputElement | null;

input?.addEventListener('input', function (event) {
  const target = event.target as HTMLInputElement;
  console.log(target.value);
});