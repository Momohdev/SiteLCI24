document.querySelectorAll('.buy').forEach(button => {
    button.addEventListener('click', function() {
      this.closest('.bottom').classList.add("clicked");
    });
  });
  
  document.querySelectorAll('.remove').forEach(button => {
    button.addEventListener('click', function() {
      this.closest('.bottom').classList.remove("clicked");
    });
  });
  