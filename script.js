function updateProfile() {
    // Get input values
    const name = document.getElementById('name-input').value;
    const bio = document.getElementById('bio-input').value;
    const socialLink = document.getElementById('social-input').value;
    const profilePicInput = document.getElementById('profile-pic-input');
  
    // Update profile card
    document.getElementById('profile-name').innerText = name || 'Your Name';
    document.getElementById('profile-bio').innerText = bio || 'Your bio goes here...';
  
    // Update profile picture
    if (profilePicInput.files && profilePicInput.files[0]) {
      const reader = new FileReader();
      reader.onload = function (e) {
        document.getElementById('profile-pic').src = e.target.result;
      };
      reader.readAsDataURL(profilePicInput.files[0]);
    }
  
    // Update social links
    const socialLinksContainer = document.getElementById('social-links');
    socialLinksContainer.innerHTML = ''; // Clear previous links
  
    if (socialLink) {
      const linkElement = document.createElement('a');
      linkElement.href = socialLink;
      linkElement.innerText = 'Social Media';
      linkElement.target = '_blank'; // Open link in new tab
      socialLinksContainer.appendChild(linkElement);
    }
  }