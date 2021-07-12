<!DOCTYPE html>

<html lang="fr">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, minimum-scale=1.0">



    <title>Accueil | TraziShop</title>
    <meta name="keywords" content="HTML5 Template" />
    <meta name="description" content="Riode - Ultimate eCommerce Template">
    <meta name="author" content="D-THEMES">
    <!-- Favicon -->
    <link rel="icon" type="image/png" href="{{asset('images/icons/favicon.png')}}">
    <style>
        .scroll-top.show {

            visibility: visible;

            opacity: 1;

            transform: translateY(0);

            background-color: 2232bd;

        }
    </style>
    <script>
        WebFontConfig = {

            google: {
                families: ['Poppins:300,400,500,600,700,800']
            }

        };

        (function(d) {

            var wf = d.createElement('script'),
                s = d.scripts[0];

            wf.src = 'js/webfont.js';

            wf.async = true;

            s.parentNode.insertBefore(wf, s);

        })(document);
    </script>
    <link rel="stylesheet" type="text/css" href="{{asset('vendor/fontawesome-free/css/all.min.css')}}">
    <link rel="stylesheet" type="text/css" href="{{asset('vendor/animate/animate.min.css')}}">
    <!-- Plugins CSS File -->
    <link rel="stylesheet" type="text/css" href="{{asset('vendor/magnific-popup/magnific-popup.min.css')}}">
    <link rel="stylesheet" type="text/css" href="{{asset('vendor/owl-carousel/owl.carousel.min.css')}}">
    <!-- Main CSS File -->
    <link rel="stylesheet" type="text/css" href="{{asset('css/market1.min.css')}}">
    <style>
        @media screen and (max-width: 767px) {
            .label-block.cart-toggle i {
                margin-left: 18rem;
            }

            .newsletter-section .banner {
                padding: 10% 5%;
                margin-top: -5%;
            }

            .grey-section {
                margin-bottom: -7% !important;
                margin-top: -25% !important;
            }

            #partenaire {
                display: none;
            }

            .header-middle {
                padding-top: 0rem !important;
            }

            .header-top {
                display: none;
            }
        }

        .header-top .header-left {
            margin-right: 2rem;
            background-color: #1f2da7;
        }

        .header-top {
            background: #1f2da7;
            border-bottom: 1px solid #e1e1e1;
            font-size: 1.2rem;
            letter-spacing: 0;
            border: none;
        }

        .container {
            max-width: 1420px;
        }

        .main-nav {
            margin: 0 0 0 0.3rem;
            background: #1f2da7;
        }

        .btn-primary {
            color: #fff;
            border-color: #1f2da7;
            background-color: #1f2da7;
        }

        .header,
        .inner-wrap {
            background-color: #1f2da7;
        }

        body {
            margin: 0;
            overflow-x: hidden;
            font-family: Poppins, sans-serif;
            font-size: 1.4rem;
            line-height: 1.6;
            width: 1400PX;
            color: #666;
            padding: 0 10% 0 6%;
        }

        main.main {
            margin-bottom: 3%;
            margin-top: -3%;
        }

        .container {
            max-width: 1420px;
            margin-top: 10px;
        }

        .header-left,
        .header-right,
        .header-center {
            display: flex;
            align-items: center;
            margin-top: -9px !important;
        }

        figure {
            margin: 0 10px !important;
        }

        .social-links {
            display: inline-flex;
            flex-wrap: wrap;
            align-items: center;
            margin-right: 10px;
        }
    </style>
</head>

<body>
    <header>
        <body class="home market">
            <div class="page-wrapper">
                <header class="header">
                    <div class="header-top" style="background-color: #1f2da7;padding-top: 1%;padding-bottom: 1%;">
                        <div class="container">
                            <div class="header-left">
                                <p style="color: #fff;margin-bottom: 0%;margin-left: 1%;"><span style="font-size: 18px">
                                        <span>
                                        </span>
                                </p>
                            </div>
                            <div class="header-right">
                                <!-- End DropDown Menu -->
                                <a href="marketplace.php" style="color:#fff;" class="contact d-lg-show"><i class="d-icon-map"></i>Nos vendeurs</a>

                                <a href="#" class="help d-lg-show" style="color:#fff;"><i class="d-icon-info"></i>Mon compte</a>
                                <a href="login2.php" style="color:#fff;" data-toggle="login-modal"><i class="d-icon-user" style="color:#fff;"></i>Connexion</a>

                                <span class="delimiter" style="color:#fff;">/</span>
                                <a href="inscription2.php" data-toggle="login-modal" style="color:#fff;">Inscription</a>
                                <!-- End of Login -->
                            </div>
                        </div>
                    </div>
                    <!-- End HeaderTop -->
                    <div class="header-middle sticky-header fix-top sticky-content">
                        <div class="container">
                            <div class="header-left">
                                <a href="#" class="mobile-menu-toggle d-none d-sm-block">
                                    <i class="d-icon-bars2"></i>
                                </a>
                                <a href="index.php" class="logo">
                                </a>
                                <div class="dropdown cart-dropdown type2 cart-offcanvas mr-0 mr-lg-2">
                                    <a href="#" class="cart-toggle label-block link">
                                        <div class="cart-label d-lg-show">
                                            <span class="cart-name">Menu</span>
                                        </div>
                                        <i class="d-icon-bars2"></i>
                                    </a>
                                    <div class="cart-overlay"></div>
                                    <!-- End Cart Toggle -->
                                    <div class="dropdown-box">
                                        <div class="cart-header">
                                            <h4 class="cart-title">Menu</h4>
                                            <a href="#" class="btn btn-dark btn-link btn-icon-right btn-close"><i class="d-icon-arrow-left"></i>
                                                Fermer</a>
                                        </div>
                                        <div style="margin-top: 7%;margin-bottom: 7%;">
                                            <h6 style="margin-bottom: 2%;">Mes notifications</h6>
                                            <h6 style="margin-bottom: 2%;">Mes messages</h6>
                                            <h6 style="margin-bottom: 2%;">Mes amis</h6>
                                            <h6 style="margin-bottom: 2%;">Mes groupes</h6>
                                            <h6 style="margin-bottom: 2%;">Mes réservations</h6>
                                            <h6 style="margin-bottom: 2%;">Mes commandes</h6>
                                            <h6 style="margin-bottom: 2%;">Mes achats</h6>
                                        </div>
                                        <!-- End of Cart Total -->
                                        <div class="cart-action">
                                            <a href="cart.html" class="btn btn-dark btn-link">Devenir partenaire</a>
                                            <a href="checkout.html" class="btn btn-primary" style="background-color: #5580f2;color: #fff;border-radius: 5px;"><span>CREER UNE BOUTIQUE</span></a>
                                            <a href="checkout.html" class="btn" style="background-color: #fff;color: #5580f2;border-radius: 5px;"><span>CREER UN ESPACE FOIRE</span></a>
                                        </div>
                                        <!-- End of Cart Action -->
                                    </div>
                                    <!-- End Dropdown Box -->
                                </div>
                                <!-- End Logo -->
                                <div class="header-search hs-expanded">
                                    <form action="#" class="input-wrapper">
                                        <div class="select-box">
                                            <select name="cat" class="cat">
                                                <option value="all-cat" selected>Toutes les categories</option>
                                                <option value="travel">Travel</option>
                                                <option value="shopping">Shopping</option>
                                                <option value="fashion">Fashion</option>
                                                <option value="lifestyle">Lifestyle</option>
                                            </select>
                                        </div>
                                        <input type="text" class="form-control" name="search" autocomplete="off" placeholder="Rechercher ici..." required />
                                        <button class="btn btn-search" type="submit">
                                            <i class="d-icon-search"></i>
                                        </button>
                                    </form>
                                </div>
                                <!-- End Header Search -->
                            </div>
                            <div class="header-right">
                                <a href="partenaire.php"><button id="partenaire" class="btn btn-primary ml-2" type="submit" style="border-radius: 5px;padding:10px 20px 11px 17px;margin-right: 2%;">DEVENEZ PARTENAIRE</button></a>

                                <div class="icon-box icon-box-side">
                                    <div class="icon-box-icon mr-0 mr-lg-2">
                                        <i class="d-icon-phone"></i>
                                    </div>
                                    <div class="icon-box-content d-lg-show">
                                        <h4 class="icon-box-title text-dark text-normal">
                                            <a href="mailto:riode@mail.com" class="text-primary d-inline-block">Service client</a>
                                        </h4>
                                        <p><a href="tel:#">
                                            </a></li>
                                            </ul>
                                            </li>
                                            </ul>
                                            </nav>
                                    </div>
                                </div>
    </section>
</header>