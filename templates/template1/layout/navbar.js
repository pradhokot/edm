document.writeln(`
<nav class="navbar navbar-expand fixed-top bg-body">
   <div class="container-fluid container-content column-gap-3">
      <button class="navbar-toggler p-0 rounded-0 border-0 shadow-none d-block d-lg-none" data-bs-toggle="offcanvas" data-bs-target="#sidebar">
         <i class="navbar-toggler-icon"></i>
      </button>
      <h1 class="fs-reset m-0 lh-base d-lg-none">
         <img src="../../assets/img/icon-indraco.png" width="40" height="auto" alt="">
      </h1>
      <div class="navbar-collapse">
         <div class="d-none d-lg-block small">
            <script src="layout/menu-header.js"></script>
         </div>
         <ul class="nav ms-auto column-gap-3 text-capitalize align-items-center">
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
            <li class="nav-item">
               <a href="#" class="nav-link px-0 text-reset media">
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
               </a>
            </li>
            <li class="nav-item">
               <a href="#" class="nav-link px-0 text-reset media">
                  <div class="media-header">
                     <span class="link-icon">
                        <i class="fas fa-sun fa-lg"></i>
                     </span>
                  </div>
                  <div class="media-body d-none d-md-block">
                     <span class="link-text link-hover">
                        dark theme
                     </span>
                  </div>
               </a>
            </li>
            <li class="nav-item dropdown">
               <a href="#" class="nav-link px-0 text-reset media align-items-center" id="nav-account">
                  <div class="media-header me-2">
                     <span class="link-icon">
                        <div class="ratio ratio-1x1 rounded-circle text-bg-dark p-3 border border-2 border-dark overflow-hidden">
                           <i class="fas fa-user top-50 start-50 translate-middle w-auto h-auto z-0"></i>
                           <img src="../../assets/img/user.jpg" class="object-fit-cover z-1" alt="">
                        </div>
                     </span>
                  </div>
                  <div class="media-body d-none d-md-block">
                     <span class="link-text link-hover lh-1">
                        <div><small>Hello,</small></div>
                        <div><b class="fw-medium">Pradhokot</b></div>
                     </span>
                  </div>
               </a>
            </li>
         </ul>
      </div>
   </div><!-- end container -->
</nav><!-- end navbar -->`)