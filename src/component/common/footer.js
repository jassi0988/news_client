import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faArrowLeft, faCaretRight, faAngleRight, faEnvelope, faPhone, faMapMarked, faMarker, faMapMarker} from '@fortawesome/free-solid-svg-icons'

function Footer() {
  return (
    <footer class="ftco-footer ftco-bg-dark ftco-section">
    <div class="container">
        <div class="row mb-5">
            <div class="col-md">
              <div class="ftco-footer-widget mb-4">
                <h2 class="logo"><a href="#">Montreal<span>Times</span></a></h2>
                <ul class="ftco-footer-social list-unstyled float-md-left float-lft mt-5">
                  <li class="ftco-animate"><a href="#"><span class="icon-twitter"></span></a></li>
                  <li class="ftco-animate"><a href="#"><span class="icon-facebook"></span></a></li>
                  <li class="ftco-animate"><a href="#"><span class="icon-instagram"></span></a></li>
                </ul>
              </div>
            </div>
          
            <div class="col-md">
              <div class="ftco-footer-widget mb-4 ml-md-5">
                <h2 class="ftco-heading-2">Information</h2>
                <ul class="list-unstyled">
                  {/* <li><a href="#" class="py-1 d-block"><FontAwesomeIcon icon={faAngleRight} />Home</a></li> */}
                  <li><a href="#" class="py-1 d-block"><FontAwesomeIcon icon={faAngleRight} /> Home&nbsp;&nbsp;&nbsp;   </a></li>
                  <li><a href="#" class="py-1 d-block"><FontAwesomeIcon icon={faAngleRight} /> Articles</a></li>
                  <li><a href="#" class="py-1 d-block"><FontAwesomeIcon icon={faAngleRight} /> Contact</a></li>
                </ul>
              </div>
            </div>
            <div class="col-md">
            <div class="ftco-footer-widget mb-4">
              <h2 class="ftco-heading-2">Have a Questions?</h2>
              <div class="block-23 mb-3">
                <ul>
                  <li><FontAwesomeIcon icon={faMapMarker} /><span class="text"> 203 Fake St. Montreal, Quebec H32 2K1</span></li>
                  <li><FontAwesomeIcon icon={faPhone} /><span class="text"> +1 392 3929 210</span></li>
                  <li><a href="#"><FontAwesomeIcon icon={faEnvelope} /><span class="text"> help@montrealtimes.co</span></a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-md-12 text-center">

          <p>Copyright &copy;<script>document.write(new Date().getFullYear());</script> All rights reserved | MontrealTimes</p>
        </div>
      </div>
  </footer>
  

  );
}

export default Footer;
