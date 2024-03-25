const parentMenus = document.querySelectorAll('.parent-menu');
const header = document.querySelector('header');


parentMenus.forEach(parentMenu => {
    parentMenu.addEventListener('mouseenter', function() {
    
        header.classList.add('header-hover');
    });

    parentMenu.addEventListener('mouseleave', function() {
       
        header.classList.remove('header-hover');
    });
});

function toggleMenu() {
    var menuList = document.querySelector('.menu ul');
    if (menuList.style.display === 'block') {
        menuList.style.display = 'none';
    } else {
        menuList.style.display = 'block';
    }
}

document.addEventListener('DOMContentLoaded', function() {
    const parentMenuLinks = document.querySelectorAll('.link-parent-menu');

    parentMenuLinks.forEach(function(link) {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            const submenu = this.nextElementSibling;
            toggleSubMenu(submenu);
        });
    });

    function toggleSubMenu(submenu) {
        if (submenu.classList.contains('show')) {
            submenu.classList.remove('show');
        } else {
            // parentMenuLinks.remove('show');
            submenu.classList.add('show');
        }
    }
});
