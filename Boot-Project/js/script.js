var myModal = document.getElementById('myModal')
var myInput = document.getElementById('myInput')

myModal.addEventListener('shown.bs.modal', function () {
    myInput.focus()
})
const toastTrigger = document.querySelectorAll('#liveToastBtn')
const toastLiveExample = document.getElementById('liveToast')

toastTrigger.forEach(function (item) {
    if (item) {
        item.addEventListener('click', () => {
            const toast = new bootstrap.Toast(toastLiveExample)
            toast.show()
        })
    }
})

document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll('[data-bs-toggle="popover"]').forEach(el => {
        new bootstrap.Popover(el, {
            container: "body",
            trigger: "focus"
        });
    });
    el.addEventListener("click", function () {
        tooltip.hide();
    });
    document.querySelectorAll('[data-bs-toggle="tooltip"]').forEach(el => {
        new bootstrap.Tooltip(el, {
            placement: 'bottom',
            fallbackPlacements: []
        });
    });
});
