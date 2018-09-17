
import React from 'react'
import 'bulma-extensions'
import { bulmaCarousel } from 'bulma-extensions';
class Media extends  React.Component {
  componentDidMount() {
 bulmaCarousel.attach();
 }
  render(){
    return(
      <section class="hero is-medium is-info is-bold">
        <div class="hero-body">
          <div class="container">

          <h1 class="title">
            โครงการน้ำสะอาด | ประปาภูเขา
          </h1>
            <iframe width="1185" height="643"
            src="https://www.youtube.com/embed/UimGpEY6Lro"
            frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
            <h1 class="title">
              โครงการน้ำสะอาด | ประปาภูเขา
            </h1>
            <h2 class="subtitle">
            <dd>โครงการน้ำสะอาด Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam semper diam at erat pulvinar, at pulvinar felis blandit. Vestibulum volutpat tellus diam, consequat gravida libero rhoncus ut. Morbi maximus, leo sit amet vehicula eleifend, nunc dui porta orci, quis semper odio felis ut quam.

Suspendisse varius ligula in molestie lacinia. Maecenas varius eget ligula a sagittis. Pellentesque interdum, nisl nec interdum maximus, augue diam porttitor lorem, et sollicitudin felis neque sit amet erat. Maecenas imperdiet felis nisi, fringilla luctus felis hendrerit sit amet. Aenean vitae gravida diam, finibus dignissim turpis. Sed eget varius ligula, at volutpat tortor.

Integer sollicitudin, tortor a mattis commodo, velit urna rhoncus erat, vitae congue lectus dolor consequat libero. Donec leo ligula, maximus et pellentesque sed, gravida a metus. Cras ullamcorper a nunc ac porta. Aliquam ut aliquet lacus, quis faucibus libero. Quisque non semper leo.</dd>
            </h2>
          </div>
        </div>
      </section>


    )
  }
}

export default Media
