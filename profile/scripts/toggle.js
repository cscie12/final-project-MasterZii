document.body.style.backgroundColor = '#004E97'; // Sets initial background color to the default blue in the "professional" version

document.getElementById('profile-toggle').addEventListener('change', function ()
{
    var professional = document.getElementById('professional');
    var dating = document.getElementById('dating');

    if (this.checked) {
        professional.style.display = 'none';
        dating.style.display = 'block';
        document.body.style.backgroundColor = '#970035'; // This is a pinkish color for the dating version
    } else {
        professional.style.display = 'block';
        dating.style.display = 'none';
        document.body.style.backgroundColor = '#004E97'; // This is a pro looking blue, think Facebook, Twitter, LinkedIn, etc.
    }
});
