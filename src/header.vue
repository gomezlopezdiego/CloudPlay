<template>
    <header>
        <!-- header inner -->
        <div class="header">
            <div class="container">
                <div class="row">
                    <div class="col-xl-2 col-lg-2 col-md-2 col-sm-2 col logo_section">
                        <div class="full">
                            <div class="center-desk">
                                <div class="logo">
                                    <a href="index.html"><img src="images/logo-mision.jpg" alt="logo" /></a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-xl-8 col-lg-8 col-md-10 col-sm-10">
                        <div class="menu-area">
                            <div class="limit-box">
                                <nav class="main-menu">
                                    <ul class="menu-area-main">
                                        <li class="active"> <a href="index.html">Home</a> </li>
                                        <li> <a href="#about">about</a> </li>
                                        <li> <a href="#screenshot"> Albums</a> </li>
                                        
                                        <li> <a href="#contact">Contact</a> </li>
                                        <li> <a href="#contact">Login</a> </li>
                                    </ul>
                                </nav>
                            </div>
                        </div>
                    </div>
                    <div class="col-xl-2 col-lg-2 col-md-2 col-sm-2">
                        <form class="search">
                            <input class="form-control" type="text" placeholder="Search">
                            <button><img src="images/search_icon.png"></button>
                        </form>
                    </div>
                </div>
            </div>
            <!-- end header inner -->
    </header>
    <!-- end header -->

</template>

<style>

 .logo_section {
     text-align: center;
}
 .logo {
     float: left;
}
 nav.main-menu {
     float: right;
     margin-left: 0;
}
 .menu-area-main li:hover a, .menu-area-main li:focus a {
     color: #fff;
}
 .menu-area-main li.active a {
     color: #fff;
     background: #000;
     box-shadow: #9d9d9d66 0px 0px 56px 26px;
}
 .right_cart_section {
     float: right;
     width: auto;
}
 .right_cart_section ul {
     float: left;
     min-height: auto;
     margin: 0;
     padding: 12px 0 0;
}
 .right_cart_section .cart_icons {
     padding: 18px 0 0;
}
 .main-menu ul>li nth:child(5) a {
     padding-right: 0px;
}
 .right_cart_section ul li {
     float: left;
     font-size: 17px;
     font-weight: 400;
     color: #fff;
     margin-right: 30px;
}
 .right_cart_section ul.cart_update li {
     font-size: 13px;
     color: #ccc;
     line-height: normal;
     margin: 0;
     font-weight: 300;
}
 .right_cart_section ul.cart_update li span {
     font-size: 18px;
     font-weight: 300;
     color: #fff;
     line-height: 21px;
}
 .right_cart_section ul li i {
     margin-right: 10px;
     margin-top: 5px;
     float: left;
     color: #fff;
     font-size: 21px;
}
 .right_cart_section ul li a {
     color: #fff;
}
/*-- end header middle --*/
 .top-bar-info {
     background: #111111;
     padding: 5px 0px;
}
 .top-menu-left {
     float: left;
}
 .top-menu-left li {
     position: relative;
     display: inline-block;
     margin-right: 11px;
     padding-right: 12px;
}
 .top-menu-left li::before {
     content: '';
     position: absolute;
     right: 0;
     top: 9px;
     height: 10px;
     border-right: 1px dotted #999;
}
 .top-menu-left li:last-child::before {
     display: none;
}
 .top-menu-left li:last-child {
     padding: 0px;
     margin: 0px;
}
 .top-menu-left li a {
     color: #ffffff;
     font-size: 12px;
     text-transform: uppercase;
     text-decoration: none;
}
 .top-menu-left li a:hover {
     color: #38c8a8;
}
 .right-dropdown-language {
     float: right;
     margin-left: 12px;
}
 .dropdown-bar .dropdown-link {
     position: absolute;
     z-index: 1009;
     top: 40px;
     left: 0;
     right: auto;
     min-width: 50px;
     padding: 15px;
     background: #ffffff;
     list-style: none;
     border: 2px solid #38c8a8;
     opacity: 0;
     visibility: hidden;
     -webkit-box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
     box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
     -webkit-transition: opacity 0.2s ease 0s, visibility 0.2s linear 0s;
     -o-transition: opacity 0.2s ease 0s, visibility 0.2s linear 0s;
     transition: opacity 0.2s ease 0s, visibility 0.2s linear 0s;
     text-align: left;
}
 .dropdown-bar:hover .dropdown-link {
     opacity: 1;
     visibility: visible;
     top: 25px;
}
 .dropdown-bar.right-dropdown-language>a::after {
     font-family: 'FontAwesome';
     content: "\f107";
     text-decoration: none;
     padding-left: 4px;
     color: #ffffff;
}
 .right-dropdown-language>a {
     line-height: 10px;
     padding: 5px 5px;
     cursor: pointer;
}
 .dropdown-bar .dropdown-link li a {
     color: #111111;
     display: block;
     font-size: 12px;
     line-height: 15px;
     padding: 5px 0;
}
 .dropdown-bar .dropdown-link li a:hover {
     color: #38c8a8;
}
 .dropdown-bar .dropdown-link li a img {
     margin-right: 7px;
}
 .dropdown-bar .dropdown-link li.active {
     font-weight: bold;
}
 .right-dropdown-language .dropdown-link {
     min-width: 100px;
     padding: 7px 10px;
     color: #111111;
}
 .dropdown-bar {
     position: relative;
     padding: 0 5px;
     font-size: 13px;
}
 .dropdown-bar .dropdown-link.right-sd {
     left: auto;
     right: 0;
}
 .right-dropdown-currency {
     float: right;
     margin-left: 12px;
}
 .dropdown-bar.right-dropdown-currency>a::after {
     font-family: 'FontAwesome';
     content: "\f107";
     text-decoration: none;
     padding-left: 4px;
     color: #ffffff;
}
 .right-dropdown-currency>a {
     line-height: 10px;
     padding: 5px 5px;
     cursor: pointer;
     color: #ffffff;
}
 .right-dropdown-currency .dropdown-link {
     min-width: 100px;
     padding: 7px 10px;
     color: #111111;
}
 .right-dropdown-currency .dropdown-link {
     min-width: 55px;
     padding: 7px 10px;
}
 .right-dropdown-currency .dropdown-link li a span.symbol {
     margin-right: 7px;
}
 #login-modal .modal-content {
     border-radius: 0px;
}
 #login-modal .modal-content .modal-header {
     background: #38c8a8;
     border-radius: 0;
}
 #login-modal .modal-content .modal-body .form-group input {
     background: #ffffff;
     border: 1px solid #c8c8c8;
     border-radius: 0px;
}
 #login-modal .modal-content .modal-body .form-group input:focus {
     border: 1px solid #c8c8c8 !important;
}
 #login-modal .modal-content form {
     margin-bottom: 10px;
}
 .modal-title {
     padding: 0px;
     color: #ffffff;
     font-size: 18px;
     text-transform: uppercase;
}
 .btn-template-outlined {
     background: #111111;
     color: #ffffff;
     border: none;
     border-radius: 0px;
}
 .btn-template-outlined i {
     padding-right: 10px;
}
 .text-muted {
     padding: 10px 0px;
}
 .slogan-line {
     float: right;
     color: #ffffff;
     font-size: 13px;
}
 .middle-area {
     padding: 30px 0px;
}
 .header-search {
     padding: 3px 0px;
}
 .header-search form {
     position: relative;
     -webkit-box-shadow: 0px 1px 10px -1px rgba(0, 0, 0, 0.2);
     box-shadow: 0px 1px 10px -1px rgba(0, 0, 0, 0.2);
}
 .header-search .btn-group.bootstrap-select {
     position: absolute;
     left: 0px;
     top: 0px;
}
 .header-search input {
     width: 100%;
     min-height: 45px;
     border-radius: 0px;
     border: none;
     padding-left: 15px;
     border: 1px solid #e0e7ed;
}
 .header-search form .search-btn {
     position: absolute;
     right: 0;
     top: 0;
     border: 0;
     color: #fff;
     font-size: 20px;
     padding: 4px 15px;
     border-radius: 0px;
     background-color: #38c8a8;
     cursor: pointer;
}
 .header-search form .search-btn:hover {
     background: #111111;
 }
</style>