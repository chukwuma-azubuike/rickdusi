export default function useSideNav() {

    const revealSideNav = (id) => {
        document.getElementById(id).style.display = 'block';
        setTimeout(() => {
            document.getElementById(id).style.opacity = 1;
        })
        document.getElementById(id).style.right = '0';
    }

    const hideSideNav = (id) => {
        document.getElementById(id).style.opacity = 0;
        setTimeout(() => {
            document.getElementById(id).style.display = 'none';
        }, 300)
    }

    return {
        revealSideNav,
        hideSideNav
    }
}