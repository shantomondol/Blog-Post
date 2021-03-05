const footersData = [
    {}
];


function footerTemplate(footer) {
    return `
    <div class="blog-header">
        <div class="container">
            <div class="row flex-nowrap justify-content-between align-items-center">
                <div class="col-6 pt-1">
                    <ul>
                        <li><a href="#" title="Privacy"><i class="fas fa-user-secret"></i></a></li>
                        <li><a href="#" title="Terms"><i class="fas fa-file-alt"></i></a></li>
                        <li><a href="../about" title="About"><i class="fas fa-info-circle"></i></a></li>
                    </ul>
                </div>
                <div class="col-6 d-flex justify-content-end align-items-center">
                    <ul>
                        <li><a href="tel:+08801869107346" target="_blank"><i class="fas fa-phone-square-alt"></i></a></li>

                        <li><a href="mailto:shantomondol816@gmail.com" target="_blank"><i class="fas fa-envelope"></i></a></li>

                        <li><a href="https://github.com/shantomondol" target="_blank"><i class="fab fa-github"></i></a></li>
                       
                        <li><a href="https://www.facebook.com/shantomondol08" target="_blank"><i class="fab fa-facebook-square"></i></a></li>
                    </ul>
                </div>
            </div>
            <div class="row">
                <div class="col-12 text-center copyright">
                    <p>© Made with ❤ by Shanto Mondol - 2021 All rights Reserved. Design & Developed By -  <a class="shanto" href="https://shantomondol.github.io/shanto/" target="_blank">Shanto</a></p>
                </div>
            </div>
        </div>
    </div>
    `;
}


document.getElementById("footer").innerHTML = `
    ${footersData.map(footerTemplate).join("")}
  `;