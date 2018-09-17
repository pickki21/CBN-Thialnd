import React from 'react'
import 'bulma-extensions'
import { bulmaCarousel } from 'bulma-extensions';
class Timeline extends  React.Component {
  componentDidMount() {
 bulmaCarousel.attach();
 }
  render(){
    return(
      <section class="hero is-medium has-carousel">
  <div class="hero-carousel carousel-animated carousel-animate-fade">
    <div class='carousel-container'>
      <div class='carousel-item has-background is-active'>
        <img class="is-background" src="IMG_2780.jpg" alt="" />
      </div>
      <div class='carousel-item has-background'>
        <img class="is-background" src="DSC00055.jpg" alt="" />
      </div>
      <div class='carousel-item has-background'>
        <img class="is-background" src="_MG_8439.jpg" alt="" />
      </div>
      <div class='carousel-item has-background'>
        <img class="is-background" src="DSC01215.JPG" alt="" />
      </div>
    </div>
    <div class="carousel-navigation is-overlay">
      <div class="carousel-nav-left">
        <i class="fa fa-chevron-left" aria-hidden="true"></i>
      </div>
      <div class="carousel-nav-right">
        <i class="fa fa-chevron-right" aria-hidden="true"></i>
      </div>
    </div>
  </div>
  <div class="hero-head">
    <nav class="navbar is-transparent">
      <div class="container">
        <div class="navbar-brand">
          <a class="navbar-item">
            <img src="http://www.mediafire.com/convkey/3fe2/kkyhb543ksyl46hzg.jpg" alt="Logo" />
          </a>
          <span class="navbar-burger burger" data-target="navbarMenuHeroA">
            <span></span>
            <span></span>
            <span></span>
          </span>
        </div>
        <div id="navbarMenuHeroA" class="navbar-menu">
          <div class="navbar-end">
            <a class="navbar-item has-text-white is-active">
              Home
            </a>
            <a class="navbar-item has-text-white">
              Examples
            </a>
            <a class="navbar-item has-text-white">
              Documentation
            </a>
            <span class="navbar-item has-text-white">
              <a class="button is-primary is-inverted">
                <span class="icon">
                  <i class="fa fa-github"></i>
                </span>
                <span>Donate</span>
              </a>
            </span>
          </div>
        </div>
      </div>
    </nav>
  </div>
  <div class="hero-body has-text-centered">
    <div class="columns is-mobile is-centered">
      <div class="column is-half is-narrow">
        <div class="field has-addons">
          <div class="control is-expanded">
            <input class="input" type="text" placeholder="Find a repository" />
          </div>
          <div class="control">
            <a class="button is-info">
              Search
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="hero-foot">
    <nav class="tabs is-boxed is-fullwidth">
      <div class="container">
        <ul>
          <li class="is-active"><a>Overview</a></li>
          <li><a class="has-text-white">โครงการพัฒนาผู้นำเด็กและเยาว์ชน</a></li>
          <li><a class="has-text-white">โครงการประปาภูเขา</a></li>
          <li><a class="has-text-white">School of Life</a></li>
          <li><a class="has-text-white">Components</a></li>
          <li><a class="has-text-white">Layout</a></li>
        </ul>
      </div>
    </nav>
  </div>
</section>



    )
  }
}

export default Timeline
