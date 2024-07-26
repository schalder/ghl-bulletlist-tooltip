document.querySelectorAll('.tooltip-icon').forEach(icon => {
  const tooltip = icon.nextElementSibling;

  icon.addEventListener('mouseover', function() {
    tooltip.style.display = 'block';
  });

  icon.addEventListener('mouseout', function() {
    tooltip.style.display = 'none';
  });
});
