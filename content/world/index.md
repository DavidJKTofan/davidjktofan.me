---
title: World of Opportunities
date: "2020-06-28T00:00:00+01:00"
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
  #image: "world_thumbnail.png"
---
The World of Opportunities is a free resource platform for entrepreneurs and students who are eager to discover useful links, gaining access to resources, tools and opportunities to reach their goals. This is a personal pet project... Hope it is useful to someone! :)

Work in progress...

<!-- STYLESHEET CSS -->
<style>
  
  /* Mobile */
  @media only screen and (max-width: 600px) {
    .article-container {
      max-width: 380px !important;
      margin: 0 auto;
    }
  }
  
  /* Desktop */
  @media only screen and (min-width: 768px) {
    .article-container {
      max-width: 80% !important;
      padding: 0 20px;
      margin: 0 auto;
    }
  }

  .filter .google-visualization-controls-categoryfilter-selected li {
    background-color: rgb(1, 0, 113);
    border: 1px solid rgb(1, 0, 113);
    color: #FFFFFF;
    padding: 1px;
    padding-right: 7px;
    padding-left: 7px;
    padding-top: 7px;
    padding-bottom: 7px;
    margin-right: 5px;
    margin-bottom:5px;
    font-size: 10px;
  }

  .filter .goog-link-button {
    cursor: pointer;
    float: right;
    margin-left: 4px;
  }

  .filter2 .google-visualization-controls-categoryfilter-selected li {
    background-color: rgb(1, 0, 113, 0.8);
    border: 1px solid rgb(1, 0, 113, 0.5);
    color: #FFFFFF;
    padding: 1px;
    padding-right: 7px;
    padding-left: 7px;
    padding-top: 7px;
    padding-bottom: 7px;
    margin-right: 5px;
    margin-bottom:5px;
    font-size: 10px;
  }

  .filter2 .goog-link-button {
    cursor: pointer;
    float: right;
    margin-left: 4px;
  }

  .goog-menu-vertical {
    max-height: 100vh;
    overflow-y: auto;
    overflow: scroll;
  }

  th {
    padding-top: 12px;
    padding-bottom: 12px;
    border-color: rgb(151, 150, 168) !important;
    color: #FFFFFF;
  }

  .headerRow {
    background-color: rgb(1, 0, 113);
    font-family: 'Roboto', sans-serif;
    font-weight: bold;
    font-size: 18px;
    color: #FFFFFF;
  }

  .hoverTableRow {
    background-color: #ADC6F8 !important;
  }

  .tableCell {
    font-family: 'Roboto', sans-serif;
    font-size: 14px;
    padding-top: 10px;
    padding-right: 10px;
    padding-bottom: 10px;
    padding-left: 10px;
    margin-top: 10px;
    margin-bottom: 10px;
    margin-right: 10px;
    margin-left: 10px;
    height: 20px !important;
    color: white !important;
  }

  .table_style {
    border-collapse: collapse;
    table-layout: fixed;
  }

  .table_style tbody{
    overflow: auto;
    height: 20px;
  }
  
  /* COLUMN 1 */
  .table_style td:nth-child(1) {
    font-weight: bold;
    width: 35vw;
  }
  
  /* COLUMN 2 */
  .table_style td:nth-child(2) {
    font-size: 10px;
    width: 30vw;
  }
  
  /* COLUMN 3 */
  .table_style td:nth-child(3) {
    text-align: center;
    width: 35vw;
  }
  .table_style td:nth-child(3) a {
    text-decoration: none;
  }
  .table_style td:nth-child(3) a:hover {
    text-decoration: none;
    color: rgb(1, 0, 113);
    font-weight: bold;
    cursor: pointer;
  }
  .table_style td:nth-child(3) a:visited {
    color: rgb(250, 157, 27);
  }
  
</style>

<!-- Chart here -->
  <div id="dashboard" style="width: 100%; margin-top:40px; margin-bottom:40px;">
    <div class="row">
      <div>
        <div id="category_div" style="font-size: 15px; float:left; height:60px; margin:15px; margin-bottom:40px;"></div>
      </div>
      <div>
        <div id="category_2_div" style="font-size: 15px; float:left; height:60px; margin:15px; margin-left:60px;"></div>
      </div>
      <div>
        <div style="position:relative; float:right; height:40px; margin:15px; margin-left:80px">
          <p style="font-size:12px; color: #808080; margin-bottom: 5px;">Try searching for "MOOCs"</p>
          <div id="string_div" style="font-size: 15px;"></div>
        </div>
      </div>
    </div>
    <div style="width:100%; margin-top:40px; overflow-x:auto;">
      <table id="chart_div" class="table_style"></table>
    </div>
  </div>


<!-- Cloudflare Web Analytics -->
<script defer src='https://static.cloudflareinsights.com/beacon.min.js' data-cf-beacon='{"token": "08a438aae6a443f3a8e34d5c0c39ac2d"}'></script>
<!-- End Cloudflare Web Analytics -->

