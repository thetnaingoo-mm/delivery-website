
// light theme to dark theme change
const toggleButton = document.querySelector('#toggleButton');
    const selectedTheme = localStorage.getItem('selected-theme');
    const selectedIcon = localStorage.getItem('selected-icon');
    const darkTheme = 'dark-mode';
    const IconTheme = 'bx-toggle-right';
 
    const currentGetTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light';
    const currentGetIconTheme = () => toggleButton.classList.contains(IconTheme) ? 'bx-toggle-right' : 'bx-toggle-left';

    if(selectedTheme){
      document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme);
      toggleButton.classList[selectedIcon === 'bx-toggle-right' ? 'add' : 'remove'](IconTheme);
    }

    toggleButton.addEventListener('click', () => {
      document.body.classList.toggle(darkTheme);
      toggleButton.classList.toggle(IconTheme);
      localStorage.setItem('selected-theme',currentGetTheme());
      localStorage.setItem('selected-icon',currentGetIconTheme());
    })



    // navbar scroll buttom shadow 
    function scrollHeader(){
        const nav = document.getElementById('navbar')
        if(this.scrollY >= 80) nav.classList.add('shadow-sm'); else nav.classList.remove('shadow-sm')
    };

    window.addEventListener('scroll', scrollHeader);


    // Active link Added
    const sections = document.querySelectorAll('section[id]');
    
        const scrollActive = () => {
            sections.forEach(section  => {
            const sectionHeight = section.offsetHeight,
                sectionTop = section.offsetTop - 50,
                sectionId = section.getAttribute('id')
                
            if(scrollY >= sectionTop && scrollY <= sectionTop + sectionHeight ){
                document.querySelector('#navbarNav a[href*=' + sectionId + ']').classList.add('active-link');

            }else{
                document.querySelector('#navbarNav a[href*=' + sectionId + ']').classList.remove('active-link');
            }
        })
        }

        window.addEventListener('scroll',scrollActive);
