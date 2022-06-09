function scrollFunction() {
  if (document.documentElement.scrollTop > 200) {
    document.getElementById("navbar").classList.add("noTransparent"); // نضيف الصنف في حالة تحقق الشرط
    document.querySelector(".back-top").style.display = "block";
  } else {
    document.getElementById("navbar").classList.remove("noTransparent"); // نحذف الصنف في الحالة المعاكسة
    document.querySelector(".back-top").style.display = "none";
  }
}

window.onscroll = function () {
  scrollFunction();
};
