---
title: GoogleMaps Travel List
date: "2020-08-28T00:00:00+01:00"
draft: false
share: true
commentable: false
editable: false
image:
  filename: featured.png
  focal_point: Smart
  preview_only: true

# Optional header image (relative to `static/media/` folder).
#header:
  #caption: ""
  #image: "travel_thumbnail.png"
---
During some of my journeys around the globe I try to remember the places that impacted me the most – must-see places –, or simply places that I had fun seeing. Therefore, I created a series of GoogleMaps Lists which I would like to share with you and your friends.

Hope they are useful :) and feel free to recommend me new places too!

Work in progress... (Currently only available on desktop)...

<!-- STYLESHEET CSS -->
<style>
* {
  box-sizing: border-box;
}

body {
  margin: 0;
  font-family: Arial;
}

.header {
  text-align: center;
  padding: 32px;
}

.row_grid {
  display: -ms-flexbox;
  display: flex;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  padding: 0 4px;
}

.column_grid {
  -ms-flex: 25%;
  flex: 25%;
  max-width: 25%;
  padding: 0 4px;
}

.column_grid img {
  margin-top: 5px;
  vertical-align: middle;
  width: 100%;
}

@media screen and (max-width: 800px) {
  .column_grid {
    -ms-flex: 50%;
    flex: 50%;
    max-width: 50%;
  }
}

@media screen and (max-width: 600px) {
  .column_grid {
    -ms-flex: 100%;
    flex: 100%;
    max-width: 100%;
  }
}

.container_grid {
  position: relative;
  width: 100%;
  max-width: 400px;
}

.container_grid img {
  width: 100%;
  height: auto;
}

.container_grid .btn {
  position: absolute;
  top: 80%;
  left: 20%;
  transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  background-color: rgb(40, 42, 54, 0.8);
  color: white;
  font-size: 16px;
  padding: 12px 24px;
  border: none;
  cursor: pointer;
  border-radius: 10px;
  text-align: center;
  clip-path: polygon(0% 0%, 85% 0%, 100% 50%, 85% 100%, 0% 100%);
}

.container_grid .btn:hover {
  background-color: rgb(41, 98, 255, 0.9);
}
</style>

<div class="row_grid">
  <div class="column_grid">

    <div class="container_grid">
      <img src="/gmaps-images/CDMX-piramides.jpeg" alt="Mexico City" style="width:100%">
      <a href="https://goo.gl/maps/xweG7kQr8jq8omd36" target="_blank">
        <button class="btn">CDMX</button>
      </a>
    </div>

    <div class="container_grid">
      <img src="/gmaps-images/Iceland-background.jpg" alt="Iceland" style="width:100%">
      <a href="https://goo.gl/maps/Rmu2vJUvN9Y8a6bV9" target="_blank">
        <button class="btn">Iceland</button>
      </a>
    </div>

  </div>
  <div class="column_grid">

    <div class="container_grid">
      <img src="/gmaps-images/miami-beach-sun.jpg" alt="Miami" style="width:100%">
      <a href="https://goo.gl/maps/1JEc36CbsZi9HZw27" target="_blank">
        <button class="btn">Miami</button>
      </a>
    </div>

    <div class="container_grid">
      <img src="/gmaps-images/New-York-background.jpg" alt="New York City" style="width:100%">
      <a href="https://goo.gl/maps/qvcjPQ7uvk4XVBKm7" target="_blank">
        <button class="btn">New York</button>
      </a>
    </div>

  </div>
  <div class="column_grid">

    <div class="container_grid">
      <img src="/gmaps-images/Cadiz-background.jpg" alt="Cadiz" style="width:100%">
      <a href="https://goo.gl/maps/n4KSVZf3ekJ84hjR7" target="_blank">
        <button class="btn">Cádiz</button>
      </a>
    </div>

    <div class="container_grid">
      <img src="/gmaps-images/Madrid-background.jpg" alt="Madrid" style="width:100%">
      <a href="https://goo.gl/maps/uVDZCEa1vLotgps78" target="_blank">
        <button class="btn">Madrid</button>
      </a>
    </div>

    <div class="container_grid">
      <img src="/gmaps-images/seville-spain.jpg" alt="Sevilla" style="width:100%">
      <a href="https://goo.gl/maps/hgW4NTkVMnJECMa48" target="_blank">
        <button class="btn">Seville</button>
      </a>
    </div>

  </div>
  <div class="column_grid">

    <div class="container_grid">
      <img src="/gmaps-images/Munich-city-background.jpg" alt="Munich" style="width:100%">
      <a href="https://goo.gl/maps/KmzMJEcfaZ5vkoNy6" target="_blank">
        <button class="btn">Munich</button>
      </a>
    </div>

    <div class="container_grid">
      <img src="/gmaps-images/paris-eiffel-tower.jpg" alt="Paris" style="width:100%">
      <a href="https://goo.gl/maps/CEKdSx2KLyCCzdT86" target="_blank">
        <button class="btn">Paris</button>
      </a>
    </div>

  </div>
</div>
