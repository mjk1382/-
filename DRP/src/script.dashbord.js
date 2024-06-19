function displayDiscount() {
    const firstName = document.getElementById('first-name').value;
    const companyName = document.getElementById('company-name').value;
    const option = document.getElementById('Options').value;
    const percent = document.getElementById('Percent').value;
    const date = document.getElementById('Date').value;
    const mobileNumber = document.getElementById('mobile-number').value;
    const condition = document.querySelector('input[name="condition"]:checked').value;

    document.getElementById('dashboardFirstName').innerText = 'نام: ' + firstName;
    document.getElementById('dashboardCompanyName').innerText = 'نام کمپانی: ' + companyName;
    document.getElementById('dashboardOption').innerText = 'نوع کد تخفیف: ' + option;
    document.getElementById('dashboardPercent').innerText = 'درصد: ' + percent;
    document.getElementById('dashboardDate').innerText = 'زمان: ' + date;
    document.getElementById('dashboardMobileNumber').innerText = 'شماره همراه: ' + mobileNumber;
    document.getElementById('dashboardCondition').innerText = 'وضعیت: ' + condition;

    document.getElementById('discountInfo').classList.remove('hidden');
}

document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('toggleMenu').addEventListener('click', function () {
        const sidebar = document.getElementById('sidebar');
        sidebar.classList.toggle('translate-x-full');
    });

    document.getElementById('openModal').addEventListener('click', function () {
        document.getElementById('myModal').classList.remove('hidden');
    });

    document.getElementById('closeModal').addEventListener('click', function () {
        document.getElementById('myModal').classList.add('hidden');
    });

    document.getElementById('submitDiscount').addEventListener('click', function () {
        displayDiscount();
    });
});
