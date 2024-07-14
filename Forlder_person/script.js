document.addEventListener("DOMContentLoaded", () => {
    const profileImg = document.getElementById("profile-img");
    profileImg.classList.add("visible");

    const projects = document.querySelectorAll(".project");

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1
    });

    projects.forEach(project => {
        observer.observe(project);
    });

    // Modal functionality
    const modals = document.querySelectorAll('.modal');
    const projectElements = document.querySelectorAll('.project');
    const closeButtons = document.querySelectorAll('.close');

    projectElements.forEach((project, index) => {
        project.addEventListener('click', () => {
            document.getElementById(`modal${index + 1}`).style.display = 'block';
        });
    });

    closeButtons.forEach(button => {
        button.addEventListener('click', () => {
            document.getElementById(button.getAttribute('data-modal')).style.display = 'none';
        });
    });

    window.addEventListener('click', (event) => {
        if (event.target.classList.contains('modal')) {
            event.target.style.display = 'none';
        }
    });

    // Scroll to top button functionality
    const scrollTopBtn = document.getElementById('scrollTopBtn');

    window.onscroll = function() {
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            scrollTopBtn.style.display = "block";
        } else {
            scrollTopBtn.style.display = "none";
        }
    };

    scrollTopBtn.addEventListener('click', () => {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    });
});
