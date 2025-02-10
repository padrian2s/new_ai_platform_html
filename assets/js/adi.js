    function showDetails(sectionId) {
      document.querySelectorAll('.details-section').forEach(section => {
        section.classList.remove('active');
      });
      document.getElementById(sectionId).classList.add('active');
    }