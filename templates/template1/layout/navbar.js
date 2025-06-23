document.writeln(`
<nav class="navbar navbar-expand text-capitalize fixed-top bg-body">
   <div class="container-fluid container-content column-gap-3">
      <button class="navbar-toggler p-0 rounded-0 border-0 shadow-none d-block d-lg-none" data-bs-toggle="offcanvas" data-bs-target="#sidebar">
         <i class="navbar-toggler-icon"></i>
      </button>
      <h1 class="fs-reset m-0 lh-base d-lg-none">
         <img src="../../assets/img/icon-indraco.png" width="40" height="auto" class="img-default" alt="">
         <img src="../../assets/img/icon-indraco-invert.png" width="40" height="auto" class="img-invert" alt="">
      </h1>
      <div class="navbar-collapse">
         <div class="d-none d-lg-block text-uppercase fs-small">
            <script src="layout/menu-header.js"></script>
         </div>
         <ul class="nav ms-auto" style="column-gap: calc(.75rem + .5vw);">
            <li class="nav-item">
               <a href="#" class="nav-link px-0 text-reset media">
                  <div class="media-header">
                     <span class="link-icon">
                        <i class="fas fa-search fa-lg"></i>
                     </span>
                  </div>
                  <div class="media-body d-none">
                     <span class="link-text link-hover">
                        search
                     </span>
                  </div>
               </a>
            </li>
            <li class="nav-item dropdown">
               <button type="button" href="#" class="nav-link px-0 text-reset media dropdown-toggle" id="bd-theme" data-bs-toggle="dropdown" aria-expanded="false">
                  <div class="media-header">
                     <span class="link-icon theme-icon theme-icon-active">
                        <i class="fas fa-circle-half-stroke fa-lg"></i>
                     </span>
                  </div>
                  <div class="media-body d-none">
                     <span class="link-text link-hover" id="bd-theme-text">
                        theme
                     </span>
                  </div>
               </button>
               <ul class="dropdown-menu dropdown-menu-end position-absolute" aria-labelledby="bd-theme-text">
                  <li>
                     <button class="dropdown-item media" data-bs-theme-value="light" aria-pressed="false">
                        <div class="media-header">
                           <span class="link-icon theme-icon">
                              <i class="fas fa-sun fa-lg"></i>
                           </span>
                        </div>
                        <div class="media-body">
                           <span class="link-text">
                              Light
                           </span>
                        </div>
                     </button>
                  </li>
                  <li>
                     <button class="dropdown-item media" data-bs-theme-value="dark" aria-pressed="false">
                        <div class="media-header">
                           <span class="link-icon theme-icon">
                              <i class="fas fa-moon fa-lg"></i>
                           </span>
                        </div>
                        <div class="media-body">
                           <span class="link-text">
                              Dark
                           </span>
                        </div>
                     </button>
                  </li>
                  <li>
                     <button class="dropdown-item media" data-bs-theme-value="auto" aria-pressed="true">
                        <div class="media-header">
                           <span class="link-icon theme-icon">
                              <i class="fas fa-circle-half-stroke fa-lg"></i>
                           </span>
                        </div>
                        <div class="media-body">
                           <span class="link-text">
                              Auto
                           </span>
                        </div>
                     </button>
                  </li>
               </ul>
            </li>
            <li class="nav-item dropdown">
               <a href="#" class="nav-link px-0 text-reset media align-items-center" id="nav-account">
                  <div class="media-header me-md-2">
                     <span class="link-icon">
                        <div class="ratio ratio-1x1 rounded-circle text-bg-dark border border-2 overflow-hidden" style="padding: .875rem; border-color: var(--bs-body-color) !important;">
                           <i class="fas fa-user top-50 start-50 translate-middle w-auto h-auto z-0"></i>
                           <img src="../../assets/img/user.jpg" class="object-fit-cover z-1" alt="">
                        </div>
                     </span>
                  </div>
                  <div class="media-body d-none d-md-block text-start">
                     <span class="link-text fs-reset lh-1">
                        <div style="font-size: .75em;">Hello,</div>
                        <div><b class="fw-medium">Pradhokot</b></div>
                     </span>
                  </div>
               </a>
            </li>
            <li class="nav-item">
               <div class="h-100 d-flex align-items-center">
                  <div class="vr h-75"></div>
               </div>
            </li>
            <li class="nav-item">
               <div class="d-flex h-100 align-items-center">
                  <select name="" class="rounded-0 bg-transparent p-0 border-0" id="" style="cursor: pointer;">
                     <option value="1">EN</option>
                     <option value="2">ID</option>
                  </select>
               </div>
               <!-- <a href="#" class="nav-link px-0 text-reset media">
                  <div class="media-header">
                     <span class="link-icon">
                        <i class="fas fa-search fa-lg"></i>
                     </span>
                  </div>
                  <div class="media-body d-none d-md-block">
                     <span class="link-text link-hover">
                        bilingual
                     </span>
                  </div>
               </a> -->
            </li>
         </ul>
      </div>
   </div><!-- end container -->
</nav><!-- end navbar -->`)