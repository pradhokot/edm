document.writeln(`
<aside id="sidebar" class="offcanvas-lg offcanvas-start text-capitalize position-fixed top-0 start-0 bottom-0 h-100 d-flex flex-column pb-4" z-index="-1">
   <div class="offcanvas-header flex-grow-0 d-flex justify-content-lg-center">
      <h1 class="fs-reset m-0 lh-base">
         <img src="../../assets/img/logo-indraco.png" width="160" height="auto" class="img-default" alt="">
         <img src="../../assets/img/logo-indraco-invert.png" width="160" height="auto" class="img-invert" alt="">
      </h1>
      <button class="btn-close rounded-0 shadow-none d-lg-none" data-bs-toggle="offcanvas" data-bs-target="#sidebar"></button>
   </div>
   <div class="offcanvas-body flex-grow-1 overflow-y-auto">
      <div id="menu" class="w-100">
         <div class="d-lg-none">
            <script src="layout/menu-header.js"></script>
            <hr>
         </div>
         <ul class="nav menu-list flex-column">
            <li class="nav-item menu-item toggle-collapse">
               <a data-bs-toggle="collapse" href="#collapseMenu1" class="nav-link menu-link px-0 text-reset collapsed">
                  <span class="link-text link-hover">main menu</span>
               </a>
               <div class="collapse d-lg-block" id="collapseMenu1" data-bs-parent="#menu">
                  <ul class="nav submenu-list flex-column">
                     <li class="nav-item submenu-item">
                        <a href="#" class="nav-link submenu-link px-0 text-reset media">
                           <div class="media-header">
                              <span class="link-icon">
                                 <i class="fas fa-gear"></i>
                              </span>
                           </div>
                           <div class="media-body">
                              <span class="link-text link-hover">submenu link</span>
                           </div>
                        </a>
                     </li>
                     <li class="nav-item submenu-item">
                        <a href="#" class="nav-link submenu-link px-0 text-reset media">
                           <div class="media-header">
                              <span class="link-icon">
                                 <i class="fas fa-gear"></i>
                              </span>
                           </div>
                           <div class="media-body">
                              <span class="link-text link-hover">submenu link</span>
                           </div>
                        </a>
                     </li>
                     <li class="nav-item submenu-item">
                        <a href="#" class="nav-link submenu-link px-0 text-reset media">
                           <div class="media-header">
                              <span class="link-icon">
                                 <i class="fas fa-gear"></i>
                              </span>
                           </div>
                           <div class="media-body">
                              <span class="link-text link-hover">submenu link</span>
                           </div>
                        </a>
                     </li>
                     <li class="nav-item submenu-item">
                        <a href="#" class="nav-link submenu-link px-0 text-reset media">
                           <div class="media-header">
                              <span class="link-icon">
                                 <i class="fas fa-gear"></i>
                              </span>
                           </div>
                           <div class="media-body">
                              <span class="link-text link-hover">submenu link</span>
                           </div>
                        </a>
                     </li>
                  </ul>
               </div>
            </li><!-- end menu item -->
            <li class="nav-item menu-item toggle-collapse">
               <a data-bs-toggle="collapse" href="#collapseMenu2" class="nav-link menu-link px-0 text-reset collapsed">
                  <span class="link-text link-hover">transactional setting</span>
               </a>
               <div class="collapse d-lg-block" id="collapseMenu2" data-bs-parent="#menu">
                  <ul class="nav submenu-list flex-column">
                     <li class="nav-item submenu-item">
                        <a href="#" class="nav-link submenu-link px-0 text-reset media">
                           <div class="media-header">
                              <span class="link-icon">
                                 <i class="fas fa-gear"></i>
                              </span>
                           </div>
                           <div class="media-body">
                              <span class="link-text link-hover">submenu link</span>
                           </div>
                        </a>
                     </li>
                     <li class="nav-item submenu-item">
                        <a href="#" class="nav-link submenu-link px-0 text-reset media">
                           <div class="media-header">
                              <span class="link-icon">
                                 <i class="fas fa-gear"></i>
                              </span>
                           </div>
                           <div class="media-body">
                              <span class="link-text link-hover">submenu link</span>
                           </div>
                        </a>
                     </li>
                     <li class="nav-item submenu-item">
                        <a href="#" class="nav-link submenu-link px-0 text-reset media">
                           <div class="media-header">
                              <span class="link-icon">
                                 <i class="fas fa-gear"></i>
                              </span>
                           </div>
                           <div class="media-body">
                              <span class="link-text link-hover">submenu link</span>
                           </div>
                        </a>
                     </li>
                     <li class="nav-item submenu-item">
                        <a href="#" class="nav-link submenu-link px-0 text-reset media">
                           <div class="media-header">
                              <span class="link-icon">
                                 <i class="fas fa-gear"></i>
                              </span>
                           </div>
                           <div class="media-body">
                              <span class="link-text link-hover">submenu link</span>
                           </div>
                        </a>
                     </li>
                  </ul>
               </div>
            </li><!-- end menu item -->
            <li class="nav-item menu-item toggle-collapse">
               <a data-bs-toggle="collapse" href="#collapseMenu3" class="nav-link menu-link px-0 text-reset collapsed">
                  <span class="link-text link-hover">master setting</span>
               </a>
               <div class="collapse d-lg-block" id="collapseMenu3" data-bs-parent="#menu">
                  <ul class="nav submenu-list flex-column">
                     <li class="nav-item submenu-item">
                        <a href="#" class="nav-link submenu-link px-0 text-reset media">
                           <div class="media-header">
                              <span class="link-icon">
                                 <i class="fas fa-gear"></i>
                              </span>
                           </div>
                           <div class="media-body">
                              <span class="link-text link-hover">submenu link</span>
                           </div>
                        </a>
                     </li>
                     <li class="nav-item submenu-item">
                        <a href="#" class="nav-link submenu-link px-0 text-reset media">
                           <div class="media-header">
                              <span class="link-icon">
                                 <i class="fas fa-gear"></i>
                              </span>
                           </div>
                           <div class="media-body">
                              <span class="link-text link-hover">submenu link</span>
                           </div>
                        </a>
                     </li>
                     <li class="nav-item submenu-item">
                        <a href="#" class="nav-link submenu-link px-0 text-reset media">
                           <div class="media-header">
                              <span class="link-icon">
                                 <i class="fas fa-gear"></i>
                              </span>
                           </div>
                           <div class="media-body">
                              <span class="link-text link-hover">submenu link</span>
                           </div>
                        </a>
                     </li>
                     <li class="nav-item submenu-item">
                        <a href="#" class="nav-link submenu-link px-0 text-reset media">
                           <div class="media-header">
                              <span class="link-icon">
                                 <i class="fas fa-gear"></i>
                              </span>
                           </div>
                           <div class="media-body">
                              <span class="link-text link-hover">submenu link</span>
                           </div>
                        </a>
                     </li>
                  </ul>
               </div>
            </li><!-- end menu item -->
            <li class="nav-item menu-item toggle-collapse">
               <a data-bs-toggle="collapse" href="#collapseMenu3" class="nav-link menu-link px-0 text-reset collapsed">
                  <span class="link-text link-hover">master setting</span>
               </a>
               <div class="collapse d-lg-block" id="collapseMenu3" data-bs-parent="#menu">
                  <ul class="nav submenu-list flex-column">
                     <li class="nav-item submenu-item">
                        <a href="#" class="nav-link submenu-link px-0 text-reset media">
                           <div class="media-header">
                              <span class="link-icon">
                                 <i class="fas fa-gear"></i>
                              </span>
                           </div>
                           <div class="media-body">
                              <span class="link-text link-hover">submenu link</span>
                           </div>
                        </a>
                     </li>
                     <li class="nav-item submenu-item">
                        <a href="#" class="nav-link submenu-link px-0 text-reset media">
                           <div class="media-header">
                              <span class="link-icon">
                                 <i class="fas fa-gear"></i>
                              </span>
                           </div>
                           <div class="media-body">
                              <span class="link-text link-hover">submenu link</span>
                           </div>
                        </a>
                     </li>
                     <li class="nav-item submenu-item">
                        <a href="#" class="nav-link submenu-link px-0 text-reset media">
                           <div class="media-header">
                              <span class="link-icon">
                                 <i class="fas fa-gear"></i>
                              </span>
                           </div>
                           <div class="media-body">
                              <span class="link-text link-hover">submenu link</span>
                           </div>
                        </a>
                     </li>
                     <li class="nav-item submenu-item">
                        <a href="#" class="nav-link submenu-link px-0 text-reset media">
                           <div class="media-header">
                              <span class="link-icon">
                                 <i class="fas fa-gear"></i>
                              </span>
                           </div>
                           <div class="media-body">
                              <span class="link-text link-hover">submenu link</span>
                           </div>
                        </a>
                     </li>
                  </ul>
               </div>
            </li><!-- end menu item -->
         </ul><!-- end menu list -->
      </div><!-- end menu -->
   </div>
</aside><!-- end sidebar -->`)